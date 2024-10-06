'use client'
import React from 'react';
import { LayoutDashboard, Settings, FileText, Bell, DollarSign, File} from 'lucide-react';

type NavItem = {
  name: string;
  icon: React.ReactNode;
};

type SidebarProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const navItems: NavItem[] = [
  { name: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
  { name: "Inventory", icon: <FileText className="h-5 w-5" /> },
  { name: "Orders and Transactions", icon: <File className="h-5 w-5" /> },
  { name: "Financing", icon: <DollarSign className="h-5 w-5" /> },
  { name: "Notifications", icon: <Bell className="h-5 w-5" /> },
  { name: "Settings", icon: <Settings className="h-5 w-5" /> },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-8">Agro Loom</h1>
        <nav>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => onTabChange(item.name)}
              className={`w-full flex items-center p-3 mb-2 rounded-lg text-left
                ${activeTab === item.name 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'}`}
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