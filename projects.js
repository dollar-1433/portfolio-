// Portfolio Projects Data
const portfolioProjects = [
    {
        title: "Student Collaboration Website",
        description: "A collaborative platform designed for students to work together on projects, share resources, and communicate effectively in a digital workspace.",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
        technologies: ["React", "JavaScript", "CSS", "Node.js"],
        liveUrl: "https://collab-space-village-yt12.vercel.app/",
        category: "web"
    },
    {
        title: "White Space Board",
        description: "An interactive digital whiteboard application that allows users to draw, write, and collaborate in real-time with various tools and features.",
        image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
        technologies: ["JavaScript", "Canvas API", "HTML5", "CSS"],
        liveUrl: "https://more-whiteboard.vercel.app/",
        category: "app"
    },
    {
        title: "Recipes App",
        description: "A comprehensive recipe application where users can discover, save, and share their favorite recipes with detailed instructions and ingredients.",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
        technologies: ["React", "API Integration", "JavaScript", "CSS"],
        liveUrl: "https://recipes-app-wheat.vercel.app/",
        category: "app"
    }
];

// Function to create portfolio item HTML
function createPortfolioItem(project) {
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const links = [];
    if (project.liveUrl) {
        links.push(`<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="portfolio-link" title="View Live Project"><i class="fas fa-external-link-alt"></i></a>`);
    }
    if (project.githubUrl) {
        links.push(`<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="portfolio-link" title="View Source Code"><i class="fab fa-github"></i></a>`);
    }
    
    return `
        <div class="portfolio-item reveal" data-category="${project.category || 'web'}">
            <div class="portfolio-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy" />
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
    
    if (!portfolioGrid) {
        console.error('Portfolio grid element not found');
        return;
    }
    
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
            item.style.animationDelay = `${index * 0.1}s`;
            if (window.observer) {
                window.observer.observe(item);
            }
        });
        
        // Add click handlers for portfolio links
        const portfolioLinks = portfolioGrid.querySelectorAll('.portfolio-link');
        portfolioLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.stopPropagation();
                const url = this.getAttribute('href');
                if (url && url !== '#') {
                    window.open(url, '_blank', 'noopener,noreferrer');
                }
            });
        });
    }
}

// Initialize portfolio when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPortfolio);
} else {
    renderPortfolio();
}