import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [searchGeneral, setSearchGeneral] = useState('');
  const [selectStatus, setSelectStatus] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    axios.get(`https://69f34385bd2396bf530fa39b.mockapi.io/projects`)
      .then(r => setProjects(r.data));
  }, []);

  const handleGo = () => {
    nav(`/project/results?general=${searchGeneral}&status=${selectStatus}`);
  };

  const td = {padding: '12px 16px', fontSize: 14, borderBottom: '1px solid #e0e0e0'};
  const th = {padding: '12px 16px', textAlign: 'left', fontWeight: 500, fontSize: 14, borderBottom: '1px solid #e0e0e0', background: '#fafafa'};

  return (
    <div style={{width: '100%'}}>  {/* MUKKIYAM: width 100% */}
      <div style={{color: '#666', fontSize: 14, marginBottom: 16}}>Home / Project</div>
      
      {/* Search Filter - Full Width */}
      <div style={{background: '#fff', borderRadius: 4, padding: 16, marginBottom: 16, boxShadow: '0 1px 2px rgba(0,0,0,0.1)', width: '100%', boxSizing: 'border-box'}}>
        <div style={{display: 'flex', gap: 16, alignItems: 'flex-end', width: '100%'}}>
          <div style={{flex: 1}}>
            <label style={{display: 'block', fontSize: 14, marginBottom: 8, color: '#333'}}>Search General</label>
            <select 
              value={searchGeneral}
              onChange={e => setSearchGeneral(e.target.value)}
              style={{width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: 4, fontSize: 14, boxSizing: 'border-box'}}
            >
              <option value="">Select</option>
              <option value="Web">Web</option>
              <option value="Mobile">Mobile</option>
              <option value="Desktop">Desktop</option>
            </select>
          </div>
          
          <div style={{flex: 1}}>
            <label style={{display: 'block', fontSize: 14, marginBottom: 8, color: '#333'}}>Select Status</label>
            <select 
              value={selectStatus}
              onChange={e => setSelectStatus(e.target.value)}
              style={{width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: 4, fontSize: 14, boxSizing: 'border-box'}}
            >
              <option value="">Select</option>
              <option value="WIP">WIP</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
          
          <button 
            onClick={handleGo}
            style={{padding: '9px 24px', background: '#1976d2', color: '#fff', border: 0, borderRadius: 4, cursor: 'pointer', fontSize: 14, fontWeight: 500, flexShrink: 0}}
          >
            Go
          </button>
        </div>
      </div>

      {/* Project List Table - Full Width */}
      <div style={{background: '#fff', borderRadius: 4, overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', width: '100%'}}>
        <div style={{padding: '16px 20px', borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span style={{fontWeight: 500, fontSize: 16}}>Project List</span>
          <button 
            onClick={() => nav('/project/new')}
            style={{padding: '8px 20px', background: '#1976d2', color: '#fff', border: 0, borderRadius: 4, cursor: 'pointer', fontSize: 14}}
          >
            Add New
          </button>
        </div>

        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', minWidth: 800}}>
            <thead>
              <tr>
                <th style={{...th, width: 60}}>ID</th>
                <th style={{...th, width: 60}}>Edit</th>
                <th style={th}>Code</th>
                <th style={th}>Title</th>
                <th style={th}>Company</th>
                <th style={th}>Contact</th>
                <th style={th}>Category</th>
                <th style={th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={p.id}>
                  <td style={{...td, textAlign: 'center'}}>{i + 1}</td>
                  <td style={{...td, textAlign: 'center'}}>
                    <span style={{color: '#1976d2', cursor: 'pointer', fontSize: 18}} onClick={() => nav(`/project/edit/${p.id}`)}>
                      ✏️
                    </span>
                  </td>
                  <td style={td}>{p.code || '-'}</td>
                  <td style={td}>{p.title || '-'}</td>
                  <td style={td}>{p.company || '-'}</td>
                  <td style={td}>{p.contact || '-'}</td>
                  <td style={td}>{p.category || '-'}</td>
                  <td style={td}>{p.status || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}