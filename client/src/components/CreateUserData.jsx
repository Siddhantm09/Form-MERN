import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUserData = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [image, setImage] = useState();

  const navigate = useNavigate();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === FileReader.DONE) {
        setImage(fileReader.result);
      }
    };
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:3001/createUser",
      {
        name,
        email,
        age,
        image,
      },
      navigate("/")
    );
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
        <img src={image} />
        <input
          type="file"
          // value={image}
          accept="image/*"
          onChange={handleImageChange}
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

export default CreateUserData;
