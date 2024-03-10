let singleId = localStorage.getItem("id");
const API = "https://dummyjson.com/users";
const singleInfo = document.querySelector(".page-info");
const singleImg = document.querySelector(".page-img");

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => getSingleCard(res.users))
    .catch((err) => console.log(err + " Malumotlar yo'q"));
}

fetchData(API);

function getSingleCard(api) {
  let res = api.filter((user) => user.id == singleId);
  res.map((user) => {
    singleImg.innerHTML = `
    <img src=${user.image} alt="" />
    `;
    singleInfo.innerHTML = `
              <div class="page-name">
            <h2>firstName: ${user.firstName}</h2>
            <h2>lastName: ${user.lastName}</h2>
            <h2>maidenName: ${user.maidenName}</h2>
            <h2>birthDate: ${user.birthDate}</h2>
          </div>
          <div class="page-title">
            <h2>age: ${user.age}</h2>
            <h2>gender: ${user.gender}</h2>
            <h2>email: ${user.email}</h2>
            <h2>phone: ${user.phone}</h2>
          </div>
          <div class="page-media">
            <h2>username: ${user.username}</h2>
            <h2>password: ${user.password}</h2>
            <h2>height: ${user.height}</h2>
            <h2>weight: ${user.weight}</h2>
          </div>
          <div class="page-address">
            <h2>macAddress: ${user.macAddress}</h2>
            <h2>address: ${user.address.address}</h2>
            <h2>city: ${user.address.city}</h2>
            <h2>university: ${user.university}</h2>
          </div>
    `;
  });
}
