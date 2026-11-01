// Q5. Pass or Fail Result
// Create a `ResultCard` component that accepts a student's name and marks through props. 
// Display “Pass” if marks are 40 or above; otherwise, display “Fail”. Show results for at least 5 students.


const ResultCard = ({name, marks}) => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md border">
        <h1 className="text-xl font-bold mb-2">{name}</h1>
        <h2 className="text-gray-600 mb-2">Marks: {marks}</h2>
        <p className="font-bold">
            Result: {marks >= 40 ? "Pass" : "Fail" }
        </p>
    </div>
  )
}

export default ResultCard
