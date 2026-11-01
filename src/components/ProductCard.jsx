// Q3. Product Listing Page
// Create a product listing page with at least 6 products. Store product details in an array
// of objects and use `.map()` to display each product through a reusable `ProductCard` component.
// Each card should display the product name, price, and category.



const ProductCard = ({name, price, category}) => {
  return (
    <div className="p-4 bg-white rounded-lg border">
        <h1 className="text-xl font-bold mb-2">{name}</h1>
        <p className="text-gray-700 mb-3">
            Price: <span className="text-amber-600 font-medium">{price}</span>
        </p>
        <p className="text-gray-700">
            Category: <span className="text-green-600 font-bold">{category}</span>
        </p>
    </div>
  )
}

export default ProductCard
