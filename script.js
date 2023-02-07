
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        console.log(button)
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            console.log(this)
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active"); 
            console.log(button.dataset.id)
             })
        });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
