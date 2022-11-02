

const CreateTaskModal = (addButton) => {

  return (
    <div className="createTaskModal">
      <h1>Create Task Modal</h1>
      <form>
        <label>
          Assignee(s):
          <select>
            <option value='roommate 1'>roommate 1</option>
            <option value='roommate 2'>roommate 2</option>
            <option value='roommate 3'>roommate 3</option>
            <option value='roommate 4'>roommate 4</option>
          </select>
        </label>
        <label>
          To-Do
          <input type='text'></input>
        </label>
        <input type='submit' value='Submit'/>
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default CreateTaskModal;
