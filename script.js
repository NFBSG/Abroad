

// Your existing carousel code
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".carousel-container");
  const cards = document.querySelectorAll(".card-crausel");
  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.style.transform = `translateX(${20 * (index + 1)}%)`;
    });
  }

  function nextCard() {
    currentIndex = (currentIndex - 1) % cards.length;
    showCard(currentIndex);
  }

  function prevCard() {
    currentIndex = (currentIndex + 1 + cards.length) % cards.length;
    showCard(currentIndex);
    }
  
  // Start the auto-advance for this carousel
  prevCard()
  
  setInterval(nextCard, 1000); // Auto-advance every 1 second (for demonstration purposes)
  
});
