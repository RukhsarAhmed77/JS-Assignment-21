var products = [
  {
    image: "https://images.olx.com.pk/thumbnails/500976634-240x180.webp",
    name: "iPhone 14 Pro",
    price: "Rs 208,000",
    location: "Khana Kacha Road, Lahore",
    time: "6 days ago"
  },
  {
    image: "https://images.olx.com.pk/thumbnails/502270622-240x180.webp",
    name: "Google Pixel 4XL",
    price: "Rs 50,000",
    location: "Others, Chakwal",
    time: "1 day ago"
  },
  {
    image: "https://images.olx.com.pk/thumbnails/499565218-800x600.jpeg",
    name: "Samsung A06 Box Pack",
    price: "Rs 23,400",
    location: "Township, Lahore",
    time: "2 weeks ago"
  },
  {
    image: "https://images.olx.com.pk/thumbnails/500671103-240x180.webp",
    name: "Samsung S24 Plus",
    price: "Rs 215,000",
    location: "Gulberg 3, Lahore",
    time: "3 days ago"
  }
];


var productCardsContainer = document.getElementById("product-cards");

for (var i = 0; i < products.length; i++) {
  var product = products[i];

  var card = document.createElement("div");
  card.className = "col-md-3";

  card.innerHTML = `
    <div class="card h-100">
      <img src="${product.image}" class="card-img-top" alt="${product.name}">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text text-muted">${product.location}</p>
        <p class="card-text">${product.price}</p>
        <p class="card-text text-muted small">${product.time}</p>
      </div>
    </div>
  `;

  productCardsContainer.appendChild(card);
}
  

var cars = [
  {
    image: "https://images.olx.com.pk/thumbnails/502606161-800x600.webp",
    name: "Toyota Corolla GLI 2018",
    price: "Rs 3,750,000",
    location: "Federal B Area, Karachi",
    time: "3 days ago"
  },
  {
    image: "https://images.olx.com.pk/thumbnails/502139462-800x600.webp",
    name: "Honda Civic VTi Oriel Prosmatec 2019",
    price: "Rs 5,150,000",
    location: "DHA, Karachi",
    time: "5 days ago"
  },
  {
    image: "https://images.olx.com.pk/thumbnails/498773688-800x600.webp",
    name: "Honda City Aspire Manual 2020",
    price: "Rs 3,650,000",
    location: "H Block, Vehari",
    time: "1 week ago"
  },
  {
    image: "https://images.olx.com.pk/thumbnails/499610172-800x600.webp",
    name: "Brand new low mileage 800km",
    price: "Rs 7,900,000",
    location: "Blue Area, Islamabad",
    time: "2 weeks ago"
  }
];


var carCardsContainer = document.getElementById("car-cards");

for (var i = 0; i < cars.length; i++) {
  var car = cars[i];

  var card = document.createElement("div");
  card.className = "col-md-3";

  card.innerHTML = `
    <div class="card h-100">
      <img src="${car.image}" class="card-img-top" alt="${car.name}">
      <div class="card-body">
        <h5 class="card-title">${car.name}</h5>
        <p class="card-text text-muted">${car.location}</p>
        <p class="card-text">${car.price}</p>
        <p class="card-text text-muted small">${car.time}</p>
      </div>
    </div>
  `;

  carCardsContainer.appendChild(card);
}
  