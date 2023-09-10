import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const showAllUsers = async () => {
      const allUsers = await axios.get("http://localhost:3001");
      setUsers(allUsers?.data);
      console.log(allUsers.data);
    };
    showAllUsers();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/create")}>Add</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => {
            return (
              <tr key={id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <img src={user.image} style={{ width: "50px" }} />
                </td>
                <td>
                  <button onClick={() => navigate(`/update/${user._id}`)}>
                    Update
                  </button>
                  <button onClick={handleDelete}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
