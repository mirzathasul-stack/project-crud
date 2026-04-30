import { useNavigate } from "react-router-dom";

export default function ListPage() {
  const nav = useNavigate();

  return (
    <div className="page">
      <h2>Project List</h2>

      <button onClick={() => nav("/details")}>+ Add</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>EMS Website</td>
            <td>
              <button onClick={() => nav("/edit")}>✏️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}