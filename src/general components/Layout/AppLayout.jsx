import React, { useState } from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from './AppLayout.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const AppLayout = () => {
  let  currentUser;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const handleContentClick = () => {
    if (window.innerWidth <= 768 && sidebarOpen) {
      setSidebarOpen(false);
    }
  };
  
  return (
    <div className={styles.appContainer}>
      <button 
        className={styles.sidebarToggle} 
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <Sidebar isOpen={sidebarOpen} />
      
      <main 
        className={`${styles.mainContent} ${sidebarOpen ? styles.shifted : ''}`}
        onClick={handleContentClick}
      >
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout; 