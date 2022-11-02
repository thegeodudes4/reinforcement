import GoogleOAuth from "./GoogleOAuth";
import { getTodos } from "../api/todos"


const AccountWindow = () => {
  return (
    <div className="accountWindow">
      {/* <h1>Account Window</h1> */}
      <GoogleOAuth />
      {/* <button onClick={()=>getTodos(1)}>Get Todos</button> */}
    </div>
  );
};

export default AccountWindow;
