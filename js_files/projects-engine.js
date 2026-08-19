/**
 * ==========================================================================
 * 📁 PROJECTS DATABASE & ENGINE (FreeCourseHub / Munendra Singh)
 * ==========================================================================
 */

const PROJECTS_DATABASE = [
  {
    id: "freecoursehub",
    title: "FreeCourseHub Platform",
    category: "web",
    categoryBadge: "Web Dev",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "../index.html",
    liveBtnText: "Open Web",
    whatIsIt: "An educational course curation platform offering verified online learning paths and free technical resources.",
    whatItDoes: "Enables users to search tutorials, filter by category tracks, switch display themes, and bookmark favorite learning resources.",
    features: [
      "Real-time search bar and dynamic track filtering",
      "Interactive favorites bookmarking system",
      "Mobile-optimized drawer and bottom navigation",
      "Dynamic dark and light theme switching"
    ],
    techStack: "HTML5, CSS3, JavaScript, Firebase"
  },
  {
    id: "money-break",
    title: "Money Break Calculator",
    category: "excel",
    categoryBadge: "Excel",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&auto=format&fit=crop&q=80",
    tags: ["Excel Formulas", "Cash Counter"],
    liveUrl: "../my_projects/money_breck_calculater.xlsx",
    liveBtnText: "Open Sheet",
    whatIsIt: "An automated financial spreadsheet tool for physical currency handling and cash reconciliation.",
    whatItDoes: "Calculates total balance automatically based on denomination counts and highlights variance to ensure accurate accounting.",
    features: [
      "Full breakdown for all currency notes and coins",
      "Instant discrepancy and variance detection",
      "Printable day-end closing cash balance sheet"
    ],
    techStack: "Microsoft Excel Formulas, Logical Conditions, Data Validation"
  },
  {
    id: "auto-insights",
    title: "Indian Auto Insights",
    category: "analytics",
    categoryBadge: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    tags: ["Data Mining", "Python", "Data Analysis"],
    liveUrl: "#",
    liveBtnText: "View Report",
    whatIsIt: "A data analytics dashboard analyzing sales performance across the Indian automotive sector.",
    whatItDoes: "Visualizes commercial and passenger vehicle market trends, seasonal growth, and comparative demand metrics.",
    features: [
      "Multi-year sales volume comparison charts",
      "Passenger versus commercial vehicle market segmentation",
      "Key performance indicators (KPIs) for market forecasting"
    ],
    techStack: "Python, Data Mining, Matplotlib, Pandas, Excel Dashboards"
  },
  {
    id: "attendance-dash",
    title: "Attendance Dashboard",
    category: "excel",
    categoryBadge: "Excel",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    tags: ["Macros", "Formulas", "Dashboard"],
    liveUrl: "../my_projects/attendance_sheet.xlsx",
    liveBtnText: "Open Sheet",
    whatIsIt: "A structured attendance management spreadsheet for academic and workplace record-keeping.",
    whatItDoes: "Computes monthly attendance percentages dynamically and flags low-attendance records with automated visual alerts.",
    features: [
      "Dynamic color-coded visual indicator alerts",
      "Automated total days worked and leave calculations",
      "Export-ready monthly attendance summary tables"
    ],
    techStack: "Excel Macros, Data Validation, Dynamic Array Formulas"
  },
  {
    id: "auto-payroll",
    title: "Automatic Payroll",
    category: "excel",
    categoryBadge: "Excel",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
    tags: ["Excel Formulas", "Employee Sheet"],
    liveUrl: "../my_projects/auto_pay_roll.xlsx",
    liveBtnText: "Open Sheet",
    whatIsIt: "An automated payroll calculation workbook designed for structured salary administration.",
    whatItDoes: "Processes basic wages, statutory deductions, overtime hours, and allowances to calculate net payable salaries.",
    features: [
      "Automated computation of allowances and statutory deductions",
      "Ready-to-print employee salary slip template",
      "Flexible hourly and daily overtime rate calculators"
    ],
    techStack: "Microsoft Excel Formulas, Logic Functions (IF, VLOOKUP, XLOOKUP)"
  },
  {
    id: "ms-web-solutions",
    title: "MS Web Solutions",
    category: "websites",
    categoryBadge: "Websites",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    tags: ["Web Design", "Business Site"],
    liveUrl: "https://mswebsolutions.online",
    liveBtnText: "Live Demo",
    whatIsIt: "A professional business website designed to showcase web development and digital solutions.",
    whatItDoes: "Provides company service offerings, contact pathways, and responsive business presentations online.",
    features: [
      "Fully responsive modern business layout",
      "Optimized performance and clean user interface",
      "Integrated contact and service inquiry sections"
    ],
    techStack: "HTML5, CSS3, JavaScript, GitHub Pages"
  },
  {
    id: "project-hub",
    title: "Project Hub Dashboard",
    category: "tools",
    categoryBadge: "Tools",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    tags: ["Developer Dashboard", "Utility"],
    liveUrl: "https://munendra5singh.github.io/Project-Hub/",
    liveBtnText: "Launch Hub",
    whatIsIt: "A centralized developer dashboard designed to organize, search, and launch web projects and apps.",
    whatItDoes: "Allows instant filtering, sorting, and switching between grid and list layouts for multiple developer projects.",
    features: [
      "Instant keyword search and category filtering",
      "Toggle between Grid and List views",
      "Dark and light theme aesthetics with quick access navigation"
    ],
    techStack: "HTML5, CSS3, Vanilla JavaScript"
  }
];

/**
 * ==========================================================================
 * ⚙️ ENGINE CORE: RENDER CARDS, MODAL & FILTERING
 * ==========================================================================
 */

function renderProjectCards() {
  const gridContainer = document.getElementById("portfolioGrid");
  if (!gridContainer) return;

  gridContainer.innerHTML = PROJECTS_DATABASE.map(project => {
    const techTagsHtml = project.tags.map(t => `<span class="tag">${t}</span>`).join("");
    
    return `
      <div class="work-card" data-category="${project.category}">
        <div class="card-category-badge">${project.categoryBadge}</div>
        <div class="work-img-container">
          <img src="${project.image}" alt="${project.title}" onerror="this.src='${project.fallbackImage}'" />
        </div>
        <div class="work-content">
          <h3>${project.title}</h3>
          <p>${project.whatIsIt}</p>
          <div class="tech-tags">${techTagsHtml}</div>
          <div class="card-buttons">
            <a class="project-btn view-live" href="${project.liveUrl}" target="_blank" rel="noopener">${project.liveBtnText}</a>
            <button class="project-btn view-code" onclick="openProjectModal('${project.id}')" type="button">Details</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function injectModalStructure() {
  if (document.getElementById("projectDetailModal")) return;

  const modalHtml = `
    <div id="projectDetailModal" style="display:none; position:fixed; inset:0; background:rgba(15,23,42,0.7); backdrop-filter:blur(5px); z-index:99999; justify-content:center; align-items:center; padding:16px; box-sizing:border-box;">
      <div style="background:var(--bg-card, #ffffff); color:var(--text-primary, #0f172a); max-width:620px; width:100%; max-height:88vh; overflow-y:auto; border-radius:18px; padding:24px; position:relative; box-shadow:0 25px 50px -12px rgba(0,0,0,0.3); border:1px solid var(--border, #e2e8f0);">
        <!-- Close Button -->
        <button onclick="closeProjectModal()" style="position:absolute; top:16px; right:16px; width:34px; height:34px; border-radius:50%; border:none; background:var(--bg-body, #f1f5f9); color:inherit; font-size:18px; font-weight:bold; cursor:pointer; display:flex; align-items:center; justify-content:center;">&times;</button>
        <!-- Dynamic Content Body -->
        <div id="modalDynamicBody"></div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  document.getElementById("projectDetailModal").addEventListener("click", function(e) {
    if (e.target === this) closeProjectModal();
  });
}

window.openProjectModal = function(projectId) {
  const project = PROJECTS_DATABASE.find(p => p.id === projectId);
  if (!project) return;

  const body = document.getElementById("modalDynamicBody");
  const featureList = project.features.map(f => `<li style="margin-bottom:6px;">${f}</li>`).join("");
  const techBadges = project.tags.map(t => `<span style="display:inline-block; background:#2563eb; color:#ffffff; font-size:11px; font-weight:600; padding:3px 10px; border-radius:12px; margin:3px 4px 3px 0;">${t}</span>`).join("");

  body.innerHTML = `
    <div style="border-bottom:1px solid #e2e8f0; padding-bottom:12px; margin-bottom:16px;">
      <span style="display:inline-block; background:#2563eb; color:#fff; font-size:11px; font-weight:700; text-transform:uppercase; padding:3px 8px; border-radius:6px; margin-bottom:6px;">${project.categoryBadge}</span>
      <h2 style="font-size:22px; font-weight:700; margin:0; line-height:1.3;">${project.title}</h2>
    </div>

    <div style="margin-bottom:16px; border-radius:12px; overflow:hidden; max-height:220px; background:#f8fafc;">
      <img src="${project.image}" alt="${project.title}" onerror="this.src='${project.fallbackImage}'" style="width:100%; height:100%; max-height:220px; object-fit:cover; display:block;" />
    </div>

    <div style="margin-bottom:14px;">
      <h4 style="margin:0 0 4px; font-size:14px; font-weight:700; color:#2563eb;">Overview:</h4>
      <p style="margin:0; font-size:13.5px; line-height:1.5; color:inherit; opacity:0.9;">${project.whatIsIt}</p>
    </div>

    <div style="margin-bottom:14px;">
      <h4 style="margin:0 0 4px; font-size:14px; font-weight:700; color:#2563eb;">Core Functionality:</h4>
      <p style="margin:0; font-size:13.5px; line-height:1.5; color:inherit; opacity:0.9;">${project.whatItDoes}</p>
    </div>

    <div style="margin-bottom:14px;">
      <h4 style="margin:0 0 6px; font-size:14px; font-weight:700; color:#2563eb;">Key Highlights:</h4>
      <ul style="margin:0; padding-left:18px; font-size:13px; line-height:1.5; color:inherit; opacity:0.9;">
        ${featureList}
      </ul>
    </div>

    <div style="margin-bottom:18px;">
      <h4 style="margin:0 0 6px; font-size:13px; font-weight:700; color:#2563eb;">Technologies &amp; Tools:</h4>
      <div>${techBadges}</div>
      <p style="margin:4px 0 0; font-size:12px; opacity:0.75;">${project.techStack}</p>
    </div>

    <div style="display:flex; justify-content:flex-end; gap:10px; border-top:1px solid #e2e8f0; padding-top:14px;">
      <a href="${project.liveUrl}" target="_blank" rel="noopener" style="background:#2563eb; color:#fff; text-decoration:none; padding:8px 18px; border-radius:8px; font-size:13px; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
        ${project.liveBtnText} &rarr;
      </a>
    </div>
  `;

  document.getElementById("projectDetailModal").style.display = "flex";
  document.body.style.overflow = "hidden";
};

window.closeProjectModal = function() {
  const modal = document.getElementById("projectDetailModal");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "";
};

document.addEventListener("DOMContentLoaded", () => {
  renderProjectCards();
  injectModalStructure();

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      document.querySelector(".active-filter")?.classList.remove("active-filter");
      button.classList.add("active-filter");

      const target = button.getAttribute("data-target");
      const cards = document.querySelectorAll(".work-card");
      cards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (target === "all" || cardCat === target) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });
});
