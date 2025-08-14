// Script to update all remaining pages with new social media icons
// This will be used as a guide for manual updates

const pagesToUpdate = [
    'eval.html',
    'lend.html', 
    'privacy.html',
    'thanks.html',
    'text.html'
];

// For each page, replace the footer social media section with:

/*
OLD:
<ul class="text-right">
    <li><a target="_blank" href="https://www.facebook.com/simmonsstrattongroup"><i class="fa fa-facebook-f"></i></a></li>
    <li><a target="_blank" href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x88568f9d0c986119:0x9b496b21eae3349a!12e1?source=g.page.m.rc._&laa=merchant-web-dashboard-card"><i class="fab fa-google"></i></a></li>
    <li><a href="tel:(803) 999-7522"><i class="fa fa-phone"></i></a></li>
    <li><a href="mailto:admin@isellscre.com"><i class="fa fa-laptop"></i></a></li>
    <li><a href="privacy.html" style="color: white;"><i style='font-size:16px' class='fas'>&#xf505;</i></a></li>
</ul>

NEW:
<ul class="text-right" role="list">
    <li role="listitem">
        <a target="_blank" href="https://www.facebook.com/tylersimmonsteam" aria-label="Visit our Facebook page">
            <i class="fa fa-facebook-f" aria-hidden="true"></i>
            <span class="sr-only">Facebook</span>
        </a>
    </li>
    <li role="listitem">
        <a target="_blank" href="https://www.instagram.com/tylersimmonsteam/" aria-label="Visit our Instagram page">
            <i class="fab fa-instagram" aria-hidden="true"></i>
            <span class="sr-only">Instagram</span>
        </a>
    </li>
    <li role="listitem">
        <a target="_blank" href="https://www.youtube.com/@TylerSimmonsTeam" aria-label="Visit our YouTube channel">
            <i class="fab fa-youtube" aria-hidden="true"></i>
            <span class="sr-only">YouTube</span>
        </a>
    </li>
    <li role="listitem">
        <a target="_blank" href="https://www.tiktok.com/@thetylersimmonsteam" aria-label="Visit our TikTok page">
            <i class="fab fa-tiktok" aria-hidden="true"></i>
            <span class="sr-only">TikTok</span>
        </a>
    </li>
    <li role="listitem">
        <a target="_blank" href="https://www.threads.com/@tylersimmonsteam" aria-label="Visit our Threads page">
            <i class="fab fa-threads" aria-hidden="true"></i>
            <span class="sr-only">Threads</span>
        </a>
    </li>
    <li role="listitem">
        <a target="_blank" href="https://x.com/TylerSimmonsRE" aria-label="Visit our X (Twitter) page">
            <i class="fab fa-x-twitter" aria-hidden="true"></i>
            <span class="sr-only">X (Twitter)</span>
        </a>
    </li>
    <li role="listitem">
        <a target="_blank" href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x88568f9d0c986119:0x9b496b21eae3349a!12e1?source=g.page.m.rc._&laa=merchant-web-dashboard-card" aria-label="View our Google Business listing">
            <i class="fab fa-google" aria-hidden="true"></i>
            <span class="sr-only">Google Business</span>
        </a>
    </li>
    <li role="listitem">
        <a href="tel:(803) 999-7522" aria-label="Call us at (803) 999-7522">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span class="sr-only">Phone</span>
        </a>
    </li>
    <li role="listitem">
        <a href="mailto:admin@isellscre.com" aria-label="Email us at admin@isellscre.com">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span class="sr-only">Email</span>
        </a>
    </li>
    <li role="listitem">
        <a href="privacy.html" aria-label="Privacy Policy">
            <i style='font-size:16px' class='fas'>&#xf505;</i>
            <span class="sr-only">Privacy Policy</span>
        </a>
    </li>
</ul>
*/
