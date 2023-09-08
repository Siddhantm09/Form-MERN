import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateUserData from "./components/CreateUserData";
import UpdateUserData from "./components/UpdateUserData";
import UserData from "./components/UserData";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<UserData />} />
        <Route path="/create" element={<CreateUserData />} />
        <Route path="/update/:id" element={<UpdateUserData />} />
      </Routes>
    </div>
  );
}

export default App;
