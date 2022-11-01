
 // import from child components...
import HeaderContainer from './HeaderContainer';
import FeedContainer from './FeedContainer';
import CreateTaskContainer from './CreateTaskContainer';
import HouseholdContainer from './HouseholdContainer';
import CreateHouseholdContainer from './CreateHouseholdContainer';

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <h1>Main Container</h1>
        <CreateHouseholdContainer />
        <CreateTaskContainer />
        <HeaderContainer />
        <FeedContainer />
        <HouseholdContainer />
    </div>
  );
};

export default MainContainer;














