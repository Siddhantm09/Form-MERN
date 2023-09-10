import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  //Fetch all users
  useEffect(() => {
    const showAllUsers = async () => {
      const allUsers = await axios.get("http://localhost:3001");
      setUsers(allUsers?.data);
      console.log(allUsers.data);
    };
    showAllUsers();
  }, []);

  //delete a user
  const handleDelete = async (id) => {
    console.log(id);
    window.location.reload(true);
    await axios.delete("http://localhost:3001/deleteUser/" + id);
  };

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
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
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
