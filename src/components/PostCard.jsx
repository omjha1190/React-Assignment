// Q8. Like and Dislike Cards
// Create a reusable `PostCard` component that displays a post title and description. Add Like and Dislike buttons with separate counters for each post. Display at least 3 posts using props and state.

const PostCard = ({ post, handleLike,  handleDislike }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.description}</p>
      <div className="flex gap-4">
        <button onClick={handleLike} className="bg-green-500 text-white px-4 py-2 rounded">👍 Like ({post.likes})</button>
        <button onClick={ handleDislike} className="bg-red-500 text-white px-4 py-2 rounded">👎 Dislike ({post.dislikes})</button>
      </div>
    </div>
  );
};

export default PostCard;
