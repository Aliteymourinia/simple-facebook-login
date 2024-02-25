const submit = document.querySelector("#submit");
const userName = document.querySelector("#userName");
const passWord = document.querySelector("#passWord");
const message = document.querySelector("#message");
database = [
  {
    username: "ali",
    password: "ss",
  },
];
submit.addEventListener("click", (event) => {
  event.preventDefault();
  const userNameValue = userName.value;
  const passWordValue = passWord.value;
  if (
    userNameValue === database[0].username &&
    passWordValue === database[0].password
  ) {
    message.innerHTML = "Welcome :)";
    message.classList.add("text-green-500");
    message.classList.remove("text-red-500");
  } else if (userNameValue === "" && passWordValue === "") {
    message.classList.remove("text-green-500");
    message.classList.remove("text-red-500");
    message.innerHTML = "Please fill required field !";
    message.classList.add("text-yellow-600");
  } else {
    message.innerHTML = "Wrong username or password !";
    message.classList.add("text-red-500");
    message.classList.remove("text-green-500");
  }
});
