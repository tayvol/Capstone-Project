function displayUsers(userList) {

    userContainer.innerHTML = "";

    if(userList.length === 0){

        userContainer.innerHTML = `
        <div class="no-results">
            <h2>❤️ No matching profiles found</h2>
            <p>Try changing your search filters.</p>
        </div>
        `;

        return;
    }

    userList.forEach(user=>{

        const compatibility = Math.floor(Math.random()*11)+90;

        const online = Math.random() > 0.5;

        const distance = Math.floor(Math.random()*18)+2;

        const card = document.createElement("div");

        card.className="user-card";

        card.innerHTML = `

        <div class="image-wrapper">

            <img src="${user.image}" alt="${user.name}">

            <div class="match-badge">

                ❤️ ${compatibility}%

            </div>

            <div class="${online ? "online":"offline"}">

                ${online ? "🟢 Online":"⚪ Offline"}

            </div>

        </div>

        <div class="user-info">

            <h2>${user.name}, ${user.age}</h2>

            <p>📍 ${user.city}</p>

            <p>${distance} km away</p>

            <p>${user.bio}</p>

            <div class="tags">

                ${user.likes.map(tag=>`
                    <span>${tag}</span>
                `).join("")}

            </div>

            <div class="tags">

                ${user.hobbies.map(tag=>`
                    <span>🎨 ${tag}</span>
                `).join("")}

            </div>

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

        /* Like */

        card.querySelector(".like").onclick=()=>{

            card.classList.add("liked");

            setTimeout(()=>{

                alert(`❤️ You liked ${user.name}`);

            },300);

        };

        /* Pass */

        card.querySelector(".pass").onclick=()=>{

            card.classList.add("remove");

            setTimeout(()=>{

                card.remove();

            },400);

        };

        /* Profile */

        card.querySelector(".profile").onclick=()=>{

            window.location.href=`pages/profile.html?id=${user.id}`;

        };

        userContainer.appendChild(card);

    });

}
