import React from "react";
import "./SidebarAdmin.css";
import { CgProfile } from "react-icons/cg";


function SidebarAdmin() {
    return (
        <div className="sidebar-admin">
            <div className="bar">
                <div className="perfil-admin">
                    <CgProfile className="perfil-icon" />
                </div>
                <div className="central">
                    <div className="home-admin">
                        
                    </div>
                    <div className="programas-admin">
                        
                    </div>
                    <div className="empresa-admin">
                        
                    </div>
                    <div className="usuario-admin">
                        
                    </div>
                    <div className="reporte-admin">
                        
                    </div>
                </div>
                <div className="logout-admin">
                    
                </div>
            </div>
        </div>
    );
}

export default SidebarAdmin;