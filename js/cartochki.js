const images = [
  "https://99px.ru/sstorage/53/2013/10/tmb_83914_4374.jpg", 
  "https://a-static.besthdwallpaper.com/sasuke-uchiha-4-k-wallpaper-640x960-82337_169.jpg",
  "https://avatars.mds.yandex.net/i?id=95f209b7c7e1ff21dca928558118dfb54b3014ed-4388983-images-thumbs&n=13",
  "https://99px.ru/sstorage/53/2021/12/tmb_337303_625140.jpg",
  "https://99px.ru/sstorage/53/2013/03/tmb_63910_6916.jpg",
  "https://i.pinimg.com/736x/7a/a0/07/7aa007309dcb3c5629485f0e4c97b3b1.jpg"
];

async function loadCards() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("Ошибка при загрузке данных");
        }

        const data = await response.json();

        const cardsContainer = document.getElementById("cards");

        const firstSix = data.slice(0, 6);

        firstSix.forEach((post, index) => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${images[index]}" alt="image">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            cardsContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Произошла ошибка:", error);
    }
}

loadCards();
