document.querySelectorAll('.faq-trigger').forEach(function (elem) {
    elem.addEventListener('click', function () {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

// document.getElementById('clickTest').addEventListener('click', function () {
//     event.preventDefault();
// });
