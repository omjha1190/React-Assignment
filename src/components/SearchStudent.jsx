// Q7. Searchable Student List
// Create a student list containing at least 8 names. Add a search input that filters students by name as the user types. Use state to manage the search value and `.map()` to display the filtered list.


const SearchStudent = ({ search, setSearch }) => {
  return (
    <input type="text" placeholder="Search student..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full border px-3 py-2 rounded mb-4"/>
  );
};

export default SearchStudent;
