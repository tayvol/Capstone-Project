// ==========================================
// Dating App - script.js
// ==========================================

// ----------------------------
// DOM Elements
// ----------------------------

const userContainer = document.getElementById("userContainer");

const citySelect = document.getElementById("city");
const ageSelect = document.getElementById("age");
const genderSelect = document.getElementById("gender");

const searchBtn = document.getElementById("searchBtn");

const startBtn = document.getElementById("startBtn");
const matchBtn = document.getElementById("matchBtn");

const themeBtn = document.getElementById("themeBtn");

const usersCount = document.getElementById("usersCount");
const matchCount = document.getElementById("matchCount");

// ----------------------------
// Statistics
// ----------------------------

usersCount.textContent = users.length;
matchCount.textContent = users.length;

// ----------------------------
// Display Users
// ----------------------------

function displayUsers(userList) {

    userContainer.innerHTML = "";

    if (userList.length === 0) {

        userContainer.innerHTML = `
            <div style="
                width:100%;
                text-align:center;
                padding:50px;
            ">
                <h2>No matching profiles found ❤️</h2>
            </div>
        `;

        return;
    }

    userList.forEach(user => {

        const compatibility = Math.floor(Math.random() * 15) + 85;

        const card = document.createElement("div");

        card.className = "user-card";

        card.innerHTML = `

            <img src="${user.image}" alt="${user.name}">

            <div class="user-info">

                <h3>${user.name}, ${user.age}</h3>

                <p>📍 ${user.city}</p>

                <p>👤 ${user.gender}</p>

                <p>💰 Income ₹${user.income.toLocaleString()}</p>

                <p style="margin-top:15px;">
                    ${user.bio}
                </p>

                <div class="tags">

                    ${user.likes.map(like => `
                        <span>${like}</span>
                    `).join("")}

                </div>

                <div class="tags">

                    ${user.hobbies.map(hobby => `
                        <span>🎨 ${hobby}</span>
                    `).join("")}

                </div>

                <h4 style="
                    margin-top:18px;
                    color:#ff3b7a;
                ">

                    ❤️ Compatibility ${compatibility}%

                </h4>

                <div class="actions">

                    <button class="like">
                        ❤️ Like
                    </button>

                    <button class="pass">
                        ❌ Pass
                    </button>

                    <button class="profile">
                        👤 Profile
                    </button>

                </div>

            </div>

        `;

        // ----------------------------
        // Like
        // ----------------------------

        card.querySelector(".like").addEventListener("click", () => {

            alert(`❤️ You liked ${user.name}!`);

        });

        // ----------------------------
        // Pass
        // ----------------------------

        card.querySelector(".pass").addEventListener("click", () => {

            card.remove();

        });

        // ----------------------------
        // Profile
        // ----------------------------

        card.querySelector(".profile").addEventListener("click", () => {

            window.location.href = `pages/profile.html?id=${user.id}`;

        });

        userContainer.appendChild(card);

    });

}

// ----------------------------
// Initial Display
// ----------------------------

displayUsers(users);

// ----------------------------
// Search Function
// ----------------------------

searchBtn.addEventListener("click", () => {

    const city = citySelect.value;

    const age = parseInt(ageSelect.value);

    const gender = genderSelect.value;

    const filteredUsers = users.filter(user => {

        return (

            user.city === city &&

            user.age === age &&

            user.gender === gender

        );

    });

    displayUsers(filteredUsers);

});

// ----------------------------
// Hero Buttons
// ----------------------------

startBtn.addEventListener("click", () => {

    document
        .getElementById("matches")
        .scrollIntoView({
            behavior: "smooth"
        });

});

matchBtn.addEventListener("click", () => {

    document
        .getElementById("matches")
        .scrollIntoView({
            behavior: "smooth"
        });

});

// ----------------------------
// Dark Mode
// ----------------------------

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.className = "fa-solid fa-sun";

    } else {

        icon.className = "fa-solid fa-moon";

    }

});

// ----------------------------
// Scroll Animation
// ----------------------------

window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".user-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {

            card.style.transition = "0.6s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});

// ----------------------------
// Navbar Active Link
// ----------------------------

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});
