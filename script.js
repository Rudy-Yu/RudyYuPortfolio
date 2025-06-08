// Project data
const projectData = {
    "projects": [
        {
            "title": "Zuvana Invitation App",
            "description": "Aplikasi undangan digital yang memungkinkan pengguna membuat dan mengelola undangan dengan mudah. Fitur meliputi template kustom, manajemen tamu, dan integrasi media sosial.",
            "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "technologies": ["Next.js", "Tailwind CSS", "TypeScript"],
            "demo": "https://github.com/Rudy-Yu/zuvana-invitation-app",
            "github": "https://github.com/Rudy-Yu/zuvana-invitation-app"
        },
        {
            "title": "Companion Rent",
            "description": "Website booking kompanion dengan fitur manajemen rental, sistem booking, dan manajemen pengguna. Dibangun menggunakan React dan Tailwind CSS.",
            "image": "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "technologies": ["React", "Tailwind CSS", "JavaScript"],
            "demo": "https://github.com/Rudy-Yu/Companion",
            "github": "https://github.com/Rudy-Yu/Companion"
        },
        {
            "title": "Sensa Shirataki Landing Page",
            "description": "Landing page modern untuk produk Sensa Shirataki, menampilkan animasi yang halus dan desain responsif.",
            "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "technologies": ["HTML", "CSS", "JavaScript"],
            "demo": "https://rudy-yu.github.io/sensa/",
            "github": "https://github.com/Rudy-Yu/sensa"
        },
        {
            "title": "Novelverse Scribe Hub",
            "description": "Platform untuk membaca dan mempublikasikan web novel. Fitur meliputi autentikasi pengguna, manajemen konten, dan desain responsif.",
            "image": "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "technologies": ["Next.js", "MongoDB", "Tailwind CSS"],
            "demo": "https://github.com/Rudy-Yu/novelverse-scribe-hub",
            "github": "https://github.com/Rudy-Yu/novelverse-scribe-hub"
        },
        {
            "title": "Jago Coffee Landing Page",
            "description": "Landing page untuk brand kopi lokal dengan desain modern dan responsif.",
            "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "technologies": ["HTML", "CSS", "JavaScript"],
            "demo": "https://rudy-yu.github.io/jago-coffee/",
            "github": "https://github.com/Rudy-Yu/jago-coffee"
        },
        {
            "title": "ST App",
            "description": "Aplikasi visualisasi data interaktif yang memungkinkan pengguna mengunggah file CSV/Excel dan membuat berbagai jenis visualisasi seperti scatter plot, line plot, histogram, dan box plot menggunakan Streamlit dan Plotly.",
            "image": "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "technologies": ["Python", "Streamlit", "Plotly", "Pandas"],
            "demo": "https://github.com/Rudy-Yu/st-app",
            "github": "https://github.com/Rudy-Yu/st-app"
        }
    ]
};

// Load projects
function loadProjects() {
    console.log('loadProjects function called.');
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) {
        console.error('projectGrid element not found!');
        return;
    }
    console.log('projectGrid element found:', projectGrid);

    try {
        projectData.projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectGrid.appendChild(projectCard);
            console.log('Project card appended:', project.title);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        projectGrid.innerHTML = '<p class="error-message">Failed to load projects. Please try again later.</p>';
    }
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const technologies = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${technologies}
            </div>
            <div class="project-links">
                <a href="${project.demo}" target="_blank" class="demo-link">Live Demo</a>
                <a href="${project.github}" target="_blank" class="github-link">GitHub</a>
            </div>
        </div>
    `;
    
    return card;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling (removed for Formspree integration)
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form data
//         const formData = {
//             name: document.getElementById('name').value,
//             email: document.getElementById('email').value,
//             message: document.getElementById('message').value
//         };
        
//         // Here you would typically send the form data to a server
//         console.log('Form submitted:', formData);
        
//         // Show success message
//         alert('Thank you for your message! I will get back to you soon.');
//         contactForm.reset();
//     });
// }

// Add scroll-based animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.about, .projects, .contact');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        // Initial state is handled by CSS, JavaScript will add 'visible' class
        observer.observe(element);
    });
}

// Add mobile menu functionality
function setupMobileMenu() {
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    nav.insertBefore(menuButton, navLinks);
    
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        menuButton.classList.toggle('active');
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    handleScrollAnimations();
    setupMobileMenu();

    // Scroll to projects section if it's not visible initially (for debugging)
    const projectsSection = document.getElementById('projects');
    if (projectsSection && projectsSection.getBoundingClientRect().top < window.innerHeight) {
        projectsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}); 