import axios from 'axios';
// import from child component...
import FeedItem from './FeedItem';

// // renders all to-do items upon initial render of page
// useEffect(() => {
//   axios.get()
// })
const tasks = [
  {item: 'feed the bird'},
  {item: 'clean the toilet'},
  {item: 'learn how to use flexbox'},
  {item: 'pull an all nighter to finish tech talk'},
  {item: 'stare into the void for at least 30 minutes'},
]

const Feed = () => {
  return (
    <div className="feed">
      {/* <h1>Feed</h1> */}
      {tasks.map((task, index) => {
        return <FeedItem key = {`feedItem${index}`} id= {index}/>
      })}
    </div>
  );
};

export default Feed;
