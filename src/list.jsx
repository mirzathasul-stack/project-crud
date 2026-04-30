import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

function ProjectList() {
  const navigate = useNavigate();
  const [searchGeneral, setSearchGeneral] = useState('Pyramid');
  const [statusFilter, setStatusFilter] = useState('Completed');
  
  const [projects] = useState([]); 

  const filteredProjects = projects.filter(p => {
    const matchSearch = searchGeneral === '' || p.title.toLowerCase().includes(searchGeneral.toLowerCase());
    const matchStatus = statusFilter === '' || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <Layout>
      <div style={{ marginBottom: '15px', color: '#6c757d', fontSize: '14px' }}>
        <span style={{ color: '#3366ff', cursor: 'pointer' }}>Home</span> / Project
      </div>

      <div style={{ background: 'white', padding: '20px', borderRadius: '4px', marginBottom: '20px', display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Search General</label>
          <select value={searchGeneral} onChange={(e) => setSearchGeneral(e.target.value)} style={{ padding: '8px 12px', border: '1px solid #ced4da', borderRadius: '4px', minWidth: '180px' }}>
            <option value="">Select</option>
            <option value="EMS">EMS</option>
            <option value="Pyramid">Pyramid</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Select Status</label>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ padding: '8px 12px', border: '1px solid #ced4da', borderRadius: '4px', minWidth: '180px' }}>
            <option value="">Select</option>
            <option value="WIP">WIP</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button style={{ background: '#3366ff', color: 'white', border: 'none', padding: '8px 24px', borderRadius: '4px', cursor: 'pointer' }}>Go</button>
      </div>

      <div style={{ background: 'white', padding: '20px', borderRadius: '4px', position: 'relative', minHeight: '400px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #dee2e6' }}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Project List</h3>
          <button onClick={() => navigate('/project/new')} style={{ background: '#3366ff', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '4px', cursor: 'pointer' }}>Add New</button>
        </div>


        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dee2e6' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>Id</th>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>Edit</th>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>Code</th>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>Title</th>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>Company</th>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>Contact</th>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>Category</th>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.length === 0? (
              <tr>
                <td colSpan="7" style={{ padding: '40px', textAlign: 'center', color: '#6c757d' }}>No data found</td>
              </tr>
            ) : (
              filteredProjects.map((p, idx) => (
                <tr key={p.id} style={{ background: idx % 2 === 0? '#ffffff' : '#f8f9fa' }}>
                  <td style={{ padding: '12px', fontSize: '14px' }}>
                    <span onClick={() => navigate(`/project/edit/${p.id}`)} style={{ cursor: 'pointer', color: '#3366ff', fontSize: '18px' }}>✏️</span>
                  </td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{p.code}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{p.title}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{p.company}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{p.contact}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{p.category}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{p.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default ProjectList;