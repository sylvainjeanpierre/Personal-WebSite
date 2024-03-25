// management of page section links
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".section_target_btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const section = document.getElementById(targetId);

            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});