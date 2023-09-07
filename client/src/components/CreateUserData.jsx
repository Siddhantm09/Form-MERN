// import { useState } from "react";

const CreateUserData = () => {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [age, setAge] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          // onChange={(e) => {
          //   setName(e.target.value);
          // }}
        />
        <input
          type="text"
          placeholder="email"
          // onChange={(e) => {
          //   setEmail(e.target.value);
          // }}
        />
        <input
          type="number"
          placeholder="age"
          // onChange={(e) => {
          //   setAge(e.target.value);
          // }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CreateUserData;
