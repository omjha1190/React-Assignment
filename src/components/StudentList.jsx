// Q7. Searchable Student List
// Create a student list containing at least 8 names. Add a search input that filters students by name as the user types. Use state to manage the search value and `.map()` to display the filtered list.


const StudentList = ({ data }) => {
  return (
    <div>
      {data.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {data.map((student) => (
            <li key={student} className="bg-gray-100 p-3 rounded">{student}</li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-red-500 mt-4">No student found.</p>
      )}
    </div>
  );
};

export default StudentList;
