const lamp = document.getElementById("lamp");
const smoke = document.getElementById("smoke");
const message = document.getElementById("message");

const wishes = [
  "You’ll be rich 💰",
  "True love awaits 💕",
  "Adventure is near 🏔️",
  "Happiness surrounds you 😄",
  "A surprise gift is coming 🎁",
  "You’ll find wisdom 🌟",
];

const showSmoke = () => {
  smoke.style.opacity = 1;
  smoke.style.animation = "smokeRise 2s forwards";

  setTimeout(() => {
    smoke.style.opacity = 0;
    smoke.style.animation = "none";
  }, 2000);
};

const showWish = () => {
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  message.textContent = randomWish;
};

lamp.addEventListener("click", () => {
  showSmoke();
  showWish();
});
