document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("nav a");
    const contents = document.querySelectorAll("section");

    // Smooth scrolling for navigation
    sections.forEach(section => {
        section.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section in the navigation bar
    window.addEventListener("scroll", function () {
        let current = "";

        contents.forEach(content => {
            const sectionTop = content.offsetTop;
            const sectionHeight = content.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = content.getAttribute("id");
            }
        });

        sections.forEach(section => {
            section.classList.remove("active");
            if (section.getAttribute("href").substring(1) === current) {
                section.classList.add("active");
            }
        });
    });

    // Expand/Collapse content within sections
    const branchHeaders = document.querySelectorAll(".branch h4");
    branchHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "none" ? "block" : "none";
        });
    });
});
