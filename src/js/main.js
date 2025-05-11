document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.intersectionRatio > 0.2) {
                target.classList.add('bg-dark-green');
                target.querySelectorAll('[class*="text-"]').forEach(textElement => {
                    textElement.classList.remove('text-dark-green');
                });
            } else {
                target.classList.remove('bg-dark-green');
                target.querySelectorAll('[class*="text-"]').forEach(textElement => {
                    textElement.classList.add('text-dark-green');
                });
            }
        });
    }, {
        threshold: [0.2]
    });

    // menu mobile
    const targets = document.querySelectorAll('.anim-bg-dark-green');
    targets.forEach(target => {
        observer.observe(target);
    });

    const toggleBtn = document.querySelector('.menu-toggle');
	const mobileMenu = document.getElementById('mobileMenu');
	const links = mobileMenu.querySelectorAll('a');

	toggleBtn.addEventListener('click', () => {
		mobileMenu.classList.toggle('active');
	});

	links.forEach(link => {
		link.addEventListener('click', () => {
			mobileMenu.classList.remove('active');
		});
	});

    const closeBtn = document.querySelector('.close-menu');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }
});