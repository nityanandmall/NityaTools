(()=>{if(window.__NITYA_I18N_BOOTSTRAP__)return;window.__NITYA_I18N_BOOTSTRAP__=1;const load=src=>new Promise(resolve=>{const s=document.createElement('script');s.src=src;s.async=true;s.onload=resolve;s.onerror=resolve;document.head.appendChild(s)});load('nitya-i18n-legacy.js').then(()=>Promise.all(['i18n/site-common-extra.js','i18n/home-extra.js','i18n/legal-extra.js','i18n/tool-content-core.js','i18n/tool-content-finance.js','i18n/tool-content-everyday-finance.js','i18n/tool-content-student-electrical-solar.js','i18n/ui-audit-fixes.js','i18n/name-visibility-fixes.js','i18n/flag-visual-fix.js','i18n/country-language-sync.js'].map(load))).then(()=>load('i18n/loader.js'))})();
// Google Analytics for every page that loads the shared NityaTools script.
if (!window.gtag) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-RVHNHL1EJ7');
  var nityaAnalyticsScript = document.createElement('script');
  nityaAnalyticsScript.async = true;
  nityaAnalyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-RVHNHL1EJ7';
  document.head.appendChild(nityaAnalyticsScript);
}
