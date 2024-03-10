const API_URL = "https://dummyjson.com/users";
const cardRow = document.querySelector(".card-row");

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => createCard(res.users))
    .catch((err) => console.log(err));
}
fetchData(API_URL);

function createCard(data) {
  data.forEach((post) => {
    let card = document.createElement("div");
    card.className = "card-wrapper";
    card.innerHTML = `
        <div class="card">
            <div class="card-img">
                 <a id${post.id} href="./singlepage.html">
                    <img
                        id=${post.id}
                        src=${post.image}
                        alt=""/>
        </a>
            </div>
            <div class="card-title">
              <div class="card-name">
                <h1>${post.firstName}</h1>
                <h1>${post.lastName}</h1>
              </div>
              <div class="card-info">
                <h3>${post.email}</h3>
                <h3>${post.phone}</h3>
              </div>
            </div>
        </div>
    `;
    cardRow.appendChild(card);
  });
}

cardRow.addEventListener("click", (a) => {
  let singleID = a.target.id;
  if (singleID) {
    localStorage.setItem("id", singleID);
  }
});
