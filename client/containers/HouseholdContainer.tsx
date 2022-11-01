
// import from child component...
import HouseholdList from '../components/HouseholdList';

const HouseholdContainer = () => {
  return (
    <div className="householdContainer">
      <h1>Household Container</h1>
      <HouseholdList />
    </div>
  );
};

export default HouseholdContainer;
