const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector(".num-users");


const getData = async function (numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    const userResults = data.results;
    displayUsers(userResults);
};
getData(1);

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    userResults.forEach(user => {
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

// display how many users
selectUserNumber.addEventListener("change", e => {
    const numUsers = e.target.value;
    getData(numUsers);
});
