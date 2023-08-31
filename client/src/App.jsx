import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserData from "./components/UserData";
import CreateUserData from "./components/CreateUserData";
import UpdateUserData from "./components/UpdateUserData";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={<UserData />}></Route>
        <Route path="/" Component={<CreateUserData />}></Route>
        <Route path="/" Component={<UpdateUserData />}></Route>
      </Routes>
    </div>
  );
}

export default App;
