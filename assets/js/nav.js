// Toggle the mobile navigation menu (shown under 1024px).
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  function close() {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }

  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });

  // Close the menu after following a link.
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) close();
  });

  // Reset state when resizing back to the desktop layout.
  window.matchMedia("(min-width: 1024px)").addEventListener("change", close);
})();
