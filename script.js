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


// ==========================================
// Week 12: Arrays and Loops
// ==========================================

// --- Step 1: Hobby/Skill List Rendering (Required) ---
const hobbies = ['Playing Futsal', 'Learning new skills', 'Travelling', 'Cooking'];
const listContainer = document.getElementById('hobby-list');
const ul = document.createElement('ul');

for (let i = 0; i < hobbies.length; i++) {
    const li = document.createElement('li');
    li.textContent = hobbies[i];
    ul.appendChild(li);
}

listContainer.appendChild(ul);


// --- Step 2: Hobby Gallery (Extension) ---
const galleryImages = [
    'https://picsum.photos/id/1018/300/200',
    'https://picsum.photos/id/1015/300/200',
    'https://picsum.photos/id/1019/300/200'
];

let currentIndex = 0;
const galleryImage = document.getElementById('gallery-image');
const nextPhotoButton = document.getElementById('next-photo-btn');

nextPhotoButton.addEventListener('click', function() {
    currentIndex++;

    // Reset to 0 when reaching the end of the array to prevent 'undefined'
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    galleryImage.src = galleryImages[currentIndex];
    console.log("Showing photo index:", currentIndex);
});