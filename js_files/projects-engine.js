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
    image: "../image/freecoursehub.png",
    fallbackImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
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
    image: "../image/mony_calculater.png",
    fallbackImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    fallbackImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
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
    image: "../image/att.png",
    fallbackImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80",
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
    image: "../image/autopayroll.png",
    fallbackImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&auto=format&fit=crop&q=80",
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
    id: "excelsuperguru",
    title: "ExcelSuperGuru",
    category: "web",
    categoryBadge: "Web Dev",
    image: "https://raw.githubusercontent.com/munendra5singh/ExcelSuperGuru/main/assets/images/shareimg.png",
    fallbackImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://munendra5singh.github.io/ExcelSuperGuru/",
    liveBtnText: "Open Web",
    whatIsIt: "An educational web guide dedicated to spreadsheet productivity, advanced formulas, and data automation.",
    whatItDoes: "Provides structured formula documentation, downloadable spreadsheet templates, and practical workflow tutorials.",
    features: [
      "Comprehensive formula reference categorized by skill tier",
      "Downloadable practice spreadsheets and reference sheets",
      "Clean, readable interface optimized for study"
    ],
    techStack: "HTML5, CSS3 Responsive Grid, Vanilla JavaScript"
  },
  {
    id: "mouse-game",
    title: "Mouse Chaser Survival Game",
    category: "web",
    categoryBadge: "Game",
    image: "../image/game.png",
    fallbackImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
    tags: ["HTML5 Canvas", "JavaScript"],
    liveUrl: "../my_projects/details/game.html",
    liveBtnText: "Play Game",
    whatIsIt: "A 2D browser-based arcade survival game built using pure JavaScript and the HTML5 Canvas API.",
    whatItDoes: "Challenges players to dodge dynamic obstacles using mouse movement while calculating collisions and survival score in real time.",
    features: [
      "High-precision real-time coordinate collision detection",
      "Progressive difficulty acceleration and live scoring",
      "Lightweight architecture with zero external game engine dependencies"
    ],
    techStack: "HTML5 Canvas API, Pure JavaScript Engine"
  },
  {
    id: "multicalc-hub",
    title: "Multi Calculator Hub",
    category: "web",
    categoryBadge: "Web Dev",
    image: "../image/multical.png",
    fallbackImage: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&auto=format&fit=crop&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://munendra5singh.github.io/MultyCalculatorHub/index.html",
    liveBtnText: "Open Web",
    whatIsIt: "A consolidated mathematical utility portal combining essential daily, tax, and personal finance calculators.",
    whatItDoes: "Computes loan EMI schedules, GST additions/deductions, age timelines, and calendar date differences instantly.",
    features: [
      "EMI loan breakdown with interest and principal segregation",
      "Forward and reverse GST tax calculation tools",
      "Accurate date interval and age calculation modules"
    ],
    techStack: "HTML5, Responsive CSS, JavaScript Mathematical Logic"
  },
  {
    id: "smart-ai-calc",
    title: "Smart AI Calculator",
    category: "web",
    categoryBadge: "Web Dev",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&auto=format&fit=crop&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://munendra5singh.github.io/smartCalcAi/",
    liveBtnText: "Open Web",
    whatIsIt: "A mathematical calculation interface built for rapid expression evaluation and problem-solving.",
    whatItDoes: "Parses mathematical operations and financial inputs quickly through an adaptive, keypad-driven design.",
    features: [
      "Glassmorphism-styled responsive keypad interface",
      "Real-time expression parsing engine",
      "Recent calculations history tracking"
    ],
    techStack: "HTML5, Modern CSS Variables, JavaScript Math Parser"
  },
  {
    id: "simple-savidhan",
    title: "Simple Savidhan",
    category: "web",
    categoryBadge: "Web Dev",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://munendra5singh.github.io/simple-savidhan/",
    liveBtnText: "Open Web",
    whatIsIt: "A civic awareness web application presenting constitutional articles, fundamental rights, and citizen duties in plain language.",
    whatItDoes: "Enables users to search and read constitutional clauses through structured, readable summaries.",
    features: [
      "Searchable database organized by constitutional articles",
      "Citizen rights and civic awareness learning tracks",
      "Minimalist, reading-focused typographic layout"
    ],
    techStack: "HTML5, CSS3, JavaScript Dynamic Search"
  },
  {
    id: "semester-5-hub",
    title: "Semester 5 Course Hub",
    category: "web",
    categoryBadge: "Web Dev",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://munendra5singh.github.io/My-digital-book/",
    liveBtnText: "Open Web",
    whatIsIt: "An undergraduate digital study portal organizing syllabus outlines, subject notes, and reference materials.",
    whatItDoes: "Structures academic resources across core subjects like Economics, Geography, and Political Science for fast reference.",
    features: [
      "Unit-wise syllabus navigation for multiple subjects",
      "Exam-focused summaries and key definitions",
      "Lightweight, fast-loading architecture with local caching"
    ],
    techStack: "HTML5, CSS Flexbox & Grid, Client-side Storage"
  },
  {
    id: "secure-vault",
    title: "My Secure Vault",
    category: "web",
    categoryBadge: "Web Dev",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://munendra5singh.github.io/My-secure-vault/",
    liveBtnText: "Open Web",
    whatIsIt: "A client-side credential manager designed for local data organization without external server requirements.",
    whatItDoes: "Stores and sorts personal identifiers, access codes, and notes locally in the browser.",
    features: [
      "Zero-database, fully client-side storage architecture",
      "One-click copy and quick category sorting",
      "Encrypted browser-level local data handling"
    ],
    techStack: "HTML5, CSS3, JavaScript LocalStorage & Web Crypto API"
  },
  {
    id: "tea-shop-web",
    title: "Chai & Tea Delight",
    category: "web",
    categoryBadge: "Web Dev",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    liveUrl: "https://munendra5singh.github.io/tea-shop/",
    liveBtnText: "Open Web",
    whatIsIt: "A modern, responsive e-commerce web showcase designed for a boutique tea and cafe brand.",
    whatItDoes: "Displays tea menu varieties, ingredient details, special blends, and lets customers place orders or explore cafe offerings seamlessly.",
    features: [
      "Interactive tea menu categorized by flavor and brew type",
      "Fully responsive mobile-friendly modern UI with cart & order inquiry",
      "Dynamic pricing calculator and direct customer contact integration"
    ],
    techStack: "HTML5, CSS3 (Flexbox/Grid), Modern JavaScript (DOM Manipulation)"
  },
  {
    id: "roll-shop-web",
    title: "The Roll Corner",
    category: "web",
    categoryBadge: "Web Dev",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80",
    tags: ["HTML", "CSS", "JavaScript", "Fast Food"],
    liveUrl: "https://munendra5singh.github.io/roll-shop/",
    liveBtnText: "Open Web",
    whatIsIt: "A vibrant fast-food menu and ordering web application built for street-style rolls, wraps, and quick bites.",
    whatItDoes: "Showcases different types of veg & non-veg rolls, customizable fillings, special sauces, and enables quick online food discovery.",
    features: [
      "Categorized visual menu for Veg, Paneer, Egg, and Chicken rolls",
      "Interactive add-ons and sauce customization selector",
      "Instant WhatsApp order integration with automated cart bill summary"
    ],
    techStack: "HTML5, CSS3, JavaScript (LocalStorage & Dynamic Cart Logic)"
  },
  {
    id: "dairy-fresh-web",
    title: "Pure Dairy Hub",
    category: "web",
    categoryBadge: "Web Dev",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=600&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&auto=format&fit=crop&q=80",
    tags: ["HTML", "CSS", "JavaScript", "E-Commerce"],
    liveUrl: "https://munendra5singh.github.io/dairy-shop/",
    liveBtnText: "Open Web",
    whatIsIt: "A clean and modern dairy farm & retail web platform for ordering farm-fresh milk, paneer, ghee, and organic dairy goods.",
    whatItDoes: "Highlights product purity, daily subscription plans, quantity-based pricing, and facilitates hassle-free local doorstep delivery booking.",
    features: [
      "Product catalog for milk, curd, paneer, butter, and authentic desi ghee",
      "Daily/Weekly recurring milk subscription selection calculator",
      "Direct WhatsApp and call-to-order integration for quick local delivery"
    ],
    techStack: "HTML5, Modern CSS3, JavaScript (DOM Manipulation & Price Logic)"
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
