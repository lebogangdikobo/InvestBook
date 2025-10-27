document.querySelectorAll('.menu-links li').forEach(item => {
    item.addEventListener('click', () => {
        alert('You clicked on: ${item.textContent.trim()}');
    });
});