(function setTutorialKitTheme(){
  try {
    var theme = localStorage.getItem('bolt_theme');
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    var html = document.documentElement;
    if (html) html.setAttribute('data-theme', theme);
  } catch (_) {
    // no-op
  }
})();
