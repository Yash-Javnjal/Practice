document.addEventListener("DOMContentLoaded",()=>{
    const Observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('.active');
        }
    });
    },{threshold:0.1});
    document.querySelectorAll(".reveal-up,.reveal-text").forEach(el=>Observer.observe(el));

    function showMsg(text){
        showMsg.textContent=text;
        showMsg.classList.add("show")
    

        setTimeout(()=>{
           showMsg.classList.remove("show");
        },2000);
    }

    document.addEventListener(".msg-btn").array.forEach(btn => {
        btn.addEventListener('click',()=>{
            const card= btn.closest('.card');
            const place = card.querySelector('h3').textContent;

            showMsg(place+"Trip booked sucessfully!")
        })
    });

    const form = document.querySelector(".contact-form");

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        showMsg("Your Message has been sent sucessfully")
        form.reset();
    })
        
    
})