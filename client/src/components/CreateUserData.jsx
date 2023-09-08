import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUserData = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await axios.post("http://localhost:3001/createUser", {
      name,
      email,
      age,
    });
    navigate("/");
    console.log(user);
  };
  return (
    <div>
      <h2>Create</h2>
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
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CreateUserData;
