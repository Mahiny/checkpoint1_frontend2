const form = document.querySelector("form")
form.addEventListener("submit",()=>{
    const dados = Object.fromEntries(new FormData(form).entries())
    localStorage.setItem('card', JSON.stringify(dados));
})