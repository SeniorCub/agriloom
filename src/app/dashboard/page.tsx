
'use client';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowDown, ArrowUp, Users, DollarSign, ShoppingCart } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { TrendingProductsSidebar } from './components/ProductPanel'; 
import { Card, CardHeader, CardTitle, CardContent } from './components/Examplecard';
import Inventory from './modules/Inventory';
import OrdersPage from './modules/Orders';
type Metric = {
  title: string;
  value: number;
  change: number;
  icon: React.ReactNode;
};

type DataPoint = {
  name: string;
  value: number;
};


const metrics: Metric[] = [
  { title: "Total Users", value: 2453, change: 12.5, icon: <Users className="h-4 w-4" /> },
  { title: "Revenue", value: 45690, change: -2.3, icon: <DollarSign className="h-4 w-4" /> },
  { title: "Orders", value: 356, change: 8.1, icon: <ShoppingCart className="h-4 w-4" /> },
];

const chartData: DataPoint[] = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 120 },
  { name: 'Mar', value: 110 },
  { name: 'Apr', value: 140 },
  { name: 'May', value: 130 },
  { name: 'Jun', value: 160 },
];

const DashboardContent: React.FC = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            {metric.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metric.title === "Revenue" ? `$${metric.value.toLocaleString()}` : metric.value.toLocaleString()}
            </div>
            <p className="text-xs flex items-center">
              {metric.change > 0 ? (
                <ArrowUp className="text-green-500 mr-1 h-4 w-4" />
              ) : (
                <ArrowDown className="text-red-500 mr-1 h-4 w-4" />
              )}
              <span className={metric.change > 0 ? "text-green-500" : "text-red-500"}>
                {Math.abs(metric.change)}%
              </span>
              <span className="text-gray-500 ml-1">vs last month</span>
            </p>
          </CardContent>
        </Card>
        
      ))}
    </div>
  </>
);

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardContent />;
      case "Inventory":
        return <Inventory/>
      case "Orders and Transactions":
        return <OrdersPage/>
      case "Financing":
        return <div className="text-xl">Financing</div>;
      case "Notifications":
        return <div className="text-xl">Notifications</div>;
      case "Settings":
        return <div className="text-xl">Settings</div>;
      default:
        return null;
    }
  };

  return (
    
    <div className="flex h-screen   marginTop: '3rem'">
    <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
    <div className="flex-1 p-8">
   
  <div style={{
  backgroundColor: 'white',
  borderRadius: '0.5rem',
  padding: '1.5rem',
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 40
}}>
 <h2 style={{ fontSize: '1.5rem',
   fontWeight: 'bold',
    marginBottom: '1rem',
     marginLeft: '220px' }}>{activeTab}</h2>

 <div style={{ marginLeft: '220px', 
  marginTop: '6rem' }}>{renderContent()}</div>
</div>

    </div>
  </div>

     
    
  );
};

export default Dashboard;