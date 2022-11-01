// import from child component...
import CreateHouseholdModal from '../components/CreateHouseholdModal';

const CreateHouseholdContainer = () => {
  return (
    <div className="createHouseholdContainer">
      <button>Create Household Container</button>
      <CreateHouseholdModal />
    </div>
  );
};

export default CreateHouseholdContainer;
