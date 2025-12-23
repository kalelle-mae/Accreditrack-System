fetch('/html/role/accreditor/left-section.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('side-nav-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading sidebar:', error));