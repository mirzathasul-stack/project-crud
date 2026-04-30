import React, { useState } from 'react';
import './ProjectEdit.css';

function ProjectEdit() {
  const [formData, setFormData] = useState({
    title: 'EMS Website',
    category: '',
    status: 'WIP',
    company: 'EMS',
    contact: '',
    startDate: '',
    estimatedFinishDate: '',
    description: '',
    projectManager: '',
    general: 'No'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Save clicked', formData);
  };

  const handleApply = () => {
    console.log('Apply clicked', formData);
  };

  return (
    <div className="project-edit-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span className="breadcrumb-link">Home</span> / <span>ProjectEdit</span> / <span>62</span>
      </div>

      {/* Top Button Section */}
      <div className="action-bar">
        <div></div>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn btn-primary" onClick={handleApply}>Apply</button>
          <button className="btn btn-dark">Back to List</button>
        </div>
      </div>

      {/* Project Details Card */}
      <div className="details-card">
        <div className="card-header">
          <h3>Project Details</h3>
          <div className="meta-info">
            <p>Creation: </p>
            <p>Modified: </p>
          </div>
        </div>

        <div className="card-body">
          <div className="form-row">
            <div className="form-group">
              <label>Title<span className="required">*</span></label>
              <input 
                type="text" 
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Category<span className="required">*</span></label>
              <select 
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Please Select</option>
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
              </select>
            </div>
            <div className="form-group">
              <label>Status</label>
              <select 
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-control"
              >
                <option value="WIP">WIP</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div className="form-group">
              <label>Company</label>
              <select 
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-control"
              >
                <option value="EMS">EMS</option>
                <option value="UT">UT</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Contact</label>
              <select 
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Please Select</option>
              </select>
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input 
                type="date" 
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Estimated Finish Date</label>
              <input 
                type="date" 
                name="estimatedFinishDate"
                value={formData.estimatedFinishDate}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input 
                type="text" 
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Project Manager</label>
              <input 
                type="text" 
                name="projectManager"
                value={formData.projectManager}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>General</label>
              <div className="radio-group">
                <label>
                  <input 
                    type="radio" 
                    name="general"
                    value="Yes"
                    checked={formData.general === 'Yes'}
                    onChange={handleChange}
                  /> Yes
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="general"
                    value="No"
                    checked={formData.general === 'No'}
                    onChange={handleChange}
                  /> No
                </label>
              </div>
            </div>
            <div className="form-group"></div>
            <div className="form-group"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectEdit;