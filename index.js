let cards = [];

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dados = Object.fromEntries(new FormData(form).entries());
  if (cards.length == 1) {
    cards.push(dados);
    localStorage.setItem("card", JSON.stringify(cards));
    form.action = "/page2.html";
    form.submit()
    return;
  }
  cards.push(dados);
  form.reset();
});
