import { useState } from 'react';
// import from child component...
import CreateTaskModal from '../components/CreateTaskModal';

const CreateTaskContainer = () => {
  const [addTaskMode, setAddTaskMode] = useState(false);

  const addButton = () => {
    if (!addTaskMode) {
      console.log('adding task')
      setAddTaskMode(true);
    } else {
      console.log('cancelled adding task')
      setAddTaskMode(false);
    }
  }

  return (
    <div className="createTaskContainer">
      <h1>Create Task Container</h1>
      <button type='button' className='addTaskButton' onClick={addButton}>Add task</button>
      {addTaskMode ? (
        <CreateTaskModal addButton={addButton}/>
      ) : null}
    </div>
  );
};

export default CreateTaskContainer;
