const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    const userResults = data.results;
    console.log(userResults);
    displayUsers(userResults);
};
getData();

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    userResults.forEach(user => {
        console.log(user);
        const country = user.location.country;
        const name = `${user.name.first} ${user.name.last}`;
        const imageUrl = user.picture.thumbnail;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />`
        randomFolks.append(userDiv);
    });
};