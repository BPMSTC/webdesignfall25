# The Glitchy Pizza Shop 🍕
## An Accessibility Demo

This project demonstrates the difference between a "visually polished but inaccessible" website and a truly accessible one. It uses a **side-by-side comparison** layout to highlight code differences.

### 🎮 How to Use the Demo

1.  **Open `index.html`** in your browser.
2.  **Scroll Down**: The page is divided into sections (Navigation, Hero, Forms).
3.  **Compare**: Each section shows a "Bad ❌" example and a "Good ✅" example.
4.  **Analyze**: Read the "Analysis" block below each comparison to understand the *why*.
5.  **View Source**: Right-click and "View Page Source" (or inspect elements). The HTML is heavily commented with `<!-- ACCESSIBILITY NOTE -->` blocks to explain the code.

### 🧠 Key Learning Concepts

#### 1. Navigation (`<div>` vs `<nav>`)
*   **The Trap**: Using `<div>`s with `onclick` events makes buttons work for mouse users but invisible to keyboards and screen readers.
*   **The Fix**: Semantic `<nav>`, `<ul>`, and `<a>` tags provide built-in keyboard support and structure.

#### 2. Headings & Contrast
*   **The Trap**: Using `<span>` with big fonts looks like a heading but doesn't create a document outline. Low contrast text is hard to read.
*   **The Fix**: Proper `<h1>`-`<h6>` hierarchy and WCAG-compliant color contrast.

#### 3. Forms (Labels vs Placeholders)
*   **The Trap**: Placeholders disappear when you type. Without `<label>`, screen readers don't know what the input is for.
*   **The Fix**: Explicit `<label for="...">` linked to inputs. Fieldsets for grouping checkboxes.

### 🛠️ Technical Details
*   **Framework**: Vanilla HTML/CSS/JS.
*   **Structure**: Static HTML with inline examples for easy inspection.
*   **Fonts**: 'Outfit' and 'Permanent Marker' from Google Fonts.

---
*Built for the Accessibility Lecture Series.*
