// Portfolio Projects Data
const portfolioProjects = [
    // Add your projects here following this structure:
    /*
    {
        title: "Project Title",
        description: "Brief description of your project",
        image: "https://your-image-url.com/image.jpg",
        technologies: ["HTML", "CSS", "JavaScript"], // Array of technologies used
        liveUrl: "https://your-live-project-url.com", // Optional
        githubUrl: "https://github.com/your-username/project-repo", // Optional
        category: "web" // web, app, design, etc.
    }
    */
];

// Function to create portfolio item HTML
function createPortfolioItem(project) {
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const links = [];
    if (project.liveUrl) {
        links.push(`<a href="${project.liveUrl}" target="_blank" class="portfolio-link"><i class="fas fa-external-link-alt"></i></a>`);
    }
    if (project.githubUrl) {
        links.push(`<a href="${project.githubUrl}" target="_blank" class="portfolio-link"><i class="fab fa-github"></i></a>`);
    }
    
    return `
        <div class="portfolio-item" data-category="${project.category || 'web'}">
            <div class="portfolio-image">
                <img src="${project.image}" alt="${project.title}" />
                <div class="portfolio-overlay">
                    <div class="portfolio-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="portfolio-tech">
                            ${techTags}
                        </div>
                        <div class="portfolio-links">
                            ${links.join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to render portfolio projects
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    if (portfolioProjects.length === 0) {
        // Show placeholder if no projects
        portfolioGrid.innerHTML = `
            <div class="portfolio-placeholder">
                <div class="placeholder-content">
                    <i class="fas fa-plus-circle"></i>
                    <h3>Add Your Projects</h3>
                    <p>Your amazing projects will be displayed here</p>
                    <p style="margin-top: 1rem; font-size: 0.9rem; color: #999;">
                        Edit the <code>projects.js</code> file to add your projects
                    </p>
                </div>
            </div>
        `;
    } else {
        // Render actual projects
        const projectsHTML = portfolioProjects.map(createPortfolioItem).join('');
        portfolioGrid.innerHTML = projectsHTML;
        
        // Re-observe new elements for animations
        const newItems = portfolioGrid.querySelectorAll('.portfolio-item');
        newItems.forEach((item, index) => {
            item.classList.add('reveal');
            item.style.animationDelay = `${index * 0.1}s`;
            if (window.observer) {
                window.observer.observe(item);
            }
        });
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', renderPortfolio);

// Example projects (uncomment and modify these to add your projects):
/*
portfolioProjects.push(
    {
        title: "E-commerce Website",
        description: "A modern responsive e-commerce platform with shopping cart functionality",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        liveUrl: "https://your-ecommerce-site.com",
        githubUrl: "https://github.com/yourusername/ecommerce-project",
        category: "web"
    },
    {
        title: "Task Management App",
        description: "Interactive task manager with drag-and-drop functionality and local storage",
        image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
        technologies: ["JavaScript", "CSS", "HTML", "Local Storage"],
        liveUrl: "https://your-task-app.com",
        githubUrl: "https://github.com/yourusername/task-manager",
        category: "app"
    },
    {
        title: "Restaurant Website",
        description: "Beautiful restaurant website with online reservation system and menu display",
        image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        liveUrl: "https://your-restaurant-site.com",
        githubUrl: "https://github.com/yourusername/restaurant-website",
        category: "web"
    }
);
*/