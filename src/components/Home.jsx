// Q2.Create separate components named `Navbar`, `Home`, and `Footer` in different files. 
// Export and import them into `App.jsx` to display a complete webpage.


const Home = () => {
  return (
    <div className="h-[602px] bg-gray-100 p-8 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-amber-700 mb-10">Welcome to my Website</h2>
        <p className="px-10 text-md font-medium mb-6">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet, voluptates hic, voluptate iure ducimus error asperiores eaque
            architecto enim blanditiis et, dolor maxime consequuntur harum tempore dolorem 
            repellat exercitationem recusandae sapiente? Quae numquam veritatis nisi commodi
            similique pariatur animi excepturi harum amet. Repudiandae sint fugit ex facilis,
            fuga voluptatem eius?
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</button>
    </div>
  )
}

export default Home

