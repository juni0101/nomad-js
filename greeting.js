const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const link = document.querySelector("a");


function onLoginSubmit(tomato){
      tomato.preventDefault();
      const username = loginInput.value;
      localStorage.setItem('username', username);
      loginForm.classList.add("hidden")
      greeting.innerText = `hello ${username}`
      greeting.classList.remove("hidden")
}

function handleLinkClick(event){
      event.preventDefault();
      console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

//굳이 h1에 클래스를만들어서 remove하는게 이해안됨 