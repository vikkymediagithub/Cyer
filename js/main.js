const faq = document.querySelectorAll(".faqs");

faq.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})