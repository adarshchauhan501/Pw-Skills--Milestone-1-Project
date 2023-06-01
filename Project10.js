function doubleQuantity(cart) {
     
    const updatedCart = [];



    for( i= 0 ; i< cart.length; i++){


        let item = cart[i];

        let updatedItem = item * 2;
        updatedCart.push(updatedItem);
    }

    return updatedCart;
}



// Example usage

let flpCart = [1,2,3,4,5,6,7,8];
let updatedCart = doubleQuantity(flpCart);

console.log(updatedCart)