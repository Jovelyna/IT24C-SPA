function showPage(pageId) {
    document.querySelectorAll('.content').forEach(function (page) {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}