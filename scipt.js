let products = [
  {
    name: "Nexia",
    price: 10000,
    color: "black",
    year: 2005,
    image: "https://i.imgur.com/0ZQZy.jpg",
  },
  {
    name: "Tiko",
    price: 5000,
    color: "red",
    year: 1995,
    image: "https://i.imgur.com/X2ff.jpg",
  },
  {
    name: "Malibu",
    price: 20000,
    color: "black",
    year: 2021,
    image: "https://i.imgur.com/AsaK.jpg",
  },
  {
    name: "Jiguli",
    price: 1000,
    color: "green",
    year: 1991,
    image: "https://i.imgur.com/6fGg.jpg",
  },
];

function addProduct() {
  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const color = document.getElementById("color").value;
  const year = Number(document.getElementById("year").value);
  const image = document.getElementById("image").value;

  if (!name || !price || !color || !year || !image) {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  products.push({ name, price, color, year, image });
  renderProducts();
}

function deleteProduct(index) {
  products.splice(index, 1);
  renderProducts();
}

function renderProducts() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const yearFilter = document.getElementById("yearFilter").value;

  let filtered = products.filter((car) =>
    car.name.toLowerCase().includes(searchValue)
  );

  if (yearFilter !== "all") {
    const [min, max] = yearFilter.split("-").map(Number);
    filtered = filtered.filter((car) => car.year >= min && car.year <= max);
  }

  const box = document.getElementById("productList");
  box.innerHTML = "";

  filtered.forEach((car, i) => {
    let borderClass = car.price > 10000 ? "expensive" : "";

    box.innerHTML += `
            <div class="card ${borderClass}">
                <img src="${car.image}">
                <p><b>Product name:</b> ${car.name}</p>
                <p><b>Price:</b> $${car.price}</p>
                <p><b>Year:</b> ${car.year}</p>

                <div class="color-box" style="background:${car.color}"></div>

                <button class="delete-btn" onclick="deleteProduct(${i})">Delete</button>
            </div>
        `;
  });
}

renderProducts();
