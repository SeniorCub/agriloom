'use client';

import React, { useState, useEffect } from "react";
import { ColDef } from 'ag-grid-community';
import TableGrid from "src/components/table_grid/TableGrid"; // Assuming TableGrid is reusable

// The main InventoryPage component
const InventoryPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            const fetchedInventoryItems = [
                {
                    id: 1,
                    name: "Tractor",
                    status: "In Stock",
                    count: 100,
                },
                {
                    id: 2,
                    name: "Irrigation System",
                    status: "Out of Stock",
                    count: 0,
                },
                {
                    id: 3,
                    name: "Seeds",
                    status: "Low Stock",
                    count: 20,
                },
            ];
            setInventoryItems(fetchedInventoryItems);
            setIsLoading(false);
        }, 2000);
    }, []);

    // Flatten data for the table grid
    const rowData = flattenInventoryData(inventoryItems);

    const columns: ColDef[] = [
        {
            headerName: "Name",
            field: "name",
            sortable: true,
        },
        {
            headerName: "Status",
            field: "status",
            sortable: true,
        },
        {
            headerName: "Count",
            field: "count",
            sortable: true,
        },
        {
            headerName: "Delete",
            field: "delete",
            cellRenderer: (params) => (
                <button onClick={() => handleDelete(params.data.id)}>Delete</button>
            ),
        },
    ];

    const handleDelete = (id: number) => {
        setInventoryItems(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div>
            <h1>Inventory Items</h1>

            {isLoading ? (
                <div>Loading data...</div>
            ) : error ? (
                <div>Error fetching inventory items: {error.message}</div>
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

// Helper function to flatten the inventory data
const flattenInventoryData = (data: InventoryItem[]): any[] => {
    return data.map(dataRow => {
        return {
            id: dataRow.id,
            name: dataRow.name, 
            status: dataRow.status,
            count: dataRow.count,
            delete: '',
        };
    });
};

// Sample inventory item type definition
interface InventoryItem {
    id: number;
    name: string; 
    status: string;
    count: number;
}

export default InventoryPage;
