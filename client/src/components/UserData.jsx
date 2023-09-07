import { useNavigate } from "react-router-dom";

const UserData = () => {
  const handleDelete = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => navigate("/create")}>Add</button>
      <button onClick={() => navigate("/update")}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserData;
