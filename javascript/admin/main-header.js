fetch('/html/role/admin/top-section.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('main-header-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));