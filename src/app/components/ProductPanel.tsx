'use client'
import React from 'react';

type Product = {
  name: string;
  icon: string;
  trend: number;
};

export const TrendingProductsSidebar: React.FC = () => {
  const products: Product[] = [
    { name: "Palm Oil", icon: "/api/placeholder/32/32", trend: 2.5 },
    { name: "Maize", icon: "/api/placeholder/32/32", trend: -1.3 },
    { name: "Fruit and Vegetables", icon: "/api/placeholder/32/32", trend: 3.7 },
    { name: "Tomato", icon: "/api/placeholder/32/32", trend: -0.8 },
    { name: "Palm Oil", icon: "/api/placeholder/32/32", trend: 1.2 },
  ];

  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <span className="mr-2">📈</span>
        Top Trending Products
      </h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="flex items-center mb-3 p-2 hover:bg-gray-100 rounded">
            <img src={product.icon} alt={product.name} className="w-8 h-8 mr-3" />
            <div>
              <p className="font-medium">{product.name}</p>
              <p className={`text-sm ${product.trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {product.trend > 0 ? '▲' : '▼'} {Math.abs(product.trend)}%
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};