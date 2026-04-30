import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DetailsPage() {
  const nav = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (id && id !== 'new') {
      axios.get(`https://69f34385bd2396bf530fa39b.mockapi.io/projects/${id}`).then(r => setTitle(r.data.title));
    }
  }, [id]);

  const save = () => {
    if (!title) return alert('Title is required');
    const data = { title };
    const api = id && id !== 'new'
      ? axios.put(`https://69f34385bd2396bf530fa39b.mockapi.io/projects/${id}`, data)
      : axios.post(`https://69f34385bd2396bf530fa39b.mockapi.io/projects`, data);
    api.then(() => nav('/project'));
  };

  return (
  <>
    <div style={{padding: 20, background: '#f0f8ff', minHeight: 'calc(100vh - 60px)'}}>
      <div style={{color: '#1976d2', fontSize: 14, marginBottom: 20}}>Home / ProjectDetails</div>

      <div style={{background: '#fff', borderRadius: 4, maxWidth: 500, boxShadow: '0 1px 3px rgba(0,0,0,0.12)'}}>
        <div style={{fontSize: 18, fontWeight: 500, padding: '16px 20px', borderBottom: '1px solid #e0e0e0'}}>
          Key Details
        </div>
        
        <div style={{padding: 20}}>
          <div style={{marginBottom: 20}}>
            <label style={{display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 500}}>
              Title <span style={{color: 'red'}}>*</span>
            </label>
            <input 
              style={{width: '100%', padding: '8px 12px', border: '1px solid #d9d9d9', borderRadius: 4, fontSize: 14, boxSizing: 'border-box'}}
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div style={{display: 'flex', gap: 10}}>
            <button 
              onClick={save}
              style={{padding: '8px 20px', background: '#1976d2', color: '#fff', border: 0, borderRadius: 4, cursor: 'pointer', fontSize: 14}}
            >
              Save & Continue
            </button>
            <button 
              onClick={() => nav('/project')}
              style={{padding: '8px 20px', background: '#424242', color: '#fff', border: 0, borderRadius: 4, cursor: 'pointer', fontSize: 14}}
            >
              Go to List
            </button>
          </div>
        </div>
      </div>
    </div>
  
  </>
  );
}