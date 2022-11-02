
// import from child component...
import Feed from '../components/Feed';

const FeedContainer = () => {
  return (
    <div className="feedContainer">
      <h1>To-Do</h1>
      <Feed />
    </div>
  );
};

export default FeedContainer;
