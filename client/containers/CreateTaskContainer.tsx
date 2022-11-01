
// import from child component...
import CreateTaskModal from '../components/CreateTaskModal';

const CreateTaskContainer = () => {
  return (
    <div className="createTaskContainer">
    <h1>Create Task Container</h1>
      <CreateTaskModal />
    </div>
  );
};

export default CreateTaskContainer;
