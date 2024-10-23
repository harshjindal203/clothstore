const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "BIBA",
    price: 570,
    colors: [
      {
        code: "red",
        img:"./img biba.jpg",
      },
      {
        code: "darkblue",
        img: "./img biba2.jpg.png",
      },
    ],
  },
  {
    id: 2,
    title: "Levi's",
    price: 749,
    colors: [
      {
        code: "gray",
        img: "./img levis.webp",
      },
      {
        code: "green",
        img: "./img levis2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Calvin Kelvin",
    price: 809,
    colors: [
      {
        code: "white",
        img: "./img kelvin.jpeg",
      },
      {
        code: "black",
        img: "./img kelvin2+.png",
      },
    ],
  },
  {
    id: 4,
    title: "Adidas",
    price: 1009,
    colors: [
      {
        code: "india blue",
        img: "./img adidas.avif",
      },
     {
        code: "lightgray",
        img: "./img adidas2.png",

       },
    ],
  },
  {
    id: 5,
    title: "PETER ENGLAND",
    price: 1939,
    colors: [
      {
        code: "blue",
        img: "./img peter.jpg",
      },
      {
        code: "red",
        img: "./img peter2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const color1 = document.getElementById('clr1');
const color2 = document.getElementById('clr2')
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform ='translateX(${-100 * index}vw)';

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      console.log(color)
      color.style.backgroundColor = choosenProduct.colors[index].code;
      color1.innerHTML = choosenProduct.colors[0].code;
      color2.innerHTML = choosenProduct.colors[1].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});