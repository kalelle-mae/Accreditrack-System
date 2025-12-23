document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("sidebarToggleBtn");

  toggleBtn.addEventListener("click", function () {
    const sidebar = document.querySelector(".side-nav");
    sidebar.classList.toggle("expanded");
  });
});
