window.onload = function() {
    if (window.innerWidth <= 375) {
        var footerSections = document.querySelectorAll('.footer-section');
        for (var i = 0; i < footerSections.length; i++) {
            var h3 = footerSections[i].querySelector('h3');
            var ul = footerSections[i].querySelector('ul');
            ul.style.display = 'none';
            h3.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>`;
            h3.addEventListener('click', function(e) {
                var ul = e.target.nextElementSibling;
                ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
            });
        }
    }
}
