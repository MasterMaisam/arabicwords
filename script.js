const levels = [
  {
    level: 1,
    words: [
      { arabic: "باب", english: "Door" },
      { arabic: "بيت", english: "House" },
      { arabic: "قلم", english: "Pen" },
      { arabic: "كتاب", english: "Book" },
      { arabic: "ماء", english: "Water" },
      { arabic: "شاي", english: "Tea" }
    ]
  },
  {
    level: 2,
    words: [
      { arabic: "شمس", english: "Sun" },
      { arabic: "قمر", english: "Moon" },
      { arabic: "وردة", english: "Flower" },
      { arabic: "نهر", english: "River" },
      { arabic: "جبل", english: "Mountain" },
      { arabic: "خبز", english: "Bread" }
    ]
  },
  {
    level: 3,
    words: [
      { arabic: "سماء", english: "Sky" },
      { arabic: "طفل", english: "Child" },
      { arabic: "كلب", english: "Dog" },
      { arabic: "قط", english: "Cat" },
      { arabic: "ولد", english: "Boy" },
      { arabic: "بنت", english: "Girl" }
    ]
  },
  {
    level: 4,
    words: [
      { arabic: "سيارة", english: "Car" },
      { arabic: "طائرة", english: "Airplane" },
      { arabic: "قارب", english: "Boat" },
      { arabic: "شارع", english: "Street" },
      { arabic: "مدرسة", english: "School" },
      { arabic: "جسر", english: "Bridge" }
    ]
  },
  {
    level: 5,
    words: [
      { arabic: "حديقة", english: "Garden" },
      { arabic: "سوق", english: "Market" },
      { arabic: "مستشفى", english: "Hospital" },
      { arabic: "مكتبة", english: "Library" },
      { arabic: "مسرح", english: "Theater" },
      { arabic: "مطعم", english: "Restaurant" }
    ]
  }
];

let currentLevelIndex = 0;
const levelInfo = document.getElementById("level-info");
const cardContainer = document.getElementById("card-container");
const nextLevelBtn = document.getElementById("next-level-btn");
const restartBtn = document.getElementById("restart-btn");

function showLevel() {
  cardContainer.innerHTML = "";
  const currentLevel = levels[currentLevelIndex];
  levelInfo.textContent = `Level ${currentLevel.level}`;

  currentLevel.words.forEach(word => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-face", "card-front");
    cardFront.textContent = word.arabic;

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-face", "card-back");
    cardBack.textContent = word.english;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    cardContainer.appendChild(card);
  });
}

nextLevelBtn.addEventListener("click", () => {
  currentLevelIndex++;
  if (currentLevelIndex < levels.length) {
    showLevel();
  } else {
    levelInfo.textContent = "Game Completed!";
    cardContainer.innerHTML = "";
    nextLevelBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
  }
});

restartBtn.addEventListener("click", () => {
  currentLevelIndex = 0;
  restartBtn.style.display = "none";
  nextLevelBtn.style.display = "inline-block";
  showLevel();
});

showLevel();
