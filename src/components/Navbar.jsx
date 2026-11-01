// Q2.Create separate components named `Navbar`, `Home`, and `Footer` in different files. 
// Export and import them into `App.jsx` to display a complete webpage.


const Navbar = () => {
  return (
    <div className="px-10 py-5 flex items-center justify-between bg-slate-900 text-white ">
        <h1 className="text-3xl font-bold">Mywebsite</h1>
        <nav className="flex gap-5">
            <a href="" className="text-lg font-medium hover:text-amber-500">Home</a>
            <a href="" className="text-lg font-medium hover:text-amber-500">About</a>
            <a href="" className="text-lg font-medium hover:text-amber-500">Contact</a>
            <a href="" className="text-lg font-medium hover:text-amber-500">Help</a>
        </nav>
    </div>
  )
}

export default Navbar
