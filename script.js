// ============================================
// Adaptive Dating Recommendation System
// script.js
// ============================================

// ---------- DOM Elements ----------

const userContainer = document.getElementById("userContainer");

const citySelect = document.getElementById("city");
const ageSelect = document.getElementById("age");
const genderSelect = document.getElementById("gender");

const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");

const userCount = document.getElementById("userCount");
const matchCount = document.getElementById("matchCount");

const themeBtn = document.getElementById("themeBtn");

// ---------- Statistics ----------

userCount.textContent = users.length;
matchCount.textContent = users.length;

// ---------- Display Users ----------

function displayUsers(userList) {

    userContainer.innerHTML = "";

    if (userList.length === 0) {

        userContainer.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:50px;">
                <h2>No matching profiles found ❤️</h2>
                <p>Try changing your filters.</p>
            </div>
        `;

        return;
    }

    userList.forEach(user => {

        const compatibility = calculateCompatibility(user);

        const card = document.createElement("div");

        card.className = "user-card";

        card.innerHTML = `

            <img src="${user.image}" alt="${user.name}">

            <div class="user-info">

                <h3>${user.name}, ${user.age}</h3>

                <p>📍 ${user.city}</p>

                <p>👤 ${user.gender}</p>

                <p>💰 Income ₹${user.income.toLocaleString()}</p>

                <p style="margin:15px 0;">
                    ${user.bio}
                </p>

                <strong>Likes</strong>

                <div class="tags">

                    ${user.likes.map(item=>`
                        <span>${item}</span>
                    `).join("")}

                </div>

                <strong>Hobbies</strong>

                <div class="tags">

                    ${user.hobbies.map(item=>`
                        <span>${item}</span>
                    `).join("")}

                </div>

                <h4 style="margin-top:20px;color:#ff3b7a;">

                    ❤️ Match ${compatibility}%

                </h4>

                <div class="actions">

                    <button class="like">

                        ❤️ Like

                    </button>

                    <button class="profile">

                        👤 Profile

                    </button>

                    <button class="pass">

                        ❌ Pass

                    </button>

                </div>

            </div>

        `;

        // Like Button

        card.querySelector(".like").addEventListener("click", () => {

            alert("You liked " + user.name + " ❤️");

        });

        // Pass Button

        card.querySelector(".pass").addEventListener("click", () => {

            card.remove();

        });

        // Profile Button

        card.querySelector(".profile").addEventListener("click", () => {

            localStorage.setItem("selectedUser", JSON.stringify(user));

            window.location.href = "pages/profile.html";

        });

        userContainer.appendChild(card);

    });

}

// ---------- Compatibility ----------

function calculateCompatibility(user){

    let score = 70;

    if(user.city === "Mumbai")
        score += 8;

    if(user.likes.length > 0)
        score += 7;

    if(user.hobbies.length > 0)
        score += 5;

    score += Math.floor(Math.random()*10);

    if(score > 99)
        score = 99;

    return score;

}

// ---------- Search ----------

searchBtn.addEventListener("click",()=>{

    let filtered = users.filter(user=>{

        const cityMatch =
            citySelect.value === "" ||
            user.city === citySelect.value;

        const genderMatch =
            genderSelect.value === "" ||
            user.gender === genderSelect.value;

        const ageMatch =
            ageSelect.value === "" ||
            user.age == ageSelect.value;

        return cityMatch &&
               genderMatch &&
               ageMatch;

    });

    matchCount.textContent = filtered.length;

    displayUsers(filtered);

});

// ---------- Reset ----------

resetBtn.addEventListener("click",()=>{

    citySelect.value = "";
    genderSelect.value = "";
    ageSelect.value = "";

    matchCount.textContent = users.length;

    displayUsers(users);

});

// ---------- Dark Mode ----------

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

// ---------- Initial Load ----------

displayUsers(users);
