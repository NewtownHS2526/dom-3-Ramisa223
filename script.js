const buttonGroup = document.getElementById("button-group");
const buttons = buttonGroup.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        const current = buttonGroup.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].classList.remove("active");
        }
        this.classList.add("active");
    });
}

// This script adds an "active" class to the clicked button and removes it from any other button in the group.
// Ensure to include appropriate CSS to style the "active" class for visual feedback.
