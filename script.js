document.querySelectorAll('.tabs button').forEach(btn => {btn.addEventListener('click', e => {
    document.querySelector('.tabs .active').classList.remove('active');
    e.target.classList.add('active');
    });
});