// Q1. Student Profile Cards
//    Create a `StudentCard` component that accepts student name, course, and marks through props.
//     Display at least 4 student cards using the same component.

const StudentCard = ({ name, course, marks }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg">
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{name}</h1>
      <p className="text-gray-700 mb-3">
        Course: <span className="text-amber-600 font-medium">{course}</span>
      </p>
      <p className="text-gray-700">
        Marks: <span className="font-bold text-green-600">{marks}</span>
      </p>
    </div>
  );
};

export default StudentCard;
