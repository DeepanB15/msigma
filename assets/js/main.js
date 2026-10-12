// Mars Sigma Solutions — shared site scripts
document.addEventListener('DOMContentLoaded', function () {
  // Mobile navbar burger
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('nav-menu-open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  // Dropdown menu handling for desktop hover
  var dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(function (dropdown) {
    var link = dropdown.querySelector('.nav-link');
    var menu = dropdown.querySelector('.dropdown-menu');

    // Desktop hover
    dropdown.addEventListener('mouseenter', function () {
      menu.style.display = 'block';
      dropdown.classList.add('dropdown-open');
    });

    dropdown.addEventListener('mouseleave', function () {
      menu.style.display = 'none';
      dropdown.classList.remove('dropdown-open');
    });

    // Mobile tap toggle
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        var currentDisplay = menu.style.display;
        menu.style.display = currentDisplay === 'block' ? 'none' : 'block';
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (e) {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('nav-menu');
    if (toggle && menu) {
      var isClickInside = toggle.contains(e.target) || menu.contains(e.target);
      if (!isClickInside && menu.classList.contains('nav-menu-open')) {
        menu.classList.remove('nav-menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});
