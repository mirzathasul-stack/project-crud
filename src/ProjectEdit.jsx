import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProjectEdit() {
  const[tab, setTab] = useState('analytics')
  const { id } = useParams();
  const nav = useNavigate();
  const [isNew, setIsNew] = useState(true);
  const [form, setForm] = useState({
    title: '',
    category: '',
    status: 'WIP',
    company: '',
    contact: '',
    startDate: '',
    estimatedFinishDate: '',
    description: '',
    projectManager: '',
    general: 'No',
    code: '',
    creationDate: '',
    modifiedDate: '',
    createdBy: '',
    modifiedBy: ''
  });

  useEffect(() => {
    if (id && id !== 'new') {
      setIsNew(false);
      axios.get(`https://69f34385bd2396bf530fa39b.mockapi.io/projects/${id}`)
       .then(r => setForm(r.data))
       .catch(() => alert('Project not found'));
    }
  }, [id]);

  const handleChange = (field, value) => {
    setForm(prev => ({...prev, [field]: value}));
  };

  const handleSave = async () => {
    if (!form.title.trim()) return alert('Title is required');
    if (!form.category) return alert('Category is required');
    
    const payload = {
      ...form,
      modifiedDate: new Date().toLocaleString(),
      modifiedBy: 'CurrentUser'
    };

    try {
      if (!isNew) {
        await axios.put(`https://69f34385bd2396bf530fa39b.mockapi.io/projects/${id}`, payload);
        alert('Saved successfully');
      } else {
        const res = await axios.post(`https://69f34385bd2396bf530fa39b.mockapi.io/projects`, {
          ...payload,
          creationDate: new Date().toLocaleString(),
          createdBy: 'CurrentUser'
        });
        nav(`/project/edit/${res.data.id}`, { replace: true });
        setIsNew(false);
        alert('Created successfully');
      }
    } catch (err) {
      alert('Save failed');
    }
  };

  const handleApply = async () => {
    await handleSave();
  
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #d9d9d9',
    borderRadius: 4,
    fontSize: 14,
    boxSizing: 'border-box',
    background: '#fff'
  };

  const labelStyle = {display: 'block', marginBottom: 8, fontSize: 14, color: '#333'};
  const fieldCol = {flex: 1, minWidth: 200};

  return (
    <div style={{padding: 20, width: '100%', boxSizing: 'border-box', background: '#f5f5f5', minHeight: 'calc(100vh - 60px)'}}>
      {/* BREADCRUMB */}
      <div style={{color: '#1976d2', fontSize: 14, marginBottom: 20}}>
        Home / ProjectEdit / {isNew ? 'New' : id}
      </div>

      {/* TOP BUTTONS CARD */}
      <div style={{background: '#fff', padding: 16, borderRadius: 4, marginBottom: 20, boxShadow: '0 1px 2px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'flex-end', gap: 10}}>
        <button onClick={handleSave} style={{padding: '8px 20px', background: '#1976d2', color: '#fff', border: 0, borderRadius: 4, cursor: 'pointer', fontSize: 14}}>Save</button>
        <button onClick={handleApply} style={{padding: '8px 20px', background: '#1976d2', color: '#fff', border: 0, borderRadius: 4, cursor: 'pointer', fontSize: 14}}>Apply</button>
        <button onClick={() => nav('/project')} style={{padding: '8px 20px', background: '#333', color: '#fff', border: 0, borderRadius: 4, cursor: 'pointer', fontSize: 14}}>Back to List</button>
      </div>

      {/* PROJECT DETAILS CARD */}
      <div style={{background: '#fff', borderRadius: 4, boxShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
        <div style={{padding: '16px 20px', borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span style={{fontWeight: 500, fontSize: 16}}>Project Details</span>
          {!isNew && (
            <div style={{fontSize: 13, color: '#666', textAlign: 'right'}}>
              <div>Creation: {form.createdBy || 'User'} {form.creationDate}</div>
              <div>Modified: {form.modifiedBy || 'User'} {form.modifiedDate}</div>
            </div>
          )}
        </div>
        
        <div style={{padding: 20}}>
          {/* ROW 1 */}
          <div style={{display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap'}}>
            <div style={fieldCol}>
              <label style={labelStyle}>Title <span style={{color: 'red'}}>*</span></label>
              <input type="text" value={form.title} onChange={e => handleChange('title', e.target.value)} style={inputStyle} />
            </div>
            <div style={fieldCol}>
              <label style={labelStyle}>Category <span style={{color: 'red'}}>*</span></label>
              <select value={form.category} onChange={e => handleChange('category', e.target.value)} style={inputStyle}>
                <option value="">Please Select</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Design">Design</option>
              </select>
            </div>
            <div style={fieldCol}>
              <label style={labelStyle}>Status</label>
              <select value={form.status} onChange={e => handleChange('status', e.target.value)} style={inputStyle}>
                <option value="WIP">WIP</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>
            <div style={fieldCol}>
              <label style={labelStyle}>Company</label>
              <select value={form.company} onChange={e => handleChange('company', e.target.value)} style={inputStyle}>
                <option value="">Please Select</option>
                <option value="EMS">EMS Website</option>
                <option value="Pyramid">Pyramid Admin Modules</option>
                <option value="Parent">Parent crm</option>
              </select>
            </div>
          </div>

          {/* ROW 2 */}
          <div style={{display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap'}}>
            <div style={fieldCol}>
              <label style={labelStyle}>Contact</label>
            <input 
  type="text"
  value={form.contact} 
  onChange={e => handleChange('contact', e.target.value)}
  placeholder="Enter contact name"
  style={inputStyle}
/>
            </div>
            <div style={fieldCol}>
              <label style={labelStyle}>Start Date</label>
              <input type="date" value={form.startDate} onChange={e => handleChange('startDate', e.target.value)} style={inputStyle} />
            </div>
            <div style={fieldCol}>
              <label style={labelStyle}>Estimated Finish Date</label>
              <input type="date" value={form.estimatedFinishDate} onChange={e => handleChange('estimatedFinishDate', e.target.value)} style={inputStyle} />
            </div>
            <div style={fieldCol}>
              <label style={labelStyle}>Description</label>
              <input type="text" value={form.description} onChange={e => handleChange('description', e.target.value)} style={inputStyle} />
            </div>
          </div>

          {/* ROW 3 */}
          <div style={{display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap'}}>
            <div style={fieldCol}>
              <label style={labelStyle}>Project Manager</label>
              <input type="text" value={form.projectManager} onChange={e => handleChange('projectManager', e.target.value)} style={inputStyle} />
            </div>
            <div style={fieldCol}>
              <label style={labelStyle}>General</label>
              <div style={{display: 'flex', gap: 20, marginTop: 8}}>
                <label style={{display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer'}}>
                  <input type="radio" checked={form.general === 'Yes'} onChange={() => handleChange('general', 'Yes')} />
                  Yes
                </label>
                <label style={{display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer'}}>
                  <input type="radio" checked={form.general === 'No'} onChange={() => handleChange('general', 'No')} />
                  No
                </label>
              </div>
            </div>

</div>  

{/* Tab start */}
<div className="card" style={{marginTop: '20px'}}>
  <h4>More Details</h4>
  
  {/* Tab Buttons */}
  <div className="tabs">
    {['Analytics','Budget Planning','Milestones','Team','Task','Timesheet','Calendar'].map(t => (
      <button
        key={t}
        className={tab === t.toLowerCase().replace(' ','')? 'active' : ''}
        onClick={() => setTab(t.toLowerCase().replace(' ',''))}
      >
        {t}
      </button>
    ))}
  </div>

  {/* Tab Content */}
  <div style={{padding: '20px', minHeight: '300px'}}>
    {tab === 'analytics' && (
      <div>
        <h5>Employee Statistics</h5>
        <select><option>Select Employee</option></select>
      </div>
    )}
    {tab === 'budgetplanning' && <div>Budget table displays here</div>}
    {tab === 'milestones' && <div>Milestones list displays here</div>}
    {tab === 'team' && <div>Team members displays here</div>}
    {tab === 'task' && <div>Task list displays here</div>}
    {tab === 'timesheet' && <div>Timesheet displays here</div>}
    {tab === 'calendar' && <div>Calendar </div>}
  </div>

            
            <div style={fieldCol}></div>
            <div style={fieldCol}></div>
          </div>
        </div>
      </div>

      
    </div>
  );
}