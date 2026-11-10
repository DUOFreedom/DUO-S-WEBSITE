# DESIGN.md — 铎的小站 设计令牌

苹果式极简产品叙事（Apple-like minimal product storytelling）。
本文件是**唯一**的设计取值来源：颜色、字号、间距、圆角、动效、层级一律在此定义，
`assets/css/styles.css` 中的 CSS 自定义属性与此表一一对应。页面与样式表内**不得**出现硬编码值。

---

## 1. 色彩

| 令牌 | 值 | 用途 |
| --- | --- | --- |
| `--c-bg` | `#FFFFFF` | 背景主色 |
| `--c-bg-alt` | `#F5F5F7` | 背景次色（交替区块） |
| `--c-text` | `#1D1D1F` | 主文字 |
| `--c-text-muted` | `#86868B` | 次要文字 |
| `--c-line` | `#D2D2D7` | 分隔线 |
| `--c-accent` | `#0071E3` | 强调蓝 |
| `--c-link` | `#0066CC` | 链接蓝 |
| `--c-accent-hover` | `#0077ED` | 按钮 hover |
| `--c-on-accent` | `#FFFFFF` | 强调色上的文字 |
| `--c-nav-bg` | `rgba(255, 255, 255, 0.72)` | 导航毛玻璃底 |
| `--c-menu-bg` | `rgba(255, 255, 255, 0.94)` | 移动端菜单底 |

**禁止**：紫色 / 多彩渐变、玻璃拟态卡片堆叠、任何未列入上表的颜色。

## 2. 字体

```
--font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text",
             "Helvetica Neue", Arial, sans-serif;
```

不使用、不下载、不复制 SF 字体文件，以上栈为系统字体近似。

| 令牌 | 字号 | 字重 | 行高 | 字距 | 用途 |
| --- | --- | --- | --- | --- | --- |
| `--fs-hero` | `clamp(2.75rem, 6vw, 5rem)` (44–80px) | 600 | `--lh-tight` 1.05 | `--ls-tight` -0.015em | 首屏大标题 |
| `--fs-section` | `clamp(2rem, 4.4vw, 3.5rem)` (32–56px) | 600 | 1.1 | -0.015em | 区块标题 |
| `--fs-title` | `clamp(1.375rem, 2.4vw, 1.75rem)` (22–28px) | 600 | 1.2 | -0.01em | 条目标题 |
| `--fs-body` | `1.0625rem` (17px) | 400 | `--lh-body` 1.47 | 0 | 正文 |
| `--fs-sm` | `0.875rem` (14px) | 400 | `--lh-sm` 1.43 | 0 | 次要说明 |
| `--fs-nav` | `0.75rem` (12px) | 400 | 1 | 0.02em | 导航链接 |
| `--fs-btn` | `1.0625rem` (17px) | 400 | 1 | 0 | 按钮文字 |

移动端按上表 `clamp()` 下限阶梯下降，不额外覆盖。

## 3. 间距

基础单位 8px，阶梯 8 / 16 / 24 / 32 / 48 / 64 / 80 / 120。

| 令牌 | 值 |
| --- | --- |
| `--s-1` | 8px |
| `--s-2` | 16px |
| `--s-3` | 24px |
| `--s-4` | 32px |
| `--s-5` | 48px |
| `--s-6` | 64px |
| `--s-7` | 80px |
| `--s-8` | 120px |
| `--section-y` | 桌面 `--s-8` / 移动 `--s-6`（区块垂直间距） |
| `--pad-x` | 移动 20px / ≥734px 32px（左右边距） |
| `--nav-h` | 48px |

## 4. 布局与断点

| 令牌 | 值 | 用途 |
| --- | --- | --- |
| `--w-content` | 980px | 内容最大宽度 |
| `--w-wide` | 1200px | 宽版容器（导航 / 页脚） |
| `--bp-sm` | 734px | 断点一 |
| `--bp-lg` | 1068px | 断点二 |

## 5. 圆角与描边

| 令牌 | 值 | 用途 |
| --- | --- | --- |
| `--r-card` | 18px | 卡片 / 图片 |
| `--r-pill` | 980px | 胶囊按钮、标签 |
| `--bw` | 1px | 分隔线、描边 |

不使用重阴影。阴影仅保留一层极浅的抬升（`--shadow-raise`），且仅用于首屏浮层类元素。

| 令牌 | 值 |
| --- | --- |
| `--shadow-raise` | `0 1px 2px rgba(0, 0, 0, 0.04)` |

## 6. 动效

| 令牌 | 值 |
| --- | --- |
| `--dur-fast` | 200ms |
| `--dur` | 300ms |
| `--dur-slow` | 400ms |
| `--ease` | `cubic-bezier(0.4, 0, 0.2, 1)` |

只动画 `opacity` 与 `transform`。`prefers-reduced-motion: reduce` 时全部时长归零、位移动画取消。

## 7. 层级

| 令牌 | 值 | 用途 |
| --- | --- | --- |
| `--z-nav` | 100 | 固定导航 |
| `--z-menu` | 200 | 移动端下拉菜单 |
| `--z-modal` | 1000 | 模态（预留） |
| `--z-toast` | 1100 | Toast（预留） |

## 8. 组件规格

- **主按钮**：背景 `--c-accent`，文字 `--c-on-accent`，圆角 `--r-pill`，内边距 `12px 22px`，hover `--c-accent-hover`。
- **次按钮**：透明背景，文字 `--c-accent`，`1px` 描边 `--c-accent`。
- **卡片**：`--c-bg` 或 `--c-bg-alt`，圆角 `--r-card`，无重阴影。
- **导航**：高 `--nav-h`，背景 `--c-nav-bg`，`backdrop-filter: blur(20px) saturate(180%)`，底部 `1px` `--c-line`。
- **焦点**：`outline: 2px solid var(--c-accent)`，`outline-offset: 2px`。

## 9. 响应式与可访问性

- 移动端单列，触控目标最小 44px。
- 语义 HTML（`header` / `nav` / `main` / `section` / `article` / `footer`），跳转锚点带 `scroll-margin-top`。
- 键盘可操作：导航、菜单、锚点、按钮均可用 Tab / Enter / Esc 完成。
- 正文对比度：`#1D1D1F` on `#FFFFFF` = 16.9:1；`#86868B` on `#FFFFFF` = 4.6:1（次要文字达标）。
