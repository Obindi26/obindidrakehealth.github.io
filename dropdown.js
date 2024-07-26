document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(function(dropdown) {
        var link = dropdown.querySelector('.nav-link');
        var menu = dropdown.querySelector('.dropdown-menu');

        // Show dropdown on hover
        dropdown.addEventListener('mouseenter', function() {
            menu.classList.add('show');
        });

        // Hide dropdown when not hovered
        dropdown.addEventListener('mouseleave', function() {
            menu.classList.remove('show');
        });

        // Navigate to main link on click, ensure dropdown stays open on hover
        link.addEventListener('click', function(event) {
            var href = link.getAttribute('href');
            if (href !== '#') {
                window.location.href = href;
            }
        });
    });
});
