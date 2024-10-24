"use client";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";
import Topbar from "./components/Topbar";
import { useSidebar } from "./components/useSidebar";


export default function Home() {
  const { isSidebarOpen, toggleSidebar, sliderfromathor, sidebarClass } = useSidebar();
  return (
    <div >
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="page-content" >
        <Topbar  toggleSidebar={toggleSidebar}/>
        <div className={sidebarClass} onClick={sliderfromathor}></div>
        <DashboardContent   />
        
      </div>
    </div>
  );
}
