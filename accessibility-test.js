// Accessibility Testing Script
// Run this in browser console to test accessibility

console.log('🔍 Starting Accessibility Audit...');

// Test 1: Check for proper heading structure
function testHeadingStructure() {
    console.log('\n📋 Testing Heading Structure...');
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let h1Count = 0;
    let previousLevel = 0;
    let issues = [];
    
    headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        
        if (level === 1) h1Count++;
        
        if (index > 0 && level > previousLevel + 1) {
            issues.push(`Heading level skipped: ${heading.tagName} after ${previousLevel}`);
        }
        
        previousLevel = level;
    });
    
    if (h1Count === 0) {
        issues.push('No H1 heading found');
    } else if (h1Count > 1) {
        issues.push(`Multiple H1 headings found: ${h1Count}`);
    }
    
    console.log(`Found ${headings.length} headings`);
    console.log(`H1 count: ${h1Count}`);
    if (issues.length > 0) {
        console.warn('❌ Heading structure issues:', issues);
    } else {
        console.log('✅ Heading structure looks good');
    }
}

// Test 2: Check for alt text on images
function testImageAltText() {
    console.log('\n🖼️ Testing Image Alt Text...');
    const images = document.querySelectorAll('img');
    let missingAlt = 0;
    let emptyAlt = 0;
    let decorativeImages = 0;
    
    images.forEach(img => {
        if (!img.hasAttribute('alt')) {
            missingAlt++;
            console.warn('❌ Missing alt attribute:', img.src);
        } else if (img.alt === '') {
            emptyAlt++;
            if (!img.hasAttribute('aria-hidden')) {
                console.warn('⚠️ Empty alt without aria-hidden:', img.src);
            } else {
                decorativeImages++;
            }
        }
    });
    
    console.log(`Total images: ${images.length}`);
    console.log(`Missing alt: ${missingAlt}`);
    console.log(`Empty alt (decorative): ${decorativeImages}`);
    console.log(`Empty alt (potential issue): ${emptyAlt - decorativeImages}`);
    
    if (missingAlt === 0) {
        console.log('✅ All images have alt attributes');
    }
}

// Test 3: Check for form labels
function testFormLabels() {
    console.log('\n📝 Testing Form Labels...');
    const inputs = document.querySelectorAll('input, textarea, select');
    let missingLabels = 0;
    let missingIds = 0;
    
    inputs.forEach(input => {
        if (input.type !== 'hidden' && input.type !== 'submit' && input.type !== 'button') {
            if (!input.id) {
                missingIds++;
                console.warn('❌ Input missing ID:', input);
            } else {
                const label = document.querySelector(`label[for="${input.id}"]`);
                if (!label) {
                    missingLabels++;
                    console.warn('❌ Input missing label:', input);
                }
            }
        }
    });
    
    console.log(`Total form inputs: ${inputs.length}`);
    console.log(`Missing IDs: ${missingIds}`);
    console.log(`Missing labels: ${missingLabels}`);
    
    if (missingLabels === 0 && missingIds === 0) {
        console.log('✅ All form inputs have proper labels');
    }
}

// Test 4: Check for ARIA landmarks
function testAriaLandmarks() {
    console.log('\n🏗️ Testing ARIA Landmarks...');
    const landmarks = {
        'banner': document.querySelectorAll('[role="banner"], header'),
        'navigation': document.querySelectorAll('[role="navigation"], nav'),
        'main': document.querySelectorAll('[role="main"], main'),
        'contentinfo': document.querySelectorAll('[role="contentinfo"], footer'),
        'search': document.querySelectorAll('[role="search"]'),
        'complementary': document.querySelectorAll('[role="complementary"], aside'),
        'region': document.querySelectorAll('[role="region"]')
    };
    
    let issues = [];
    
    Object.entries(landmarks).forEach(([role, elements]) => {
        console.log(`${role}: ${elements.length} found`);
        if (role === 'main' && elements.length === 0) {
            issues.push('No main landmark found');
        }
        if (role === 'banner' && elements.length === 0) {
            issues.push('No banner landmark found');
        }
    });
    
    if (issues.length > 0) {
        console.warn('❌ Missing landmarks:', issues);
    } else {
        console.log('✅ All required landmarks present');
    }
}

// Test 5: Check for keyboard navigation
function testKeyboardNavigation() {
    console.log('\n⌨️ Testing Keyboard Navigation...');
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    let issues = [];
    
    console.log(`Focusable elements: ${focusableElements.length}`);
    
    // Check for visible focus indicators
    const style = getComputedStyle(document.body);
    if (style.outline === 'none' || style.outline === '0px') {
        issues.push('No visible focus indicators detected');
    }
    
    // Check for skip links
    const skipLinks = document.querySelectorAll('.skip-nav, [href^="#"]');
    if (skipLinks.length === 0) {
        issues.push('No skip navigation links found');
    }
    
    if (issues.length > 0) {
        console.warn('❌ Keyboard navigation issues:', issues);
    } else {
        console.log('✅ Keyboard navigation looks good');
    }
}

// Test 6: Check for color contrast (basic)
function testColorContrast() {
    console.log('\n🎨 Testing Color Contrast (Basic)...');
    console.log('⚠️ Manual testing required for accurate color contrast');
    console.log('Use tools like:');
    console.log('- WebAIM Contrast Checker');
    console.log('- axe DevTools');
    console.log('- Lighthouse Accessibility Audit');
}

// Test 7: Check for semantic HTML
function testSemanticHTML() {
    console.log('\n📄 Testing Semantic HTML...');
    const semanticElements = {
        'main': document.querySelectorAll('main'),
        'nav': document.querySelectorAll('nav'),
        'header': document.querySelectorAll('header'),
        'footer': document.querySelectorAll('footer'),
        'section': document.querySelectorAll('section'),
        'article': document.querySelectorAll('article'),
        'aside': document.querySelectorAll('aside'),
        'button': document.querySelectorAll('button'),
        'form': document.querySelectorAll('form')
    };
    
    let issues = [];
    
    Object.entries(semanticElements).forEach(([tag, elements]) => {
        console.log(`${tag}: ${elements.length} found`);
        if (tag === 'main' && elements.length === 0) {
            issues.push('No main element found');
        }
    });
    
    // Check for div abuse
    const divs = document.querySelectorAll('div');
    const totalElements = document.querySelectorAll('*').length;
    const divPercentage = (divs.length / totalElements) * 100;
    
    console.log(`Div usage: ${divs.length}/${totalElements} (${divPercentage.toFixed(1)}%)`);
    if (divPercentage > 50) {
        issues.push('High div usage - consider semantic alternatives');
    }
    
    if (issues.length > 0) {
        console.warn('❌ Semantic HTML issues:', issues);
    } else {
        console.log('✅ Semantic HTML looks good');
    }
}

// Test 8: Check for accessibility attributes
function testAccessibilityAttributes() {
    console.log('\n♿ Testing Accessibility Attributes...');
    const elementsWithAria = document.querySelectorAll('[aria-*]');
    const elementsWithRole = document.querySelectorAll('[role]');
    const elementsWithTabindex = document.querySelectorAll('[tabindex]');
    
    console.log(`Elements with ARIA attributes: ${elementsWithAria.length}`);
    console.log(`Elements with role attributes: ${elementsWithRole.length}`);
    console.log(`Elements with tabindex: ${elementsWithTabindex.length}`);
    
    // Check for common ARIA issues
    const ariaLabels = document.querySelectorAll('[aria-label]');
    const ariaLabelledby = document.querySelectorAll('[aria-labelledby]');
    const ariaDescribedby = document.querySelectorAll('[aria-describedby]');
    
    console.log(`aria-label: ${ariaLabels.length}`);
    console.log(`aria-labelledby: ${ariaLabelledby.length}`);
    console.log(`aria-describedby: ${ariaDescribedby.length}`);
    
    console.log('✅ Accessibility attributes check complete');
}

// Run all tests
function runAccessibilityAudit() {
    console.log('🚀 Starting Comprehensive Accessibility Audit...\n');
    
    testHeadingStructure();
    testImageAltText();
    testFormLabels();
    testAriaLandmarks();
    testKeyboardNavigation();
    testColorContrast();
    testSemanticHTML();
    testAccessibilityAttributes();
    
    console.log('\n🎉 Accessibility audit complete!');
    console.log('\n📋 Next Steps:');
    console.log('1. Fix any issues identified above');
    console.log('2. Test with screen readers (NVDA, JAWS, VoiceOver)');
    console.log('3. Test keyboard navigation thoroughly');
    console.log('4. Use automated tools (axe DevTools, Lighthouse)');
    console.log('5. Test with users who have disabilities');
}

// Auto-run the audit
runAccessibilityAudit();
