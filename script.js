// Project data
const projectData = [
    {
        title: "Digital Invitation System",
        description: "Web application with Firebase database for creating and managing professional digital invitations",
        image: "./images/Zuvana Invitation.png",
        technologies: ["Next.js", "Tailwind", "Firebase"],
        demoLink: "#",
        githubLink: "#",
        status: "Development",
        lang_keys: {
            title_en: "Digital Invitation System",
            description_en: "Web application with Firebase database for creating and managing professional digital invitations",
            title_id: "Sistem Undangan Digital",
            description_id: "Aplikasi web dengan database Firebase untuk membuat dan mengelola undangan digital profesional"
        }
    },
    {
        title: "Webnovel Platform",
        description: "MVP system for uploading, reading, and monetizing novels",
        image: "./images/Webnovel.png",
        technologies: ["React", "Express", "MongoDB", "JWT"],
        demoLink: "#",
        githubLink: "#",
        status: "Development",
        lang_keys: {
            title_en: "Webnovel Platform",
            description_en: "MVP system for uploading, reading, and monetizing novels",
            title_id: "Platform Webnovel",
            description_id: "Sistem MVP untuk mengunggah, membaca, dan memonetisasi novel"
        }
    },
    {
        title: "Data Cleaner Automation",
        description: "Excel & Web application (Streamlit) for cleaning table data",
        image: "./images/DCA.png",
        technologies: ["Python", "Streamlit", "Excel VBA"],
        demoLink: "#",
        githubLink: "#",
        status: "Completed",
        lang_keys: {
            title_en: "Data Cleaner Automation",
            description_en: "Excel & Web application (Streamlit) for cleaning table data",
            title_id: "Otomatisasi Pembersih Data",
            description_id: "Aplikasi Excel & Web (Streamlit) untuk membersihkan data tabel"
        }
    },
    {
        title: "SENSA Landing Page",
        description: "Korean-style product page for diet food brand",
        image: "./images/Sensa.png",
        technologies: ["HTML/CSS", "JavaScript", "Tailwind"],
        demoLink: "#",
        githubLink: "#",
        status: "Completed",
        lang_keys: {
            title_en: "SENSA Landing Page",
            description_en: "Korean-style product page for diet food brand",
            title_id: "Halaman Landing SENSA",
            description_id: "Halaman produk bergaya Korea untuk merek makanan diet"
        }
    },
    {
        title: "AppSheet Inventory Tracker",
        description: "Stock management application based on Google Sheet + AppSheet for warehouse monitoring",
        image: "./images/appsheet inventory.jpg",
        technologies: ["AppSheet", "Google Sheet"],
        demoLink: "#",
        githubLink: "#",
        status: "Completed",
        lang_keys: {
            title_en: "AppSheet Inventory Tracker",
            description_en: "Stock management application based on Google Sheet + AppSheet for warehouse monitoring",
            title_id: "Pelacak Inventaris AppSheet",
            description_id: "Aplikasi manajemen stok berbasis Google Sheet + AppSheet untuk monitoring gudang"
        }
    },
    {
        title: "Simple Attendance Application",
        description: "A simple attendance tracking application built with AppSheet.",
        image: "./images/appsheet absensi.jpg",
        technologies: ["AppSheet", "Google Sheet"],
        demoLink: "#",
        githubLink: "#",
        status: "Completed",
        lang_keys: {
            title_en: "Simple Attendance Application",
            description_en: "A simple attendance tracking application built with AppSheet.",
            title_id: "Aplikasi Absensi Sederhana",
            description_id: "Aplikasi sederhana untuk melacak kehadiran peserta kelas yang dibangun dengan Apssheet dan google sheet."
        }
    }
];

// Skills data
const skillData = {
    frontend: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 85 }
    ],
    backend: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "Firebase", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "REST API", level: 80 },
        { name: "JWT Auth", level: 75 },
        { name: "PHP", level: 70 }
    ],
    tools: [
        { name: "AppSheet", level: 90 },
        { name: "Python", level: 75 },
        { name: "Excel VBA", level: 80 },
        { name: "Joomla", level: 70 },
        { name: "WordPress", level: 75 },
        { name: "Blogger", level: 65 }
    ]
};

// Translations object
const translations = {
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        hero_greeting: "Hi, I'm Rudy",
        hero_role: "Fullstack Developer | No-Code Builder | Creative Technologist",
        hero_subtitle: "Building digital solutions with passion and precision",
        hero_location_text: "📍 Indonesia (Remote-friendly)",
        hero_language_text: "🌐 Indonesia, English (basic/intermediate)",
        hero_cta_button: "View My Work",
        about_title: "About Me",
        about_paragraph_1: "I am an independent developer with experience in building various applications and websites, from simple automation tools with AppSheet to fullstack systems using React, Node.js, and Firebase. While most of my projects are personal initiatives driven by passion and technology exploration, they reflect my technical capabilities, initiative, and perseverance in delivering complete solutions from start to finish.",
        about_paragraph_2: "Currently, I am opening myself to professional freelance work and ready to contribute to real projects with the best quality. Although I haven't had direct clients yet, I approach every project with professional standards as if they were commercial projects. I am ready to give my best for any future collaborations.",
        skills_title: "Core Skills",
        skill_category_fullstack: "Fullstack Development",
        skill_category_backend: "Backend & Database",
        skill_category_tools: "Tools & Automation",
        projects_title: "My Projects",
        contact_title: "Get in Touch",
        contact_description: "I'm open to freelance remote projects and collaborations. Let's create something amazing together!",
        contact_email: "rudyyu1984@gmail.com",
        contact_location: "Indonesia (Remote-friendly)",
        form_name_placeholder: "Your Name",
        form_email_placeholder: "Your Email",
        form_whatsapp_placeholder: "+62 812-3456-7890",
        form_message_placeholder: "Your Message",
        form_submit_button: "Send Message",
        project_demo: "Live Demo",
        project_github: "GitHub",
        status_development: "Development",
        status_completed: "Completed",
        status_coming_soon: "Coming Soon",
        status_live: "Live",
        status_redesign: "Redesign",
        status_maintenance: "Maintenance",
        footer_text: "© 2024 Rudy Yu. All Rights Reserved."
    },
    id: {
        home: "Beranda",
        about: "Tentang",
        projects: "Proyek",
        contact: "Kontak",
        hero_greeting: "Halo, saya Rudy",
        hero_role: "Pengembang Fullstack | Pembangun No-Code | Teknolog Kreatif",
        hero_subtitle: "Membangun solusi digital dengan semangat dan presisi",
        hero_location_text: "📍 Indonesia (Bersedia Remote)",
        hero_language_text: "🌐 Indonesia, Inggris (dasar/menengah)",
        hero_cta_button: "Lihat Karya Saya",
        about_title: "Tentang Saya",
        about_paragraph_1: "Saya adalah seorang developer independen yang berpengalaman dalam membangun berbagai aplikasi dan website, mulai dari tools otomatisasi sederhana dengan AppSheet, website portofolio, hingga sistem fullstack dengan React, Node.js, dan Firebase. Meskipun sebagian besar proyek yang saya kerjakan adalah inisiatif pribadi karena passion dan eksplorasi teknologi, proyek-proyek tersebut mencerminkan kemampuan teknis, inisiatif, dan ketekunan saya dalam menyelesaikan solusi dari awal hingga akhir.",
        about_paragraph_2: "Saat ini, saya mulai membuka diri untuk pekerjaan freelance profesional dan siap berkontribusi dalam proyek nyata dengan kualitas terbaik. Meskipun saya belum memiliki klien langsung, setiap proyek saya kerjakan dengan standar profesional layaknya proyek komersial. Saya siap memberikan yang terbaik untuk setiap kolaborasi yang datang ke depannya.",
        skills_title: "Keahlian Inti",
        skill_category_fullstack: "Pengembangan Fullstack",
        skill_category_backend: "Backend & Database",
        skill_category_tools: "Alat & Otomatisasi",
        projects_title: "Proyek Saya",
        contact_title: "Hubungi Saya",
        contact_description: "Saya terbuka untuk proyek remote freelance dan kolaborasi. Mari kita ciptakan sesuatu yang luar biasa bersama!",
        contact_email: "rudyyu1984@gmail.com",
        contact_location: "Indonesia (Bersedia Remote)",
        form_name_placeholder: "Nama Anda",
        form_email_placeholder: "Email Anda",
        form_whatsapp_placeholder: "+62 812-3456-7890",
        form_message_placeholder: "Pesan Anda",
        form_submit_button: "Kirim Pesan",
        project_demo: "Demo Langsung",
        project_github: "GitHub",
        status_development: "Dalam Pengembangan",
        status_completed: "Selesai",
        status_coming_soon: "Segera Hadir",
        status_live: "Aktif",
        status_redesign: "Desain Ulang",
        status_maintenance: "Pemeliharaan",
        footer_text: "© 2024 Rudy Yu. Semua Hak Dilindungi Undang-Undang."
    }
};

let currentLanguage = localStorage.getItem('lang') || 'id'; // Default to Indonesian
let currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark

// Function to set the language
function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang; // Set lang attribute on <html>
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-lang-placeholder-key]').forEach(input => {
        const key = input.getAttribute('data-lang-placeholder-key');
        if (translations[lang][key]) {
            input.placeholder = translations[lang][key];
        }
    });
    
    // Update active language button state
    document.querySelectorAll('.language-toggle-button').forEach(button => {
        if (button.getAttribute('data-lang-code') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Re-render projects to update status and button text
    const projectGrid = document.getElementById('project-grid');
    if (projectGrid) {
        projectGrid.innerHTML = ''; // Clear existing projects
        loadProjects();
    }
}

// Function to set the theme
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
    } else {
        body.classList.remove('dark-theme');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
    }
}

// Load skills
function loadSkills() {
    const frontendSkillsGrid = document.getElementById('frontend-skills');
    const backendSkillsGrid = document.getElementById('backend-skills');
    const toolsSkillsGrid = document.getElementById('tools-skills');

    if (frontendSkillsGrid) {
        skillData.frontend.forEach(skill => {
            frontendSkillsGrid.appendChild(createSkillItem(skill));
        });
    }
    if (backendSkillsGrid) {
        skillData.backend.forEach(skill => {
            backendSkillsGrid.appendChild(createSkillItem(skill));
        });
    }
    if (toolsSkillsGrid) {
        skillData.tools.forEach(skill => {
            toolsSkillsGrid.appendChild(createSkillItem(skill));
        });
    }
}

// Create skill item element
function createSkillItem(skill) {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
        <div class="skill-name">${skill.name}</div>
        <div class="skill-percentage">${skill.level}%</div>
        <div class="skill-bar-container">
            <div class="skill-bar-fill" style="width: ${skill.level}%;"></div>
        </div>
    `;
    return skillItem;
}

// Load projects
function loadProjects() {
    console.log('loadProjects function called.');
    const projectGrid = document.getElementById('project-grid'); // Use getElementById for consistency
    if (!projectGrid) {
        console.error('projectGrid element not found!');
        return;
    }
    console.log('projectGrid element found:', projectGrid);

    try {
        projectData.forEach(project => {
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
    
    const technologies = project.technologies ? 
        project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('') : '';
    
    const statusKey = `status_${project.status.toLowerCase().replace(/\s/g, '_')}`; // Create a translatable key for status
    const translatedStatus = translations[currentLanguage][statusKey] || project.status; // Get translated status

    // Get translated title and description
    const translatedTitle = project.lang_keys[`title_${currentLanguage}`] || project.title;
    const translatedDescription = project.lang_keys[`description_${currentLanguage}`] || project.description;

    card.innerHTML = `
        <div class="project-image-container">
            <img src="${project.image}" alt="${translatedTitle}" class="project-image" onerror="this.src='https://via.placeholder.com/400x300?text=Project+Image'">
        </div>
        <div class="project-info">
            <div class="project-header">
                <h3>${translatedTitle}</h3>
                <span class="status status-${project.status.toLowerCase().replace(/\s/g, '-')}">${translatedStatus}</span>
            </div>
            <p>${translatedDescription}</p>
            ${technologies ? `<div class="tech-stack">${technologies}</div>` : ''}
            <div class="project-links">
                <a href="${project.demoLink}" target="_blank" class="demo-link">
                    <i class="fas fa-external-link-alt"></i> ${translations[currentLanguage].project_demo}
                </a>
                <a href="${project.githubLink}" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> ${translations[currentLanguage].project_github}
                </a>
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
    const menuButton = document.querySelector('.mobile-menu-button'); // Select existing button
    const navLinks = document.querySelector('.nav-links');
    
    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            menuButton.classList.toggle('active');
        });
    }
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language and theme from localStorage or defaults
    setTheme(currentTheme); // Set theme first
    setLanguage(currentLanguage); // Set language after elements are populated

    loadProjects();
    loadSkills();
    handleScrollAnimations();
    setupMobileMenu(); // Setup mobile menu after buttons are in place

    // Language toggle event listeners
    document.getElementById('language-toggle-id').addEventListener('click', () => setLanguage('id'));
    document.getElementById('language-toggle-en').addEventListener('click', () => setLanguage('en'));

    // Theme toggle event listener
    document.getElementById('theme-toggle').addEventListener('click', () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Scroll to projects section if it's not visible initially (for debugging)
    const projectsSection = document.getElementById('projects');
    if (projectsSection && projectsSection.getBoundingClientRect().top < window.innerHeight) {
        projectsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}); 