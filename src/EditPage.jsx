import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditPage() {
  const nav = useNavigate();
  const [title, setTitle] = useState("EMS Website");

  const reset = () => setTitle("");

  const submit = () => {
    alert("Saved!");
    nav("/"); // back to list
  };

  return (
    <div>
      <div className="card">
        <h3>Edit Project</h3>

        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <div className="btn-group">
          {/* Cancel → Reset */}
          <button className="cancel" onClick={reset}>
            Cancel
          </button>

          {/* Submit → Save + List */}
          <button className="primary" onClick={submit}>
            Submit
          </button>

          {/* Back */}
          <button className="secondary" onClick={() => nav("/")}>
            Back to List
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="active">Analytics</button>
        <button>Budget</button>
        <button>Milestones</button>
        <button>Team</button>
        <button>Task</button>
        <button>Timesheet</button>
      </div>

      {/* Analytics */}
      <div className="analytics">
        <div className="box">Employee Statistics</div>
        <div className="box">Employee Due</div>
      </div>
    </div>
  );
}