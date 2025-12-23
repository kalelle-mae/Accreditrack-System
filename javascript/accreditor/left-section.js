fetch("/html/role/accreditor/left-section.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("side-nav-placeholder").innerHTML = data;

    const sidebar = document.querySelector(".side-nav");
    const container = document.querySelector(".container");

    // Restore sidebar state from localStorage
    const isExpanded = localStorage.getItem("sidebarExpanded") === "true";
    if (isExpanded && sidebar) {
      sidebar.classList.add("expanded");
      if (container) {
        container.style.marginLeft = "225px";
      }
    }

    // Set active link based on current page
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll(".side-nav a");
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Initialize toggle functionality after sidebar is loaded
    const toggleBtn = document.getElementById("sidebarToggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        if (sidebar) {
          sidebar.classList.toggle("expanded");
          const isExpanded = sidebar.classList.contains("expanded");

          // Save state to localStorage
          localStorage.setItem("sidebarExpanded", isExpanded);

          // Adjust container margin
          if (container) {
            container.style.marginLeft = isExpanded ? "225px" : "70px";
          }
        }
      });
    }
  })
  .catch((error) => console.error("Error loading sidebar:", error));
