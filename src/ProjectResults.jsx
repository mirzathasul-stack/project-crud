import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProjectResults() {
  const [searchParams] = useSearchParams();
  const [projects, setProjects] = useState([]);
  const nav = useNavigate();

  const general = searchParams.get('general') || '';
  const status = searchParams.get('status') || '';

  useEffect(() => {
    let url = `https://69f34385bd2396bf530fa39b.mockapi.io/projects?`;
    if (general) url += `category=${general}&`;
    if (status) url += `status=${status}&`;
    
    axios.get(url).then(r => setProjects(r.data));
  }, [general, status]);

  const td = {padding: '12px 16px', fontSize: 14, borderBottom: '1px solid #e0e0e0'};
  const th = {padding: '12px 16px', textAlign: 'left', fontWeight: 500, fontSize: 14, borderBottom: '1px solid #e0e0e0', background: '#fafafa'};

  return (
    <div style={{width: '100%'}}> {/* MUKKIYAM: width 100% */}
      <div style={{color: '#666', fontSize: 14, marginBottom: 16}}>
        Home / Project / Search Results
      </div>
      
      <div style={{background: '#fff', borderRadius: 4, overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', width: '100%'}}>
        <div style={{padding: '16px 20px', borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span style={{fontWeight: 500, fontSize: 16}}>
            Search Results {general && `- ${general}`} {status && `- ${status}`}
          </span>
          <button 
            onClick={() => nav('/project')}
            style={{padding: '8px 20px', background: '#424242', color: '#fff', border: 0, borderRadius: 4, cursor: 'pointer', fontSize: 14}}
          >
            Back to List
          </button>
        </div>

        <div style={{overflowX: 'auto', width: '100%'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', minWidth: 600}}>
            <thead>
              <tr>
                <th style={{...th, width: 80}}>ID</th>
                <th style={th}>Title</th>
                <th style={th}>Company</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={p.id}>
                  <td style={{...td, textAlign: 'center'}}>{i + 1}</td>
                  <td style={td}>{p.title}</td>
                  <td style={td}>{p.company || '-'}</td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr><td colSpan={3} style={{...td, textAlign: 'center', color: '#999', padding: 40}}>No results found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}