import React, { useState } from 'react';
import { useNavigate, useLocation , Outlet, Link} from 'react-router-dom';
import './Layout.css';
import utLogo from './utLogo.png';


function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [tenderOpen, setTenderOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <div className="pms-layout">
      {sidebarOpen && (
        <div className="sidebar">
          <div className="logo-section" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '20px 15px', position: 'relative', borderBottom: '1px solid #e5e5e5'
          }}>

 <img 
              src={utLogo} 
              alt="United Technologies" 
              style={{ 
                width: '40px', 
                height: '40px',
                objectFit: 'contain',
                marginBottom: '8px'
              }} 
            />
                  
          </div>

          <ul className="menu-list">
            <li 
              className={location.pathname === '/admin' ? 'active' : ''}
              onClick={() => navigate('/admin')}
            >
              <span>Admin</span>
              <span style={{ fontSize: '14px', color: '#999' }}>&gt;</span>
            </li>

            <li 
              className={location.pathname === '/home' ? 'active' : ''}
              onClick={() => navigate('/home')}
            >
              <span>Home</span>
              <span style={{ fontSize: '14px', color: '#999' }}>&gt;</span>
            </li>

            <li 
              className={location.pathname === '/tender' ? 'active' : ''}
              onClick={() => navigate('/tender')}
            >
              <span>Tender/Project</span>
              <span style={{ fontSize: '14px', color: '#999' }}>&gt;</span>
            </li>

            <li 
              className={location.pathname === '/project' ? 'active' : ''}
              onClick={() => navigate('/project')}
            >
              <span>Project</span>
            </li>

            <li 
              className={location.pathname === '/lead' ? 'active' : ''}
              onClick={() => navigate('/lead')}
            >
              <span>Lead</span>
            </li>

            <li 
              className={location.pathname === '/timesheet' ? 'active' : ''}
              onClick={() => navigate('/timesheet')}
            >
              <span>ProjectTimesheet</span>
            </li>

            <li 
              className={location.pathname === '/client' ? 'active' : ''}
              onClick={() => navigate('/client')}
            >
              <span>Client</span>
            </li>

            <li 
              className={location.pathname === '/booking' ? 'active' : ''}
              onClick={() => navigate('/booking')}
            >
              <span>Booking</span>
            </li>

            <li 
              className={location.pathname === '/payroll' ? 'active' : ''}
              onClick={() => navigate('/payroll')}
            >
              <span>Payroll/HR</span>
              <span style={{ fontSize: '14px', color: '#999' }}>&gt;</span>
            </li>
          </ul>
        </div>
      )}

<div className="main-area">
  <div className="header">
    <span className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</span>
    <h2 className="header-title">PMS</h2>
    <div className="profile-pic">👤</div>
  </div>
   <div className="page-content">
          {children}
        </div> 
        </div>
<div className="settings-float" onClick={handleSettings}>
  ⚙️
</div>
           <Outlet/>
     
          </div>
);
}

export default Layout;