/*In an online shopping application, customers can add multiple items to their cart. However, sometimes
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
duplicate items not only make it difficult for the customer to track the items they want to purchase #ut also
affect the accuracy of the purchase order.*/

function removeDuplicates(cart){
    // an empty set to store unique items

    const uniqueItems = new Set();

    // a new array to store items without duplicates
    const newCart = [];

    for(let item of cart){
        if(!uniqueItems.has(item)){

            newCart.push(item);
            uniqueItems.add(item);
        }
    }

    return newCart;
}


const flpkartCart = ["mobile","laptop", "watch", "earbuds","mobile" , "watch"]
const updatedFlpkartCart = removeDuplicates(flpkartCart);
console.log(updatedFlpkartCart)