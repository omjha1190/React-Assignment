// 1. Student Profile Cards
// Create a `StudentCard` component that accepts student name, course, and marks through props. Display at least 4 student cards using the same component.


// import StudentCard from './components/StudentCard'

// const App = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
//         <StudentCard name="Om" course="Javascript" marks={88} />
//         <StudentCard name="Ankit" course="Python" marks={80} />
//         <StudentCard name="Shivam" course="Django" marks={90} />
//         <StudentCard name="Vishal" course="React" marks={80} />
//       </div>
//     </div>
//   );
// };

// export default App











// 2.Create separate components named `Navbar`, `Home`, and `Footer` in different files. Export and import them into `App.jsx` to display a complete webpage.



// import Footer from "./components/Footer"
// import Home from "./components/Home"
// import Navbar from "./components/Navbar"

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Home/>
//       <Footer/>
//     </div>
//   )
// }

// export default App











// 3. Product Listing Page
// Create a product listing page with at least 6 products. Store product details in an array of objects and use `.map()` to display each product through a reusable `ProductCard` component. Each card should display the product name, price, and category.



// import ProductCard from "./components/ProductCard"

// const App = () => {
//   const products = [
//     {name:"Jeans", price:"2000", category:"Clothing" },
//     {name:"Mobile", price:"20000", category:"Electronic" },
//     {name:"Perfume", price:"1200", category:"Accessories" },
//     {name:"Bag", price:"1500", category:"Bags" },
//     {name:"Shoes", price:"2500", category:"Footwear" },
//     {name:"Watch", price:"6000", category:"Accessories" },
//   ]
//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Product Listing</h1>
//       <div className="grid grid-cols-3 gap-2">
//         {products.map((product) =>(
//           <ProductCard name={product.name} price={product.price} category={product.category}/>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App











// 4. Conditional Login UI
// Create a login interface using `useState`. Display “Welcome Back!” when the user is logged in and “Please Login” when logged out. Add a button to toggle between the two states.




// 4. Conditional Login UI
// Create a login interface using `useState`. Display “Welcome Back!” when the user is logged in
//  and “Please Login” when logged out. Add a button to toggle between the two states.

// import { useState } from "react";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   function handleLogin() {
//     setIsLoggedIn(!isLoggedIn);
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md text-center">
//         <h1 className="text-3xl font-bold mb-4">
//           {isLoggedIn ? "Welcome Back!" : "Please Login"}
//         </h1>
//         <button onClick={handleLogin} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
//           {isLoggedIn ? "Logout" : "Login"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;















// 5. Pass or Fail Result
// Create a `ResultCard` component that accepts a student's name and marks through props. Display “Pass” if marks are 40 or above; otherwise, display “Fail”. Show results for at least 5 students.


// import ResultCard from "./components/ResultCard"

// const App = () => {
//   return (
//     <div className="p-10 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-5">Students Results</h1>
//       <div className="flex flex-wrap justify-center gap-6">
//         <ResultCard name="Om" marks={70}/>
//         <ResultCard name="Ankit" marks={87}/>
//         <ResultCard name="Shivam" marks={69}/>
//         <ResultCard name="Vishal" marks={90}/>
//         <ResultCard name="Aman" marks={34}/>
//       </div>
//     </div>
//   )
// }

// export default App
















// 6. Todo List Application
// Create a simple Todo List application where users can:
// - Add a new task.
// - Display all tasks.
// - Mark a task as completed.
// - Delete a task.
// Use components, props, event handlers, and `useState`.




// import { useState } from "react"
// import InsertTodo from "./components/InsertTodo"
// import ListTodo from "./components/ListTodo"

// const App = () => {
//   const [data, setData] = useState([])
//   const [task, setTask] = useState("");

//   const handleInsert = (task) => {
//     setData([...data, {id:data.length + 1, task: task, isDone: false}])
//   }

//   const handleDelete = (id) => {
//     const newData = data.filter((item) => item.id != id);
//     setData(newData)
//   }

//   const handleDoneToggle = (id) => {
//     setData(data.filter((item) => {
//       if(item.id == id) {
//         item.isDone = !item.isDone;
//       }
//       return item;
//     }))
//   }
//   return (
//     <div className="h-screen bg-slate-100 flex items-center justify-center">
//       <div className="bg-[#B40023] w-4/12 px-5 py-8 rounded shadow-xl">
//       <h1 className="text-center text-white mb-5 text-3xl font-bold">Todo App</h1>
//         <InsertTodo task={task} setTask={setTask} handleInsert={handleInsert}/>
//         <ListTodo handleDoneToggle={handleDoneToggle} handleDelete={handleDelete} data={data}/>
//       </div>
//     </div>
//   )
// }

// export default App













// 7. Searchable Student List
// Create a student list containing at least 8 names. Add a search input that filters students by name as the user types. Use state to manage the search value and `.map()` to display the filtered list.




// import { useState } from "react";
// import SearchStudent from "./components/SearchStudent";
// import StudentList from "./components/StudentList";

// const App = () => {
//   const [search, setSearch] = useState("");

//   const students = [
//     "Om",
//     "Ankit",
//     "Shivam",
//     "Vishal",
//     "Rahul",
//     "Priya",
//     "Aman",
//     "Neha",
//   ];

//   const filteredStudents = students.filter((student) =>
//     student.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-center mb-5">Student List</h1>
//         <SearchStudent search={search} setSearch={setSearch}/>
//         <StudentList data={filteredStudents} />
//       </div>
//     </div>
//   );
// };

// export default App;















// 8. Like and Dislike Cards
// Create a reusable `PostCard` component that displays a post title and description. Add Like and Dislike buttons with separate counters for each post. Display at least 3 posts using props and state.



// import { useState } from "react";
// import PostCard from "./components/PostCard";

// const App = () => {
//   const [posts, setPosts] = useState([
//     {
//     id: 1,
//     title: "Is Money More Important Than Happiness?",
//     description: "Money cannot buy happiness, but it definitely makes life easier. What do you think?",
//     likes: 0,
//     dislikes: 0,
//   },
//   {
//     id: 2,
//     title: "Social Media Is Wasting Our Time",
//     description: "We open Instagram for 5 minutes and somehow spend 2 hours scrolling. Is social media becoming an addiction?",
//     likes: 0,
//     dislikes: 0,
//   },
//   {
//     id: 3,
//     title: "College Degrees Are Overrated",
//     description: "In today's world, practical skills and real-world experience matter more than just having a degree.",
//     likes: 0,
//     dislikes: 0,
//   },
//   ]);

//   const handleLike = (id) => {
//     setPosts(posts.map((post) => {
//         if (post.id === id) {return { ...post, likes: post.likes + 1 };}
//         return post;
//       })
//     );
//   };

//   const handleDislike = (id) => {
//     setPosts(posts.map((post) => {
//         if (post.id === id) {return { ...post, dislikes: post.dislikes + 1 };}
//         return post;
//       })
//     );
//   };

//   return (
//     <div className="min-h-screen bg-slate-200 px-[20%] py-8">
//       <h1 className="text-3xl font-bold text-center mb-6">Like and Dislike Posts</h1>
//       <div className="flex flex-col gap-5">
//         {posts.map((post) => (
//           <PostCard key={post.id} post={post} handleLike={() => handleLike(post.id)} handleDislike={() => handleDislike(post.id)}/>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;














// 9. FAQ Accordion
// Create an FAQ section containing at least 5 questions and answers. When a user clicks a question, its answer should appear. Clicking the same question again should hide the answer. Use reusable components, props, event handlers, and state.



// import { useState } from "react";
// import FAQItem from "./components/FAQItem";

// const App = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const faqs = [
//   {
//     id: 1,
//     question: "Why is drinking enough water important?",
//     answer: "Water helps regulate body temperature, supports digestion, improves concentration, and keeps the body hydrated."
//   },
//   {
//     id: 2,
//     question: "How can I improve my time management?",
//     answer: "Set clear priorities, create a daily schedule, avoid distractions, and break large tasks into smaller goals."
//   },
//   {
//     id: 3,
//     question: "Is reading books better than watching videos?",
//     answer: "Both have benefits. Reading improves focus and imagination, while videos can make complex topics easier to understand."
//   },
//   {
//     id: 4,
//     question: "How many hours of sleep do adults need?",
//     answer: "Most adults need around 7 to 9 hours of sleep every night for good physical and mental health."
//   },
//   {
//     id: 5,
//     question: "Why is regular exercise important?",
//     answer: "Regular exercise improves fitness, strengthens muscles, supports heart health, and can improve mood."
//   },
//   {
//     id: 6,
//     question: "Can learning a new skill change your career?",
//     answer: "Yes. Learning relevant skills can open new opportunities, improve your confidence, and help you grow professionally."
//   },
//   {
//     id: 7,
//     question: "Why should we save money?",
//     answer: "Saving money helps prepare for emergencies, achieve future goals, and build financial security."
//   },
//   {
//     id: 8,
//     question: "Does travelling help you learn new things?",
//     answer: "Yes. Travelling exposes you to different cultures, people, traditions, and experiences."
//   }
// ];

//   const handleClick = (index) => {
//     if (openIndex === index) {
//       setOpenIndex(null);
//     } else {
//       setOpenIndex(index);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
//         <div className="flex flex-col gap-4">
//           {faqs.map((item, index) => (
//             <FAQItem key={item.id} item={item} isOpen={openIndex === index} handleClick={() => handleClick(index)}/>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


















// 10. Mini Shopping Cart
// Create a mini shopping cart interface with at least 5 products. Each product should have a name, price, and Add to Cart button. When the button is clicked, update the cart item count and display the total price of the added products.
// Use components, props, lists, event handling, and `useState`.



import { useState } from "react";
import ShopItem from "./components/ShopItem";
import CartSummary from "./components/CartSummary";

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Smart Television",
      price: 24999,
      image: "/src/assets/Smart-TV.jpg",
    },
    {
      id: 2,
      name: "Study Table",
      price: 3499,
      image: "/src/assets/study-table.jpg",
    },
    {
      id: 3,
      name: "UNO Card Game",
      price: 199,
      image: "/src/assets/UNO.jpg",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 2499,
      image: "/src/assets/Watch.jpg",
    },
    {
      id: 5,
      name: "Headphones",
      price: 2499,
      image: "/src/assets/Headphones.avif",
    },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className="bg-[#faf7f2]">
      <div className="px-[13%] py-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-amber-700 mb-10">Shopping Cart</h1>
        <div className="mb-12">
          <CartSummary cartCount={cart.length} totalPrice={totalPrice}/>
        </div>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Our Products</h2>
        <div className="grid grid-cols-3 gap-7">
          {products.map((product) => (
            <ShopItem key={product.id} product={product} handleAddToCart={() => handleAddToCart(product)}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

