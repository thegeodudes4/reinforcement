
// import from child component...
import AccountWindow from '../components/AccountWindow';

const HeaderContainer = () => {
  return (
    <div className="headerContainer">
      <h1>Header Container</h1>
      <AccountWindow />
    </div>
  );
};

export default HeaderContainer;
