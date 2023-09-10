import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateUserData = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/getUser/" + id).then((result) => {
      console.log(result);
      setName(result.data.name);
      setEmail(result.data.email);
      setAge(result.data.age);
    }, []);
    // const showAllUsers = async () => {
    //   const user = await axios.get("http://localhost:3001/getUser/" + id); //to display as placeholders
    //   setName(user.data.name);
    //   setEmail(user.data.email);
    //   setAge(user.data.age);
    // };
    // showAllUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      "http://localhost:3001/updateUser/" + id,
      {
        name,
        email,
        age,
      },
      navigate("/")
    );
  };
  return (
    <div>
      <h2>Update</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
        />
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateUserData;
