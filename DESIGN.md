# DESIGN.md — 设计令牌规范 (v3: 蓝白 / 蓝黑双模式)

> 仅允许的色值来源。所有 CSS/HTML/JS 中 **严禁硬编码** 颜色、间距、圆角、阴影、动效时长。  
> 迁移/新增样式必须在此定义令牌后再引用 `var(--token-name)`。

---

## 1. 色彩令牌

### 1.1 浅色模式 (默认) — 蓝白
```css
:root {
  /* 背景层 */
  --c-bg: #FFFFFF;           /* 页面底色 */
  --c-bg-alt: #F5F5F7;       /* 区块交替、卡片底 */
  --c-bg-elevated: #FFFFFF;  /* 悬浮层、模态、下拉菜单 */

  /* 文字层 */
  --c-text: #1D1D1F;         /* 主标题、正文 */
  --c-text-muted: #86868B;   /* 次要说明、_meta_、置灰 */
  --c-text-inverted: #FFFFFF;/* 深色背景上的文字 */

  /* 线条/分隔 */
  --c-line: #D2D2D7;         /* 分割线、边框、输入框边框 */

  /* 品牌/强调 */
  --c-accent: #0071E3;       /* 主按钮、链接、关键交互、选中态 */
  --c-accent-hover: #0077ED; /* hover 态 */
  --c-accent-press: #005BBB; /* active/press 态 */
  --c-accent-soft: rgba(0, 113, 227, 0.12); /* 轻量背景、chip 选中 */

  /* 语义色（仅状态指示） */
  --c-success: #30D158;
  --c-warning: #FF9F0A;
  --c-error: #FF453A;

  /* 导航栏 */
  --c-nav-bg: rgba(255, 255, 255, 0.72);
  --c-nav-border: rgba(210, 210, 215, 0.5);
  --c-nav-blur: blur(20px) saturate(180%);

  /* 选中/焦点 */
  --c-focus: #0071E3;
  --c-focus-offset: 2px;
}
```

### 1.2 深色模式 — 蓝黑
```css
@media (prefers-color-scheme: dark) {
  :root:not(.theme-light) {
    /* 背景层 */
    --c-bg: #000000;             /* 纯黑底 */
    --c-bg-alt: #1D1D1F;         /* 卡片、区块交替 */
    --c-bg-elevated: #1D1D1F;    /* 悬浮层 */

    /* 文字层 */
    --c-text: #FFFFFF;
    --c-text-muted: #86868B;
    --c-text-inverted: #000000;

    /* 线条/分隔 */
    --c-line: #2D2D2D;

    /* 品牌/强调（同浅色，保持品牌识别度） */
    --c-accent: #0071E3;
    --c-accent-hover: #0077ED;
    --c-accent-press: #005BBB;
    --c-accent-soft: rgba(0, 113, 227, 0.18);

    /* 语义色 */
    --c-success: #30D158;
    --c-warning: #FF9F0A;
    --c-error: #FF453A;

    /* 导航栏 */
    --c-nav-bg: rgba(0, 0, 0, 0.72);
    --c-nav-border: rgba(255, 255, 255, 0.1);
    --c-nav-blur: blur(20px) saturate(180%);

    /* 选中/焦点 */
    --c-focus: #0071E3;
  }
}

/* 手动切换类（JS 控制） */
.theme-light { /* 强制浅色 */ }
.theme-dark  { /* 强制深色 */ }
```

> **禁用**：任何紫色/渐变/彩色主题色、玻璃拟态堆叠、重阴影、发光、霓虹色。

---

## 2. 字体令牌

```css
:root {
  /* 系统字体栈（禁用外部字体文件、base64 字体、SF Pro 字体文件） */
  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text",
               "Helvetica Neue", "PingFang SC", "Hiragino Sans GB",
               "Microsoft YaHei", Arial, sans-serif;
  --font-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;

  /* 字号阶梯（clamp 响应式） */
  --fs-hero: clamp(48px, 8vw, 80px);       /* Hero 主标题 48–80px */
  --fs-section: clamp(40px, 6vw, 56px);    /* 区块标题 40–56px */
  --fs-body: 17px;                          /* 正文 17px */
  --fs-body-sm: 14px;                       /* 次要说明 14px */
  --fs-nav: 12px;                           /* 导航链接 12px */
  --fs-btn: 17px;                           /* 按钮文字 17px */

  /* 行高 */
  --lh-hero: 1.05;
  --lh-section: 1.1;
  --lh-body: 1.47;
  --lh-body-sm: 1.43;

  /* 字重 */
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;

  /* 字间距 */
  --tracking-hero: -0.015em;
  --tracking-tight: -0.02em;
  --tracking-wide: 0.14em;   /* eyebrow/标签 */
}
```

---

## 3. 间距与布局令牌

```css
:root {
  /* 基础单位 8px */
  --s-1: 8px;   --s-2: 16px;   --s-3: 24px;
  --s-4: 32px;  --s-5: 48px;   --s-6: 64px;
  --s-7: 80px;  --s-8: 120px;

  /* 区块垂直间距 */
  --section-y: var(--s-7);       /* 桌面 80px */
  --section-y-mobile: var(--s-6);/* 移动 64px */

  /* 容器宽度 */
  --w-content: 980px;   /* 标准内容最大宽 */
  --w-wide: 1200px;     /* 宽版容器 */

  /* 移动端左右边距 */
  --pad-x: 20px;

  /* 断点 */
  --bp-sm: 734px;
  --bp-md: 1068px;

  /* 导航栏高度 */
  --nav-h: 48px;
}
```

---

## 4. 圆角与边框令牌

```css
:root {
  --r-card: 18px;      /* 卡片、面板 */
  --r-pill: 980px;     /* 胶囊按钮、chip、标签 */
  --r-input: 10px;     /* 输入框、下拉 */
  --r-xl: 24px;        /* 大型面板、Hero 视觉区 */
  --bw: 1px;           /* 统一细边框 */
}
```

---

## 5. 阴影令牌

```css
:root {
  /* 仅允许极浅阴影，禁止重阴影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.08);
  --shadow-focus: 0 0 0 2px var(--c-focus);
}
```

> 深色模式下阴影可视性极低，主要靠边框与背景层级区分。

---

## 6. 动效令牌

```css
:root {
  --dur-fast: 200ms;
  --dur: 300ms;
  --dur-slow: 400ms;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);    /* 标准缓动 */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);  /* 退出缓动 */

  /* 仅允许动画的属性 */
  --anim-props: opacity, transform, color, background-color, border-color, box-shadow;
}
```

> **强制**：`prefers-reduced-motion: reduce` 时，所有动效时长归零（见 CSS 基础重置）。

---

## 7. Z-index 层级

```css
:root {
  --z-bg: 0;          /* 背景 Canvas/粒子 */
  --z-content: 10;    /* 主内容 */
  --z-nav: 100;       /* 固定导航 */
  --z-dropdown: 200;  /* 下拉菜单 */
  --z-modal: 1000;    /* 模态框 */
  --z-toast: 1100;    /* Toast/通知 */
}
```

---

## 8. 组件规范摘要

| 组件 | 规范 |
|------|------|
| **主按钮** | 背景 `var(--c-accent)`，文字 `var(--c-text-inverted)`，圆角 `var(--r-pill)`，padding `12px 22px`，高度 44px |
| **次按钮** | 透明背景，文字 `var(--c-accent)`，1px 边框 `var(--c-accent)`，同尺寸 |
| **卡片** | 背景 `var(--c-bg-elevated)` / `var(--c-bg-alt)`，圆角 `var(--r-card)`，边框 `var(--bw) solid var(--c-line)`，**无重阴影** |
| **导航栏** | 高 `var(--nav-h)`，背景 `var(--c-nav-bg)`，`backdrop-filter: var(--c-nav-blur)`，底部 1px `var(--c-nav-border)` |
| **Chip/标签** | 背景 `var(--c-bg-alt)`，文字 `var(--c-text-muted)`，边框 `var(--c-line)`，圆角 `var(--r-pill)` |
| **焦点态** | `outline: 2px solid var(--c-focus)`，`outline-offset: var(--c-focus-offset)` |
| **分隔线** | `1px solid var(--c-line)` 或渐变淡入淡出 |

---

## 9. 响应式策略

- **桌面 (≥1068px)**：大留白、双列/三列网格、最大宽 980px/1200px
- **平板 (734–1067px)**：单列或双列、字号阶梯微降、边距 32px
- **手机 (<734px)**：单列、字号再降、左右边距 20px、触控目标 ≥44px、导航折叠为汉堡菜单

---

## 10. 可访问性基线

- 对比度：正文 ≥4.5:1，大号文本 ≥3:1（WCAG AA）
- 焦点可见：所有可交互元素有 `:focus-visible` 样式
- 语义 HTML：`header`/`nav`/`main`/`section`/`article`/`footer`/`aside`
- 键盘可操作：Tab 顺序合理，Esc 关闭菜单/模态
- `prefers-reduced-motion`：动效归零
- 图片有 `alt`，SVG 装饰性用 `aria-hidden="true"`

---

## 11. 迁移清单（从旧版 MD3 紫色主题）

- [x] 移除 `--mdui-color-*` 所有 MDUI 变量
- [x] 移除 `@font-face` base64 `Xiaoxin Chaoku`
- [x] 移除 Canvas 极光/粒子背景（`#bg`、`.bg-veil`、`.bg-grain`）
- [x] 移除滚动进度条（`.progress-rail`、`.progress-bar`）
- [x] 移除紫色渐变、发光、霓虹、玻璃拟态堆叠
- [x] 统一圆角为 `--r-card`/`--r-pill`/`--r-xl`
- [x] 统一动效为 `--dur-fast/--dur/--dur-slow` + `--ease`
- [x] 统一 Z-index 为 `--z-*`
- [x] 仅保留 `opacity`/`transform`/`color`/`background`/`border`/`box-shadow` 动画