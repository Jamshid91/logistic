let faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('showFaqInfo');
        console.dir(faq.children[0].classList.toggle('activeTitle'))
    })
});

const player = new Plyr('#player');