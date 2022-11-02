import { useState } from 'react';
// import from child component...
import CreateHouseholdModal from '../components/CreateHouseholdModal';

const CreateHouseholdContainer = () => {
  const [householdModal, setHouseholdModal] = useState(false);

  const renderCreateHouseholdModal = () => {
    if (householdModal === false) setHouseholdModal(true);
  }

  if (householdModal === false) {
  return (
    <div className="createHouseholdContainer">
      <h1>Create Household Container</h1>
      <button onClick={renderCreateHouseholdModal}>Create Household</button>
    </div>
  );
  }
  else return (
    <div className="createHouseholdContainer">
      <h1>Create Household Container</h1>
    <CreateHouseholdModal />
    </div>
  )
};

export default CreateHouseholdContainer;
