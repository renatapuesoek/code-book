import getUsers from "./users";

function addUserToDOM(name) {
  const node = document.createElement("li");
  const text = document.createTextNode(name);
  node.appendChild(text);

  document.getElementById("users").appendChild(node);
}

document.getElementById("submit").addEventListener("click", () => {
  const input = document.getElementById("input") as HTMLInputElement;
  addUserToDOM(input.value);

  input.value = "";
});

const users = getUsers();
for (let i = 0; i < users.length; i += 1) {
  addUserToDOM(users[i]);
}
