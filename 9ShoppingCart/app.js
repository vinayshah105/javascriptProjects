let Product = document.getElementById("product");
let cartItem = document.getElementById('cartItem');
let totalCartItem = document.getElementById('qty');
let checkout = document.getElementById('checkout');
let countPlus = document.getElementById("countPlus");
let Total = document.getElementById("total");
let count = 1;
let cart = [];

  // Fetch Data dynamically;
 function renderProduct(){
     productMen.forEach((product) => {
         Product.innerHTML += `
        <div class="card">
           <img class="card-img" src="${product.image}">
           <div class="card-body">
             <h4 class="card-title">${product.title}</h4>
             <p class="card-text">${product.description}</p>
             <span class="price">
               <h5 class="ActPrice">&#8377 ${product.discountPrice}</h5>
               <h5 class="changedPrice">&#8377 ${product.actualPrice}</h5>
               <div class="discount">(${product.discount}% OFF)</div>
             </span>
             <div class="cartTag">
               <button class="button" onClick="buttonClick(${product.id})">Add To Cart <i class="fa-solid fa-cart-shopping"></i></button>
               <i class="fa-solid fa-heart liked"></i>
             </div>
           </div>
         </div>
             `
     })
 }
 renderProduct();

 // Add to cart button click and store into array;
 function buttonClick(id){
   if(cart.some((addedProduct) => addedProduct.id === id)){
     alert("Product Already Exist In Cart");
   }else{
     let item = productMen.find((pId) => (pId.id === id))
          cart.push({...item, numberOfItem :1});
           console.log(cart)
         }
         updateCart(id);
          totalProduct();
          subTotal();
 }

  function updateCart(){
   renderCart();
   // renderSubTotal();
  }

//  render selected product into cartlist;
  function renderCart(){
    checkout.innerHTML = "";
    cart.forEach((cartItem) => {
        checkout.innerHTML += `
      <span class="check">
               <img src="${cartItem.image}" alt="Men">
               <p>${cartItem.title}</p>
               <p>&#8377 ${cartItem.discountPrice}/-</p>
               <span>
                 <i class="fa-solid fa-circle-minus" onClick="decrement(${cartItem.id})"></i><span id="countPlus">${cartItem.numberOfItem}</span><i class="fa-solid fa-circle-plus" onClick="increment(${cartItem.id})"></i>
               </span>
             </span>
      `
   })
  }
 
  //increment product in cart;
  function increment(id){
   cart = cart.map((cartItem) => {
     let numberOfItem = cartItem.numberOfItem;
      if(cartItem.id === id){
         numberOfItem++;
     }
      return{
       ...cartItem, 
       numberOfItem,
      }
   })
    console.log(cart);
     totalProduct()
    //  subTotal()
   updateCart()
   };

    //Decrement product in cart;
   function decrement(id){
    cart = cart.map((cartItem) => {
      let numberOfItem = cartItem.numberOfItem;
       if(cartItem.id === id && numberOfItem > 1){
          numberOfItem--;
      }
       return{
        ...cartItem, 
        numberOfItem,
      }
    })
     console.log(cart);
     totalProduct()
    updateCart()
    };

    // update product total in cart-icon
    function totalProduct(){
      const eachNumberOfItem = cart.map(item => item.numberOfItem);
      const totalPriceOfItem = cart.map(item => item.numberOfItem * item.discountPrice);
      console.log(totalPriceOfItem)
      const sumAll = eachNumberOfItem.reduce((x, y) => x + y, 0);
       const total = totalPriceOfItem.reduce((a,b) => a + b, 0);
      cartItem.innerHTML = sumAll;
      totalCartItem.innerHTML = sumAll;
       Total.innerHTML = total;
    }

    // function subTotal(){
    //     for(let i=0; i<cart.length; i++){
    //       let totalBill = (cart[i].numberOfItem * cart[i].discountPrice);
    //       console.log(totalBill);
    //     }
    // }