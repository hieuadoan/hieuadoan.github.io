function passwordProtect() {
    const password = prompt("Enter the password to access this page:");
    const correctPassword = "recipe"; // Replace with your desired password
  
    if (password === correctPassword) {
      window.location.href = "/private/";
      return true;
    } else {
      alert("Incorrect password. Access denied.");
      return false;
    }
  }
  
  function filterCategory(category) {
    const recipeCards = document.querySelectorAll(".recipe-card");
  
    recipeCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }  