import React from "react";
import styled from "styled-components";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {ColDef} from "ag-grid-community";

export interface BaseTableGridProps {
    columnDefs: ColDef[]
    rowData: any[]
    isLoading: boolean | undefined
}

export default function BaseTableGrid({
  columnDefs,
  rowData
}: BaseTableGridProps) {
    return (
        <TableContainer  className="ag-theme-alpine">
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                pagination={false}
            />
        </TableContainer>
    )
}


const TableContainer = styled.div`
  width: 100%;
  height: 900px;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;
