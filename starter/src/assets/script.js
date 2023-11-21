// Create an array named products to hold product objects
const products = [
  {
    name: 'Cherry',
    price: 2.5,
    quantity: 0,
    productId: 1,
    image: 'images/cherry.jpg',
  },
  {
    name: 'Orange',
    price: 1.8,
    quantity: 0,
    productId: 2,
    image: 'images/orange.jpg',
  },
  {
    name: 'Strawberry',
    price: 3.2,
    quantity: 0,
    productId: 3,
    image: 'images/strawberry.jpg',
  },
];

// Declare an empty array named cart to hold the items in the cart
const cart = [];

// Create a function named addProductToCart
function addProductToCart(productId) {
  const product = products.find((item) => item.productId === productId);

  if (!product) {
    console.error('Product not found');
    return;
  }

  const cartItem = cart.find((item) => item.productId === productId);

  if (cartItem) {
    // Product is already in the cart, increase quantity
    cartItem.quantity++;
  } else {
    // Product is not in the cart, add it
    cart.push({ ...product, quantity: 1 });
  }
}

// Create a function named increaseQuantity
function increaseQuantity(productId) {
  const cartItem = cart.find((item) => item.productId === productId);

  if (cartItem) {
    // Increase the product's quantity
    cartItem.quantity++;
  } else {
    console.error('Product not found in the cart');
  }
}

// Create a function named decreaseQuantity
function decreaseQuantity(productId) {
  const cartItem = cart.find((item) => item.productId === productId);

  if (cartItem) {
    // Decrease the product's quantity
    cartItem.quantity--;

    if (cartItem.quantity <= 0) {
      // If quantity reaches 0, remove the product from the cart
      removeProductFromCart(productId);
    }
  } else {
    console.error('Product not found in the cart');
  }
}

// Create a function named removeProductFromCart
function removeProductFromCart(productId) {
  const index = cart.findIndex((item) => item.productId === productId);

  if (index !== -1) {
    // Update the product quantity to 0
    cart[index].quantity = 0;
    // Remove the product from the cart
    cart.splice(index, 1);
  } else {
    console.error('Product not found in the cart');
  }
}

// Create a function named cartTotal
function cartTotal() {
  // Iterate through the cart to get the total cost of all products
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Create a function named emptyCart
function emptyCart() {
  // Empty the products from the cart
  cart.length = 0;
}

// Create a function named pay
function pay(amount) {
  const total = cartTotal();
  const remainingBalance = amount - total;
  
  // Return a negative number if there is a remaining balance
  // Return a positive number if money should be returned to the customer
  return remainingBalance;
}

// Uncomment the following line if completing the currency converter bonus
// function currency


module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
