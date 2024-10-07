'use client'
import React from 'react';
import { LayoutDashboard, Settings, FileText, Bell, DollarSign, File } from 'lucide-react';

type NavItem = {
  name: string;
  icon: React.ReactNode;
};

type SidebarProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const navItems: NavItem[] = [
  { name: "Dashboard", icon: <LayoutDashboard className="h-5 w-5 text-blue-500" /> },
  { name: "Inventory", icon: <FileText className="h-5 w-5 text-blue-500" /> },
  { name: "Orders and Transactions", icon: <File className="h-5 w-5 text-blue-500" /> },
  { name: "Financing", icon: <DollarSign className="h-5 w-5 text-blue-500" /> },
  { name: "Notifications", icon: <Bell className="h-5 w-5 text-blue-500" /> },
  { name: "Settings", icon: <Settings className="h-5 w-5 text-blue-500" /> },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div style={{
      width: '216px',
      backgroundColor: 'black',
      marginLeft: '20px',
      marginTop: '9rem',
      borderRadius: '1rem',
      height: '500px',
      position: 'fixed',
      zIndex: 50
    }}>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-8 text-white">Agro Loom</h1>
        <nav className="mt-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => onTabChange(item.name)}
              className={`w-full flex items-center p-3 mb-2 rounded-lg text-left
                ${activeTab === item.name 
                  ? 'bg-blue-100 text-green-600' 
                  : 'text-green-300 hover:bg-gray-700 hover:text-white'}`} // Updated hover styles
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};