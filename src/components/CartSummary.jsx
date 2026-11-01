// Q10. Mini Shopping Cart
// Create a mini shopping cart interface with at least 5 products. Each product should have a name, price, and Add to Cart button. When the button is clicked, update the cart item count and display the total price of the added products.
// Use components, props, lists, event handling, and `useState`.




const CartSummary = ({ cartCount, totalPrice }) => {
  return (
    <div className="bg-neutral-800 text-white rounded-2xl p-7 shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-extrabold">₹{totalPrice}</h2>
          <p className="text-stone-400 text-sm mt-2">
            {cartCount} items added to your cart
          </p>
        </div>
        <div className="bg-red-500 rounded-2xl p-4 text-3xl">🛒</div>
      </div>
    </div>
  );
};

export default CartSummary;
