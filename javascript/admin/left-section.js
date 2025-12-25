fetch("/html/role/admin/left-section.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("side-nav-placeholder").innerHTML = data;

        const sidebar = document.querySelector(".side-nav");

        const isExpanded = localStorage.getItem("sidebarExpanded") === "true";
        if (isExpanded && sidebar) {
            sidebar.classList.add("expanded");
            document.body.classList.add("sidebar-expanded");
        }

        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll(".side-nav a");
        navLinks.forEach((link) => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        const toggleBtn = document.getElementById("sidebarToggleBtn");
        if (toggleBtn) {
            toggleBtn.addEventListener("click", function () {
                if (sidebar) {
                    sidebar.classList.toggle("expanded");
                    const isExpanded = sidebar.classList.contains("expanded");

                    localStorage.setItem("sidebarExpanded", isExpanded);

                    if (isExpanded) {
                        document.body.classList.add("sidebar-expanded");
                    } else {
                        document.body.classList.remove("sidebar-expanded");
                    }
                }
            });
        }
    })
    .catch((error) => console.error("Error loading sidebar:", error));