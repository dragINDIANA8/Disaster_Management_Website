document.addEventListener('DOMContentLoaded', function() {
    fetchLatestAlerts();
});

function fetchLatestAlerts() {
    // Sample data, replace with real API or data source
    const alerts = [
        { title: "Severe Thunderstorm Warning", date: "2024-08-31", details: "A severe thunderstorm is expected in your area." },
        { title: "Hurricane Watch", date: "2024-08-30", details: "A hurricane watch has been issued for your region." }
    ];

    const alertsContainer = document.getElementById('alerts');
    alerts.forEach(alert => {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert');
        alertDiv.innerHTML = `<h4>${alert.title}</h4><p>Date: ${alert.date}</p><p>${alert.details}</p>`;
        alertsContainer.appendChild(alertDiv);
    });
}
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Get all navigation links
        const navLinks = document.querySelectorAll('nav ul li a');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Prevent default link behavior
                e.preventDefault();
                
                // Get the href attribute which contains the target section's id
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Scroll to the target section smoothly
                    targetSection.scrollIntoView({
                        behavior: 'smooth',  // Smooth scroll
                        block: 'start'       // Align to the top
                    });
                }
            });
        });
    });
</script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Smooth scrolling to section when a navigation link is clicked
        const navLinks = document.querySelectorAll('nav ul li a');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Scroll smoothly to the section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll effect to reveal sections
        const sections = document.querySelectorAll('section');

        const revealSection = () => {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionVisible = 100; // Define visibility threshold

                if (sectionTop < window.innerHeight - sectionVisible) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        };

        window.addEventListener('scroll', revealSection);
        revealSection(); // Initial check
    });
</script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Smooth scrolling to section when a navigation link is clicked
        const navLinks = document.querySelectorAll('nav ul li a');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Calculate the offset position to ensure the section is fully visible
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const offsetPosition = targetSection.offsetTop - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Scroll effect to reveal sections
        const sections = document.querySelectorAll('section');

        const revealSection = () => {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionVisible = window.innerHeight / 2; // Adjust visibility threshold as needed

                if (sectionTop < sectionVisible) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        };

        window.addEventListener('scroll', revealSection);
        revealSection(); // Initial check
    });
</script>

