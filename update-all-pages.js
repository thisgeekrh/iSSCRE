// Script to update all remaining pages with accessibility improvements
// This will be used as a guide for manual updates

const pagesToUpdate = [
    'lend.html',
    'privacy.html', 
    'thanks.html',
    'text.html'
];

// For each page, apply these changes:

// 1. Fix Adally widget placement
// Move from header to body:
/*
OLD:
<header>
   <script src="https://d2twz9av6or5hk.cloudfront.net/1.6/adally.js"></script>
</header>

NEW:
<header role="banner" aria-label="Site header">
</header>
<body>
   <script src="https://d2twz9av6or5hk.cloudfront.net/1.6/adally.js"></script>
   <a href="#main-content" class="skip-nav">Skip to main content</a>
*/

// 2. Add navigation ARIA
/*
OLD:
<nav class="ministor_menu main-search-menu">

NEW:
<nav class="ministor_menu main-search-menu" role="navigation" aria-label="Main navigation">
*/

// 3. Add menu roles
/*
OLD:
<ul class="sub-menu nav_scroll">
   <li class="current">
       <a href="index.html">Home</a>
   </li>
   <li><a href="#about">About</a></li>
   <li><a href="tel:(803) 999-7522"><img src="assets/images/white-phone.png" alt="phone icon" width="10px"></a></li>

NEW:
<ul class="sub-menu nav_scroll" role="menubar">
   <li class="current" role="none">
       <a href="index.html" role="menuitem">Home</a>
   </li>
   <li role="none"><a href="#about" role="menuitem">About</a></li>
   <li role="none">
       <a href="tel:(803) 999-7522" role="menuitem" aria-label="Call us at (803) 999-7522">
           <img src="assets/images/white-phone.png" alt="" width="10px" aria-hidden="true">
           <span class="sr-only">Call (803) 999-7522</span>
       </a>
   </li>
*/

// 4. Add main content wrapper
/*
Add after navigation:
<main id="main-content" role="main">
   [existing content]
</main>
*/

// 5. Add footer role
/*
OLD:
<div class="witrfm_area">

NEW:
<footer class="witrfm_area" role="contentinfo" aria-label="Site footer">
*/

// 6. Add accessibility JavaScript
/*
Add before </body>:
<script>
   document.addEventListener('DOMContentLoaded', function() {
       const skipLink = document.querySelector('.skip-nav');
       if (skipLink) {
           skipLink.addEventListener('click', function() {
               const target = document.querySelector(this.getAttribute('href'));
               if (target) {
                   target.focus();
               }
           });
       }
   });
</script>
*/
