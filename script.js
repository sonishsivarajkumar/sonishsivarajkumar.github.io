// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Publications filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationItems = document.querySelectorAll('.publication-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            publicationItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'flex';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.research-card, .publication-item, .contact-item, .education-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .publication-item {
        animation: fadeIn 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);

// Publications data structure for easy management
const publicationsData = {
    journal: [
        // Journal articles will be populated here
    ],
    conference: [
        // Conference papers will be populated here
    ],
    book: [
        // Book chapters will be populated here
    ]
};

// Function to render publications
function renderPublications() {
    const publicationsList = document.getElementById('publications-list');
    publicationsList.innerHTML = '';
    
    // Combine all publications and sort by year
    const allPublications = [
        ...publicationsData.journal.map(pub => ({ ...pub, category: 'journal' })),
        ...publicationsData.conference.map(pub => ({ ...pub, category: 'conference' })),
        ...publicationsData.book.map(pub => ({ ...pub, category: 'book' }))
    ].sort((a, b) => b.year - a.year);
    
    allPublications.forEach(pub => {
        const pubElement = createPublicationElement(pub);
        publicationsList.appendChild(pubElement);
    });
}

// Function to create publication HTML element
function createPublicationElement(publication) {
    const pubDiv = document.createElement('div');
    pubDiv.className = 'publication-item';
    pubDiv.setAttribute('data-category', publication.category);
    
    pubDiv.innerHTML = `
        <div class="publication-year">${publication.year}</div>
        <div class="publication-content">
            <h3 class="publication-title">${publication.title}</h3>
            <p class="publication-authors">${publication.authors}</p>
            <p class="publication-venue"><em>${publication.venue}</em>${publication.details ? ', ' + publication.details : ''}</p>
            <div class="publication-links">
                ${publication.pdf ? `<a href="${publication.pdf}" class="pub-link" target="_blank">PDF</a>` : ''}
                ${publication.doi ? `<a href="${publication.doi}" class="pub-link" target="_blank">DOI</a>` : ''}
                ${publication.code ? `<a href="${publication.code}" class="pub-link" target="_blank">Code</a>` : ''}
                ${publication.data ? `<a href="${publication.data}" class="pub-link" target="_blank">Data</a>` : ''}
            </div>
        </div>
    `;
    
    return pubDiv;
}

// Initialize publications on page load
document.addEventListener('DOMContentLoaded', function() {
    renderPublications();
});
