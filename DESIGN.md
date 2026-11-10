# DESIGN.md — Apple-like Minimal Design Tokens

## Color Palette

### Light Mode (基底：白/浅灰)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#FFFFFF` | 主背景（纯白） |
| `--color-bg-secondary` | `#F5F5F7` | 次要背景（浅灰，区块交替） |
| `--color-bg-tertiary` | `#E8E8ED` | 辅助背景（卡片、输入框） |
| `--color-text-primary` | `#1D1D1F` | 主文字（近黑） |
| `--color-text-secondary` | `#86868B` | 次要文字（中灰） |
| `--color-text-tertiary` | `#A1A1A6` | 辅助文字（浅灰） |
| `--color-border` | `#D2D2D7` | 分隔线、边框 |
| `--color-accent-primary` | `#0071E3` | 强调蓝（主按钮、链接、焦点） |
| `--color-accent-hover` | `#0077ED` | 强调蓝悬停态 |
| `--color-accent-pressed` | `#0066CC` | 强调蓝按下态 |
| `--color-focus` | `#0071E3` | 焦点描边 |
| `--color-error` | `#FF3B30` | 错误状态 |
| `--color-success` | `#34C759` | 成功状态 |

### Dark Mode (基底：深灰/近黑)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#1D1D1F` | 主背景（近黑） |
| `--color-bg-secondary` | `#2C2C2E` | 次要背景（深灰） |
| `--color-bg-tertiary` | `#3A3A3C` | 辅助背景 |
| `--color-text-primary` | `#FFFFFF` | 主文字（纯白） |
| `--color-text-secondary` | `#8E8E93` | 次要文字 |
| `--color-text-tertiary` | `#636366` | 辅助文字 |
| `--color-border` | `#3A3A3C` | 分隔线、边框 |
| `--color-accent-primary` | `#0A84FF` | 强调蓝（暗色模式下更亮） |
| `--color-accent-hover` | `#409CFF` | 悬停态 |
| `--color-accent-pressed` | `#0071E3` | 按下态 |
| `--color-focus` | `#0A84FF` | 焦点描边 |
| `--color-error` | `#FF453A` | 错误状态 |
| `--color-success` | `#32D74B` | 成功状态 |

---

## Typography

### Font Stack
```css
--font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
--font-family-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
--font-family-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
```

### Type Scale

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| Hero Title | `clamp(48px, 8vw, 80px)` | 600 | 1.05 | `-0.015em` | Hero 大标题 |
| Section Title | `clamp(40px, 5vw, 56px)` | 600 | 1.1 | `-0.01em` | 区块标题 |
| Subtitle | `clamp(24px, 3vw, 32px)` | 400 | 1.3 | `normal` | 副标题 |
| Body Large | 17px | 400 | 1.47 | `normal` | 正文 |
| Body | 15px | 400 | 1.5 | `normal` | 次要正文 |
| Caption | 13px | 400 | 1.4 | `normal` | 说明文字 |
| Nav Link | 12px | 400 | 1.2 | `0.02em` | 导航链接 |
| Button Text | 17px | 400 | 1.2 | `normal` | 按钮文字 |

CSS Variables:
```css
--text-hero: clamp(48px, 8vw, 80px);
--text-section: clamp(40px, 5vw, 56px);
--text-subtitle: clamp(24px, 3vw, 32px);
--text-body-lg: 17px;
--text-body: 15px;
--text-caption: 13px;
--text-nav: 12px;
--text-btn: 17px;

--lh-hero: 1.05;
--lh-section: 1.1;
--lh-body: 1.47;
--lh-body-sm: 1.5;
--lh-nav: 1.2;

--ls-hero: -0.015em;
--ls-section: -0.01em;
--ls-nav: 0.02em;
```

---

## Spacing & Layout

### Base Unit: 8px

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 8px | 最小间距 |
| `--space-2` | 16px | 小间距 |
| `--space-3` | 24px | 中间距 |
| `--space-4` | 32px | 大间距 |
| `--space-5` | 48px | 区块内间距 |
| `--space-6` | 64px | 区块间距(移动端) |
| `--space-7` | 80px | 区块间距(桌面端) |
| `--space-8` | 120px | 大区块间距(桌面端) |

### Container Widths

| Token | Value | Usage |
|-------|-------|-------|
| `--container-max` | 980px | 内容最大宽度 |
| `--container-wide` | 1200px | 宽版容器 |
| `--margin-mobile` | 20px | 移动端左右边距 |
| `--margin-desktop` | 48px | 桌面端左右边距 |

### Breakpoints

| Token | Value |
|-------|-------|
| `--bp-mobile` | 734px |
| `--bp-tablet` | 1068px |
| `--bp-desktop` | 1200px |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | 小圆角（标签、徽章） |
| `--radius-md` | 12px | 中圆角（输入框、小卡片） |
| `--radius-lg` | 18px | 大圆角（卡片、面板） |
| `--radius-xl` | 24px | 特大圆角（Hero 面板） |
| `--radius-pill` | 980px | 胶囊圆角（按钮、导航胶囊） |

---

## Shadows

| Token | Value (Light) | Value (Dark) | Usage |
|-------|---------------|--------------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.04)` | `0 1px 2px rgba(0,0,0,0.3)` | 细微阴影 |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | `0 4px 12px rgba(0,0,0,0.4)` | 卡片阴影 |
| `--shadow-lg` | `0 12px 32px rgba(0,0,0,0.12)` | `0 12px 32px rgba(0,0,0,0.5)` | 模态框、下拉菜单 |

> **原则**：不使用重阴影。仅在必要层级使用极淡阴影。

---

## Navigation

| Token | Value |
|-------|-------|
| `--nav-height` | 48px |
| `--nav-bg` | `rgba(255,255,255,0.72)` (Light) / `rgba(29,29,31,0.72)` (Dark) |
| `--nav-blur` | `backdrop-filter: saturate(180%) blur(20px);` |
| `--nav-border` | `1px solid var(--color-border)` |

---

## Buttons

### Primary Button
- Background: `var(--color-accent-primary)`
- Text: `#FFFFFF`
- Border Radius: `var(--radius-pill)`
- Padding: `12px 22px`
- Font: `var(--text-btn)` / weight 400

### Secondary Button
- Background: `transparent`
- Text: `var(--color-accent-primary)`
- Border: `1px solid var(--color-accent-primary)`
- Border Radius: `var(--radius-pill)`
- Padding: `12px 22px`

---

## Motion

| Token | Value |
|-------|-------|
| `--duration-fast` | 200ms |
| `--duration-normal` | 300ms |
| `--duration-slow` | 400ms |
| `--easing-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--easing-decelerate` | `cubic-bezier(0, 0, 0.2, 1)` |
| `--easing-accelerate` | `cubic-bezier(0.4, 0, 1, 1)` |

### Animation Rules
- **仅动画**：`opacity`、`transform` (translate/scale)
- **禁止动画**：width、height、margin、padding、top/left、filter(blur 等)
- **prefers-reduced-motion**：关闭非必要动画

---

## Z-Index Scale

| Layer | Value |
|-------|-------|
| `--z-nav` | 100 |
| `--z-dropdown` | 200 |
| `--z-modal` | 1000 |
| `--z-toast` | 1100 |

---

## Focus Styles

```css
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

## CSS Custom Properties (Ready to Use)

```css
:root {
  /* Colors - Light */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F5F7;
  --color-bg-tertiary: #E8E8ED;
  --color-text-primary: #1D1D1F;
  --color-text-secondary: #86868B;
  --color-text-tertiary: #A1A1A6;
  --color-border: #D2D2D7;
  --color-accent-primary: #0071E3;
  --color-accent-hover: #0077ED;
  --color-accent-pressed: #0066CC;
  --color-focus: #0071E3;
  --color-error: #FF3B30;
  --color-success: #34C759;

  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
  --font-family-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
  --font-family-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --text-hero: clamp(48px, 8vw, 80px);
  --text-section: clamp(40px, 5vw, 56px);
  --text-subtitle: clamp(24px, 3vw, 32px);
  --text-body-lg: 17px;
  --text-body: 15px;
  --text-caption: 13px;
  --text-nav: 12px;
  --text-btn: 17px;

  --lh-hero: 1.05;
  --lh-section: 1.1;
  --lh-body: 1.47;
  --lh-body-sm: 1.5;
  --lh-nav: 1.2;

  --ls-hero: -0.015em;
  --ls-section: -0.01em;
  --ls-nav: 0.02em;

  /* Spacing */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 64px;
  --space-7: 80px;
  --space-8: 120px;

  --container-max: 980px;
  --container-wide: 1200px;
  --margin-mobile: 20px;
  --margin-desktop: 48px;

  --bp-mobile: 734px;
  --bp-tablet: 1068px;
  --bp-desktop: 1200px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-pill: 980px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.12);

  /* Navigation */
  --nav-height: 48px;
  --nav-bg: rgba(255,255,255,0.72);
  --nav-blur: saturate(180%) blur(20px);
  --nav-border: 1px solid var(--color-border);

  /* Motion */
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 400ms;
  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-decelerate: cubic-bezier(0, 0, 0.2, 1);
  --easing-accelerate: cubic-bezier(0.4, 0, 1, 1);

  /* Z-Index */
  --z-nav: 100;
  --z-dropdown: 200;
  --z-modal: 1000;
  --z-toast: 1100;
}

/* Dark Mode Overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #1D1D1F;
    --color-bg-secondary: #2C2C2E;
    --color-bg-tertiary: #3A3A3C;
    --color-text-primary: #FFFFFF;
    --color-text-secondary: #8E8E93;
    --color-text-tertiary: #636366;
    --color-border: #3A3A3C;
    --color-accent-primary: #0A84FF;
    --color-accent-hover: #409CFF;
    --color-accent-pressed: #0071E3;
    --color-focus: #0A84FF;
    --color-error: #FF453A;
    --color-success: #32D74B;

    --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
    --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
    --shadow-lg: 0 12px 32px rgba(0,0,0,0.5);

    --nav-bg: rgba(29,29,31,0.72);
  }
}

/* Explicit dark mode via [data-theme="dark"] for manual toggle */
[data-theme="dark"] {
  --color-bg-primary: #1D1D1F;
  --color-bg-secondary: #2C2C2E;
  --color-bg-tertiary: #3A3A3C;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #8E8E93;
  --color-text-tertiary: #636366;
  --color-border: #3A3A3C;
  --color-accent-primary: #0A84FF;
  --color-accent-hover: #409CFF;
  --color-accent-pressed: #0071E3;
  --color-focus: #0A84FF;
  --color-error: #FF453A;
  --color-success: #32D74B;

  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.5);

  --nav-bg: rgba(29,29,31,0.72);
}
```

---

## Component Specifications

### Card
- Background: `var(--color-bg-primary)`
- Border: `1px solid var(--color-border)`
- Border Radius: `var(--radius-lg)` (18px)
- Padding: `var(--space-4)` (32px)
- Shadow: `var(--shadow-sm)` (极淡，可选)
- Hover: `transform: translateY(-2px); box-shadow: var(--shadow-md);`

### Input Field
- Height: 44px
- Background: `var(--color-bg-tertiary)`
- Border: `1px solid var(--color-border)`
- Border Radius: `var(--radius-md)` (12px)
- Padding: `0 var(--space-3)` (0 24px)
- Font: `var(--text-body-lg)` / 400
- Focus: `border-color: var(--color-focus); outline: none;`

### Badge/Tag
- Background: `var(--color-bg-tertiary)`
- Border: `1px solid var(--color-border)`
- Border Radius: `var(--radius-pill)`
- Padding: `4px 12px`
- Font: `var(--text-caption)` / 500
- Color: `var(--color-text-secondary)`

### Divider
- Height: 1px
- Background: `var(--color-border)`
- No border, no margin (handled by spacing tokens)

---

## Accessibility Checklist

- [ ] Contrast ratio ≥ 4.5:1 for text (WCAG AA)
- [ ] Contrast ratio ≥ 3:1 for large text and UI components
- [ ] Focus visible on all interactive elements
- [ ] Semantic HTML structure (header, nav, main, section, article, footer)
- [ ] Keyboard navigable (Tab order logical)
- [ ] ARIA labels where needed
- [ ] prefers-reduced-motion respected
- [ ] Viewport meta tag present
- [ ] Language attribute on html element

---

## Forbidden Patterns (Self-Check)

- ❌ Purple/multi-color gradients as backgrounds
- ❌ Glassmorphism card stacking
- ❌ Excessive border-radius (> 24px except pill)
- ❌ Heavy shadows (shadow-lg only for modals)
- ❌ Complex illustrations as decoration
- ❌ Hardcoded colors/spacing/radius in components
- ❌ Copying Apple logos, product images, copy, or SF font files
- ❌ Out-of-scope sections
- ❌ "Coming soon" / "Next you can add..." placeholder content