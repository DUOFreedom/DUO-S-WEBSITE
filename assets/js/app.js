(function () {
  "use strict";

  var doc = document;
  doc.documentElement.classList.add("js");

  /* 移动端菜单 */
  var toggle = doc.querySelector("[data-nav-toggle]");
  var menu = doc.querySelector("[data-nav-menu]");

  if (toggle && menu) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      menu.setAttribute("data-open", open ? "true" : "false");
    };

    setOpen(false);

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    doc.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 734) setOpen(false);
    });
  }

  /* 入场动效 */
  var targets = Array.prototype.slice.call(doc.querySelectorAll(".reveal"));

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
