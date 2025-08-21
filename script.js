const ratingButtons = document.querySelectorAll(".ratings button");
    let selected = null;
    ratingButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        ratingButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selected = btn.textContent;
      });
    });

    document.querySelector(".submit-btn").addEventListener("click", () => {
      if (selected) {
        alert("You rated: " + selected + " ⭐");
      } else {
        alert("Please select a rating first!");
      }
    });