# Accessibility Implementation Plan
## WCAG 2.1 AA & ADA Compliance

### Priority 1: Critical Fixes (Week 1)

#### 1. Skip Navigation
Add to all pages after `<body>`:
```html
<a href="#main-content" class="skip-nav">Skip to main content</a>
```

CSS:
```css
.skip-nav {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 10000;
  border-radius: 4px;
}
.skip-nav:focus { top: 6px; }
```

#### 2. ARIA Landmarks
Update header, nav, main, footer:
```html
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main id="main-content" role="main">
<footer role="contentinfo">
```

#### 3. Form Accessibility
Fix contact form:
```html
<label for="first-name">First Name *</label>
<input type="text" id="first-name" name="first_name" required aria-required="true">
```

### Priority 2: Interactive Elements (Week 2)

#### 1. Modal Dialogs
Add to bio modals:
```html
<div role="dialog" aria-labelledby="modal-title" aria-modal="true">
  <h2 id="modal-title">About Tyler Simmons</h2>
  <button aria-label="Close modal">Close</button>
</div>
```

#### 2. Focus Management
Add CSS:
```css
a:focus, button:focus, input:focus {
  outline: 3px solid #007bff;
  outline-offset: 2px;
}
```

### Priority 3: Content & Media (Week 3)

#### 1. Image Alt Text
Update all images with descriptive alt text:
```html
<img src="Tyler.jpg" alt="Tyler Simmons, Team Lead and Realtor">
<img src="phone.png" alt="" aria-hidden="true">
```

#### 2. Heading Structure
Ensure proper h1-h6 hierarchy:
```html
<h1>Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

### Priority 4: Testing & Validation (Week 4)

#### Testing Tools:
- axe DevTools (browser extension)
- Lighthouse Accessibility Audit
- Keyboard navigation testing
- Screen reader testing

#### Manual Testing Checklist:
- [ ] Tab through all interactive elements
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Check color contrast ratios
- [ ] Test zoom functionality (200%)
- [ ] Verify form validation

### Implementation Steps:

1. **Day 1-2:** Add skip navigation and ARIA landmarks
2. **Day 3-4:** Fix form accessibility
3. **Day 5-7:** Implement modal accessibility
4. **Week 2:** Add focus management and keyboard navigation
5. **Week 3:** Update alt text and content structure
6. **Week 4:** Testing and validation

### Required Files to Update:
- index.html
- care.html
- eval.html
- lend.html
- privacy.html
- thanks.html
- text.html

### CSS Additions:
Add to style.css:
```css
/* Accessibility styles */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* High contrast mode */
@media (prefers-contrast: high) {
  body { background: white !important; color: black !important; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

### JavaScript Enhancements:
Add form validation:
```javascript
document.querySelector('form').addEventListener('submit', function(e) {
  const required = this.querySelectorAll('[required]');
  let valid = true;
  
  required.forEach(field => {
    if (!field.value.trim()) {
      valid = false;
      field.setAttribute('aria-invalid', 'true');
    }
  });
  
  if (!valid) {
    e.preventDefault();
    // Announce error
  }
});
```

This plan will bring your website to WCAG 2.1 AA compliance and ADA standards.
