import { useEffect, useState } from 'react';
import { addHousehold } from 'client/state/reducers/taskReducer'


const CreateHouseholdModal = () => {

  const [isHouseholdSubmitted, setIsHouseholdSubmitted] = useState(false);
  const [householdModal, setHouseholdModal] = useState(true);
  const [memberArr, setMemberArr] = useState([]);

  const memberElement: JSX.Element = (
    <div className="input-container">
    <label>Member Name </label>
    <input type="text" name="member" required />
  </div>
  );

  const handleSubmit = async (event: Event) :Promise<void> => {

      //Prevent page reload
      event.preventDefault();
  
      const { household, member } = document.forms[0];
  
      // document.forms[0] grabs the value of whatever text is in the household and member input fields
  
  
      const userData = null;
      //await createHousehold(household.value, member.value)
  
  
      // Compare user info
      if (userData) {
        console.log("new household created!")
        setIsHouseholdSubmitted(true);
        setHouseholdModal(false);
        return;
      }

      else {
        renderErrorMessage();
        // this will display an error message if not logged in.
      }
    };

  const renderErrorMessage = () => {
      <div className="error">Please log in to create household.</div>
}


  const addMember = () => {
    console.log("What is memberElement?", memberElement);
    console.log("What is typeof memberElement?", typeof memberElement);
    setMemberArr(memberArr.push(memberElement));
  };

  return (
    <div className="createHouseholdModal">
      <h1>Create Household Modal</h1>
      <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Household Name </label>
          <input type="text" name="household"  required />
        </div>
        {memberElement}
        {memberArr}
        <div className="button-container">
          <button onClick={addMember}>Add Member</button>
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        {renderErrorMessage()}
      </form>
    </div>
    </div>
  );
};

export default CreateHouseholdModal;
