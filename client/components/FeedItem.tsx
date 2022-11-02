

const FeedItem = () => {

  const deleteTask = () => {
    console.log('you deleted task')
  };

  const editTask = () => {
    console.log('you are editing task')
  };

  const completeTask = () => {
    console.log('you completed task')
  };

  return (
    <div className="feedItem">
      <h1>Feed Item</h1>
      <button type='button' className='deleteTaskButton' onClick={deleteTask}>X</button>
      <button type='button' className='editTaskButton' onClick={editTask}>EDIT</button>
      <button type='button' className='completedTaskButton' onClick={completeTask}>COMPLETED</button>
    </div>
  );
};

export default FeedItem;
