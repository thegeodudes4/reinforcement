

const FeedItem = ({id}) => {

  const deleteTask = () => {
    console.log('event: ', event);
    console.log(parseInt(event.path[1].id))
  //   const taskId = parseInt(event.path[1].id);
  //   fetch(`/api/${taskId}`, {
  //     method: 'DELETE',
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then((res) => res.json())
  //     .then((task) => {
  //       console.log('deleted task: ', task); // prints dbEntry that was deleted
  //       const deletedTask = document.getElementById(taskId);
  //       deletedTask.remove(); // removes task from DOM
  //     });
  };

  const editTask = () => {
    console.log('you are editing task')
  };

  const completeTask = () => {
    console.log('you completed task')
  };

  return (
    <div className="feedItem" id={id}>
      <h1>Feed Item</h1>
      <button type='button' className='deleteTaskButton' onClick={deleteTask}>X</button>
      <button type='button' className='editTaskButton' onClick={editTask}>EDIT</button>
      <button type='button' className='completedTaskButton' onClick={completeTask}>COMPLETED</button>
    </div>
  );
};

export default FeedItem;
