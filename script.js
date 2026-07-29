// ===============================
// Dating App JavaScript
// ===============================

// DOM Elements
const userContainer = document.getElementById("userContainer");
const citySelect = document.getElementById("city");
const ageSelect = document.getElementById("age");
const genderSelect = document.getElementById("gender");
const searchBtn = document.getElementById("searchBtn");
const themeBtn = document.getElementById("themeBtn");

const usersCount = document.getElementById("usersCount");
const matchCount = document.getElementById("matchCount");

// ===============================
// Statistics
// ===============================

usersCount.innerText = users.length;
matchCount.innerText = users.length;

// ===============================
// Display Users
// ===============================

function displayUsers(list){

    userContainer.innerHTML = "";

    if(list.length === 0){

        userContainer.innerHTML = `
            <h2 style="text-align:center;width:100%;">
                No matching profiles found ❤️
            </h2>
        `;

        return;
    }

    list.forEach(user=>{

        const card=document.createElement("div");

        card.className="user-card";

        // Compatibility Score
        const score=Math.floor(Math.random()*15)+85;

        card.innerHTML=`

            <img src="${user.image}" alt="${user.name}">

            <div class="user-info">

                <h3>${user.name}, ${user.age}</h3>

                <p>
                    📍 ${user.city}
                </p>

                <p>
                    💰 Income ₹${user.income.toLocaleString()}
                </p>

                <p style="margin-top:10px;">
                    ${user.bio}
                </p>

                <div class="tags">

                    ${user.likes.map(item=>`<span>${item}</span>`).join("")}

                </div>

                <div class="tags">

                    ${user.hobbies.map(item=>`<span>🎨 ${item}</span>`).join("")}

                </div>

                <h4 style="margin-top:18px;color:#ff3b7a;">

                    ❤️ Compatibility ${score}%

                </h4>

                <div class="actions">

                    <button class="like">

                        ❤️ Like

                    </button>

                    <button class="pass">

                        ❌ Pass

                    </button>

                </div>

            </div>

        `;

        // Like Button
        card.querySelector(".like").addEventListener("click",()=>{

            alert(`You liked ${user.name}! ❤️`);

        });

        // Pass Button
        card.querySelector(".pass").addEventListener("click",()=>{

            card.remove();

        });

        userContainer.appendChild(card);

    });

}

// Initial Display
displayUsers(users);

// ===============================
// Search
// ===============================

searchBtn.addEventListener("click",()=>{

    const city=citySelect.value;
    const age=parseInt(ageSelect.value);
    const gender=genderSelect.value;

    const result=users.filter(user=>{

        return (

            user.city===city &&

            user.age===age &&

            user.gender===gender

        );

    });

    displayUsers(result);

});

// ===============================
// Hero Buttons
// ===============================

document.getElementById("startBtn").addEventListener("click",()=>{

    document
        .getElementById("matches")
        .scrollIntoView({
            behavior:"smooth"
        });

});

document.getElementById("matchBtn").addEventListener("click",()=>{

    document
        .getElementById("matches")
        .scrollIntoView({
            behavior:"smooth"
        });

});

// ===============================
// Dark Mode
// ===============================

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    const icon=themeBtn.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.className="fa-solid fa-sun";

    }else{

        icon.className="fa-solid fa-moon";

    }

});

// ===============================
// Card Fade-In Animation
// ===============================

window.addEventListener("load",()=>{

    const cards=document.querySelectorAll(".user-card");

    cards.forEach((card,index)=>{

        card.style.opacity=0;

        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition=".6s";

            card.style.opacity=1;

            card.style.transform="translateY(0)";

        },index*150);

    });

});
