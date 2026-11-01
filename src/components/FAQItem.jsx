// Q9. FAQ Accordion
// Create an FAQ section containing at least 5 questions and answers. When a user clicks a question, its answer should appear. Clicking the same question again should hide the answer. Use reusable components, props, event handlers, and state.


const FAQItem = ({ item, isOpen, handleClick }) => {
  return (
    <div className="bg-white border rounded-lg p-4">
      <div onClick={handleClick} className="flex justify-between items-center cursor-pointer">
        <h2 className="font-semibold text-lg">{item.question}</h2>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <p className="text-gray-600 mt-3">{item.answer}</p>
      )}
    </div>
  );
};

export default FAQItem;