const dataContainer = document.getElementById("api-data");

const fetchUserData = async function () {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = user.name;
      userList.appendChild(listItem);
    });
    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.innerHTML = "Failed to load user data";
  }
};
document.addEventListener("DOMContentLoaded", fetchUserData);
