// Q10. Mini Shopping Cart
// Create a mini shopping cart interface with at least 5 products. Each product should have a name, price, and Add to Cart button. When the button is clicked, update the cart item count and display the total price of the added products.
// Use components, props, lists, event handling, and `useState`.




const ShopItem = ({ product, handleAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl">
      <div className="bg-gray-200 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="h-52 w-48  object-center"/>
      </div>
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-gray-900">₹{product.price}</p>
          <button onClick={handleAddToCart}
            className="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-xl text-sm font-semibold"
          >
            + Add
          </button>
        </div>
      </div>

    </div>
  );
};

export default ShopItem;
