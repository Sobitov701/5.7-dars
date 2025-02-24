const text = document.getElementById("text");
const btn = document.getElementById("btn");
const container = document.getElementById("container");

function creatCard(value) {
  return `
    <div style="width: 432px;
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 10px;
                background-color: #15101c;
                margin-bottom: 10px;">
      <p style="color:#9e78cf;">${value}</p>
      <button class="delete-btn" style="background-color: #9e78cf;
                                        border: 1px solid #9e78cf;
                                        border-radius: 10px;
                                        padding: 10px;">O'chir</button>
    </div>
  `;
}

function renderCards() {
  const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
  container.innerHTML = "";
  savedCards.forEach((card) => {
    let cardElement = creatCard(card);
    container.innerHTML += cardElement;
  });

  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      deleteCard(index);
    });
  });
}

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const inputValue = text.value.trim();
  if (inputValue) {
    const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
    savedCards.push(inputValue);
    localStorage.setItem("cards", JSON.stringify(savedCards));

    renderCards();
    text.value = "";
  }
});

function deleteCard(index) {
  const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
  savedCards.splice(index, 1);
  localStorage.setItem("cards", JSON.stringify(savedCards));

  renderCards();
}

window.addEventListener("DOMContentLoaded", renderCards);
