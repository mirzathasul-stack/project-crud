import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProjectView() {
  const { id } = useParams();
  const nav = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`/${id}`)
      .then(r => setProject(r.data))
      .catch(() => alert('Project not found'));
  }, [id]);

  if (!project) return <div style={{padding: 20}}>Loading...</div>;

  const fieldStyle = {marginBottom: 16};
  const labelStyle = {fontWeight: 500, color: '#666', fontSize: 13, marginBottom: 4};
  const valueStyle = {fontSize: 15, color: '#333'};

  return (
    <div style={{padding: 20, background: '#f5f5f5', minHeight: 'calc(100vh - 60px)'}}>
      <div style={{color: '#1976d2', fontSize: 14, marginBottom: 20}}>
        Home / ProjectView / {id}
      </div>

      <div style={{background: '#fff', borderRadius: 4, boxShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
        <div style={{padding: '16px 20px', borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span style={{fontWeight: 500, fontSize: 16}}>Project Details - View</span>
          <button onClick={() => nav('/projects')} style={{padding: '8px 20px', background: '#333', color: '#fff', border: 0, borderRadius: 4, cursor: 'pointer'}}>Back to List</button>
        </div>
        
        <div style={{padding: 20, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
          <div style={fieldStyle}>
            <div style={labelStyle}>Title</div>
            <div style={valueStyle}>{project.title || '-'}</div>
          </div>
          <div style={fieldStyle}>
            <div style={labelStyle}>Category</div>
            <div style={valueStyle}>{project.category || '-'}</div>
          </div>
          <div style={fieldStyle}>
            <div style={labelStyle}>Status</div>
            <div style={valueStyle}>{project.status || '-'}</div>
          </div>
          <div style={fieldStyle}>
            <div style={labelStyle}>Company</div>
            <div style={valueStyle}>{project.company || '-'}</div>
          </div>
          <div style={fieldStyle}>
            <div style={labelStyle}>Contact</div>
            <div style={valueStyle}>{project.contact || '-'}</div>
          </div>
          <div style={fieldStyle}>
            <div style={labelStyle}>Start Date</div>
            <div style={valueStyle}>{project.startDate || '-'}</div>
          </div>
          <div style={fieldStyle}>
            <div style={labelStyle}>Estimated Finish Date</div>
            <div style={valueStyle}>{project.estimatedFinishDate || '-'}</div>
          </div>
          <div style={fieldStyle}>
            <div style={labelStyle}>Description</div>
            <div style={valueStyle}>{project.description || '-'}</div>
          </div>
          <div style={fieldStyle}>
            <div style={labelStyle}>Project Manager</div>
            <div style={valueStyle}>{project.projectManager || '-'}</div>
          </div>
          <div style={fieldStyle}>
            <div style={labelStyle}>General</div>
            <div style={valueStyle}>{project.general || '-'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}