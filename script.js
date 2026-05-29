let articles = [
  {
    title: "GTA 6 New Trailer Rumors",
    platform: "PS5 / Xbox",
    type: "news",
    image: "images/gta6.jpg"
  },
  {
    title: "Elden Ring Review",
    platform: "PC",
    type: "review",
    image: "images/eldenring.jpg"
  },
  {
    title: "Best Settings for Fortnite",
    platform: "PC / Console",
    type: "guide",
    image: "images/fortnite.jpg"
  },
  {
    title: "Nintendo Announces New Games",
    platform: "Nintendo",
    type: "news",
    image: "images/nintendo.jpg"
  },
  {
    title: "Spider-Man 2 Full Review",
    platform: "PS5",
    type: "review",
    image: "images/spiderman2.jpg"
  },
  {
    title: "Minecraft Beginner Guide",
    platform: "PC / Mobile",
    type: "guide",
    image: "images/minecraft.jpg"
  }
];

const container = document.getElementById("articlesContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const addBtn = document.getElementById("addBtn");
const themeBtn = document.getElementById("themeBtn");

function displayArticles(list) {
  container.innerHTML = "";

  list.forEach(function(article, index) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${article.image}" class="card-img" alt="Game image">

      <div class="card-content">
        <h3>${article.title}</h3>
        <p><span>Platform:</span> ${article.platform}</p>
        <p><span>Type:</span> ${article.type}</p>
        <button class="remove-btn" onclick="removeArticle(${index})">Remove</button>
      </div>
    `;

    container.appendChild(card);
  });
}

function filterArticles() {
  const searchText = searchInput.value.toLowerCase();
  const selectedType = categoryFilter.value;

  const filtered = articles.filter(function(article) {
    const matchesSearch = article.title.toLowerCase().includes(searchText);
    const matchesType = selectedType === "all" || article.type === selectedType;

    return matchesSearch && matchesType;
  });

  displayArticles(filtered);
}

function removeArticle(index) {
  const cards = document.querySelectorAll(".card");

  cards[index].style.opacity = "0";
  cards[index].style.transform = "scale(0.8)";

  setTimeout(function() {
    articles.splice(index, 1);
    filterArticles();
  }, 300);
}

addBtn.addEventListener("click", function() {
  const title = document.getElementById("titleInput").value;
  const platform = document.getElementById("platformInput").value;
  const type = document.getElementById("typeInput").value;

  if (title === "" || platform === "") {
    alert("Please fill all fields");
    return;
  }

  const newArticle = {
    title: title,
    platform: platform,
    type: type,
    image: "images/default.jpg"
  };

  articles.push(newArticle);

  document.getElementById("titleInput").value = "";
  document.getElementById("platformInput").value = "";

  filterArticles();
});

searchInput.addEventListener("keyup", filterArticles);
categoryFilter.addEventListener("change", filterArticles);

themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});

displayArticles(articles);