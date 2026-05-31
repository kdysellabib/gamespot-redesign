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

// عناصر الصفحة
const container = document.getElementById("articlesContainer");
const categoryFilter = document.getElementById("categoryFilter");
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

// عرض المقالات
function displayArticles(list) {

  container.innerHTML = "";

  list.forEach(function(article) {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
      <img src="${article.image}" class="card-img" alt="Game image">

      <div class="card-content">
        <h3>${article.title}</h3>

        <p>
          <span>Platform:</span>
          ${article.platform}
        </p>

        <p>
          <span>Type:</span>
          ${article.type}
        </p>

      </div>
    `;

    container.appendChild(card);

  });

}

// فلترة المقالات
function filterArticles() {

  const selectedType = categoryFilter.value;

  const filtered = articles.filter(function(article) {

    return (
      selectedType === "all" ||
      article.type === selectedType
    );

  });

  displayArticles(filtered);

}

// تشغيل الفلتر
categoryFilter.addEventListener(
  "change",
  filterArticles
);

// Dark Mode
themeBtn.addEventListener(
  "click",
  function() {

    document.body.classList.toggle("dark");

    if (
      document.body.classList.contains("dark")
    ) {

      themeBtn.textContent =
      "Light Mode";

    }
    else {

      themeBtn.textContent =
      "Dark Mode";

    }

  }
);

// Sidebar Menu
menuBtn.addEventListener(
  "click",
  function() {

    sidebar.classList.toggle("active");

  }
);

// إغلاق القائمة عند الضغط على أي رابط
const sidebarLinks =
document.querySelectorAll(".sidebar a");

sidebarLinks.forEach(function(link) {

  link.addEventListener(
    "click",
    function() {

      sidebar.classList.remove("active");

    }
  );

});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener(
  "click",
  function(event) {

    if (
      !sidebar.contains(event.target) &&
      !menuBtn.contains(event.target)
    ) {

      sidebar.classList.remove("active");

    }

  }
);

// تشغيل الموقع أول مرة
displayArticles(articles);