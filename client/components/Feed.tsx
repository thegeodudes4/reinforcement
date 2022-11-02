import axios from 'axios';
// import from child component...
import FeedItem from './FeedItem';

// // renders all to-do items upon initial render of page
// useEffect(() => {
//   axios.get()
// })
const tasks = [
  {item: 'first to do'},
  {item: 'second to do'},
  {item: 'third to do'},
  {item: 'fourth to do'},
  {item: 'fifth to do'},
]

const Feed = () => {
  return (
    <div className="feed">
      <h1>Feed</h1>
      {tasks.map((task, index) => {
        return <FeedItem key = {`feedItem${index}`}/>
      })}

    </div>
  );
};

export default Feed;
