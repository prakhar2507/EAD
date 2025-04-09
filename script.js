const themeToggle = document.getElementById('themeToggle');
        const htmlElement = document.documentElement;
        
        const savedTheme = localStorage.getItem('theme') || 'light';
        htmlElement.setAttribute('data-theme', savedTheme);
        
        updateButtonIcon();
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            updateButtonIcon();
        });
        function updateButtonIcon() {
            const currentTheme = htmlElement.getAttribute('data-theme');
            themeToggle.innerHTML = currentTheme === 'light' ? '🌙' : '☀️';
        }
        document.addEventListener('DOMContentLoaded', function () {
			const headers = document.querySelectorAll('.section-header');

			headers.forEach(header => {
				header.addEventListener('click', function () {
					const content = this.nextElementSibling;
					const icon = this.querySelector('.toggle-icon');

					if (content.classList.contains('section-hidden')) {
						content.classList.remove('section-hidden');
						content.classList.add('section-visible');
						icon.classList.add('rotated');
					} else {
						content.classList.add('section-hidden');
						content.classList.remove('section-visible');
						icon.classList.remove('rotated');
					}
				});
			});
		});