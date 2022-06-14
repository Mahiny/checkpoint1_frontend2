let cards = [];

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dados = Object.fromEntries(new FormData(form).entries());
  if (cards.length == 1) {
    cards.push(dados);
    window.location.href = "/page2.html";
    localStorage.setItem("card", JSON.stringify(cards));
    return
  }
  cards.push(dados);
  form.reset();
});
