'use client';

import React, { useState, useEffect } from "react";
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import TableGrid from "src/components/table_grid/TableGrid";

// The main OrdersPage component
const OrdersPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    const [orders, setOrders] = useState<Order[]>([]); 

    useEffect(() => {
        // Simulating data fetch
        setIsLoading(true);
        setTimeout(() => {
            const fetchedOrders = [
                {
                    orderId: 1,
                    products: [{ name: "Tractor" }, { name: "Seeds" }],
                    date: Date.now(),
                    totalPayment: 2000,
                    status: "Paid",
                },
                {
                    orderId: 2,
                    products: [{ name: "Irrigation System" }],
                    date: Date.now() - 10000000,
                    totalPayment: 5000,
                    status: "Pending",
                },
            ];
            setOrders(fetchedOrders);
            setIsLoading(false);
        }, 2000);
    }, []);

    const rowData = flattenData(orders);

    // AG Grid column definitions
    const columns: ColDef[] = [
        {
            headerName: "Order ID",
            field: "orderId",
            sortable: true,
        },
        {
            headerName: "Products",
            field: "products",
            sortable: false,
            cellRenderer: ({ value }) => value.join(", "), 
        },
        {
            headerName: "Date",
            field: "formattedDate", 
            sortable: true,
            comparator: (valueA, valueB, nodeA, nodeB) => {
                const dateA = new Date(nodeA.data.date).getTime();
                const dateB = new Date(nodeB.data.date).getTime();
                return dateA - dateB;
            },
        },
        {
            headerName: "Total Payment",
            field: "totalPayment",
            sortable: true,
        },
        {
            headerName: "Status",
            field: "status",
            sortable: true,
        },
    ];

    return (
        <div>
            <h1>All Orders</h1>

            {isLoading ? (
                <div>Loading data...</div>
            ) : error ? (
                <div>Error fetching orders: {error.message}</div>
            ) : (
              <TableGrid
              columnDefs={columns}
              rowData={rowData}
              isLoading={isLoading}
              error={error}
              progressBarSpeed={1000}

              />
            )}
        </div>
    );
};

const flattenData = (data: Order[]): any[] => {
    return data.map(dataRow => {
        return {
            orderId: dataRow.orderId,
            products: dataRow.products.map(product => product.name), // Assuming products is an array
            date: dataRow.date,
            formattedDate: new Date(dataRow.date).toLocaleDateString(), // Format date
            totalPayment: `$${dataRow.totalPayment.toFixed(2)}`, // Format payment as currency
            status: dataRow.status,
        };
    });
};

// Sample order type definition
interface Order {
    orderId: number;
    products: { name: string }[];
    date: number;
    totalPayment: number;
    status: string;
}

export default OrdersPage;
