fetch("/html/role/accreditor/left-section.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("side-nav-placeholder").innerHTML = data;

    // Initialize toggle functionality after sidebar is loaded
    const toggleBtn = document.getElementById("sidebarToggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        const sidebar = document.querySelector(".side-nav");
        const container = document.querySelector(".container");
        if (sidebar) {
          sidebar.classList.toggle("expanded");
          // Adjust container margin
          if (sidebar.classList.contains("expanded")) {
            container.style.marginLeft = "225px";
          } else {
            container.style.marginLeft = "70px";
          }
        }
      });
    }
  })
  .catch((error) => console.error("Error loading sidebar:", error));
