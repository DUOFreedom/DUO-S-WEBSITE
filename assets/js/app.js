/* ============================================================
   DUO-S-WEBSITE — 交互脚本 (v3: 蓝白 / 蓝黑双模式)
   无外部依赖：主题、菜单、入场动画、滚动进度条全部原生实现
   ============================================================ */
(function () {
  'use strict';

  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  const cssVar = (name, el = root) =>
    getComputedStyle(el).getPropertyValue(name).trim();

  /* ---------------- 主题切换 ---------------- */
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const themeBtn = document.getElementById('themeBtn');

  function applyTheme(dark) {
    root.classList.toggle('theme-dark', dark);
    root.classList.toggle('theme-light', !dark);
    if (themeMeta) {
      themeMeta.setAttribute('content', dark ? '#000000' : '#FFFFFF');
    }
    if (themeBtn) {
      themeBtn.setAttribute('aria-pressed', String(dark));
    }
  }

  // 读取保存的偏好，默认跟随系统
  let saved = null;
  try { saved = localStorage.getItem('dz-theme'); } catch (e) {}
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved ? saved === 'dark' : prefersDark);

  function toggleTheme() {
    const dark = !root.classList.contains('theme-dark');
    applyTheme(dark);
    try { localStorage.setItem('dz-theme', dark ? 'dark' : 'light'); } catch (e) {}
  }

  // 事件委托：即使按钮被遮挡也能触发
  document.addEventListener('click', function (e) {
    let el = e.target;
    while (el && el !== document) {
      if (el.id === 'themeBtn') { toggleTheme(); return; }
      el = el.parentNode;
    }
  }, true);

  if (themeBtn) {
    themeBtn.addEventListener('click', e => e.stopPropagation());
  }

  // 监听系统主题变化（仅在未手动设置时）
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    try {
      if (!localStorage.getItem('dz-theme')) {
        applyTheme(e.matches);
      }
    } catch (_) {}
  });

  /* ---------------- 移动端菜单 ---------------- */
  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = navMenu?.querySelectorAll('a');

  function setMenuOpen(open) {
    if (!navMenu) return;
    if (open) {
      navMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
    if (menuBtn) menuBtn.setAttribute('aria-expanded', String(open));
  }

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', e => {
      e.stopPropagation();
      setMenuOpen(!navMenu.classList.contains('open'));
    });

    // 点击链接关闭菜单
    navLinks?.forEach(a => a.addEventListener('click', () => setMenuOpen(false)));

    // 点击外部关闭菜单
    document.addEventListener('click', e => {
      if (navMenu.classList.contains('open') &&
          !navMenu.contains(e.target) &&
          !menuBtn.contains(e.target)) {
        setMenuOpen(false);
      }
    });

    // Esc 关闭
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        setMenuOpen(false);
        menuBtn.focus();
      }
    });

    // 窗口变大自动关闭
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 734 && navMenu.classList.contains('open')) {
        setMenuOpen(false);
      }
    });
  }

  /* ---------------- 入场动画 (IntersectionObserver) ---------------- */
  const revealEls = document.querySelectorAll('.reveal');

  if (!reduceMotion && 'IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    revealEls.forEach(el => io.observe(el));
  } else {
    // 无 IO 支持或减少动效：直接显示
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------------- 滚动进度条 ---------------- */
  const progressBar = document.getElementById('pbar');
  if (progressBar && !reduceMotion) {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      progressBar.style.width = `${Math.min(100, progress * 100)}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  } else if (progressBar) {
    progressBar.style.width = '100%';
  }

  /* ---------------- 导航栏滚动态 ---------------- */
  const topbar = document.getElementById('topbar');
  if (topbar && !reduceMotion) {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 20) topbar.classList.add('scrolled');
      else topbar.classList.remove('scrolled');
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- 目录折叠 (移动端) ---------------- */
  const tocToggle = document.getElementById('tocToggle');
  const side = document.querySelector('.side');

  if (tocToggle && side) {
    tocToggle.addEventListener('click', () => {
      const expanded = tocToggle.getAttribute('aria-expanded') === 'true';
      tocToggle.setAttribute('aria-expanded', String(!expanded));
      side.classList.toggle('open', !expanded);
    });
  }

  /* ---------------- 平滑锚点滚动补偿 ---------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = parseInt(cssVar('--nav-h'), 10) + 12;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ---------------- 当前年份 ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();