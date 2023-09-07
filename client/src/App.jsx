import "./App.css";
import { useState } from "react";
import axios from "axios";
// import { Routes, Route } from "react-router-dom";
// import UserData from "./components/UserData";
// import CreateUserData from "./components/CreateUserData";
// import UpdateUserData from "./components/UpdateUserData";
function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const handleSubmit = (e) => {
    console.log(name, email, age);
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", {
        name: name,
        email: email,
        age: age,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      {/* <Routes>
        <Route path="/" Component={<UserData />}></Route>
        <Route path="/" Component={<CreateUserData />}></Route>
        <Route path="/" Component={<UpdateUserData />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
