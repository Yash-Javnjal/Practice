document.addEventListener('DOMContentLoaded', () => {

    /* 1. SCROLL ANIMATIONS */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up, .reveal-text').forEach(el => observer.observe(el));


    const msg = document.getElementById("msg");

    function showMsg(text) {
        msg.textContent = text;
        msg.classList.add("show");

        setTimeout(() => {
            msg.classList.remove("show");
        }, 2000);
    }


    /* BUY BUTTON CLICK */
    document.querySelectorAll(".msg-btn").forEach(btn => {
        btn.addEventListener('click', () => {

            const card = btn.closest('.card');
            const place = card.querySelector('h3').textContent;

            showMsg(place + " trip booked successfully");

        });
    });


    /* FORM SUBMIT */
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        showMsg("Your message has been sent successfully");

        form.reset();
    });


});
