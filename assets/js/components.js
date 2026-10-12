(function () {
  const footer = document.getElementById("site-footer");
  if (!footer) return;
  const src = (function () {
    const p = window.location.pathname;
    return p.indexOf("/pages/") !== -1 ? "../assets/components/footer.html" : "assets/components/footer.html";
  })();
  fetch(src)
    .then(function (r) { return r.ok ? r.text() : Promise.reject(); })
    .then(function (html) { footer.innerHTML = html; })
    .catch(function () { footer.innerHTML = '<p style="color:#fff;padding:1rem;text-align:center;">Footer unavailable.</p>'; });
})();
