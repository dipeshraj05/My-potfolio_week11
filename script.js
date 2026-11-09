// ==========================================
// Week 11: DOM and Dynamic Event Handling
// ==========================================

// 1. Select the dark mode toggle button using querySelector
let themeButton = document.querySelector("#theme-toggle");

// 2. Attach a click event listener to the button
themeButton.addEventListener("click", function() {
    // 3. Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle("dark-mode");
    
    // Optional confirmation in console
    console.log("Dark mode toggled!");
});