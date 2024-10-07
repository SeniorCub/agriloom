'use client'
import React, {useEffect, useState} from "react";
import BaseTableGrid, {BaseTableGridProps} from "./BaseTableGrid";
import SearchBar, {SearchBarProps} from "../SearchBar";
import styled from "styled-components";

interface TableGridProps<T extends BaseTableGridProps, S extends SearchBarProps> {
    columnDefs: T['columnDefs'];
    rowData: T['rowData'];
    disableDefaultResetBehavior?: S['disableDefaultResetBehavior'];
    isLoading?: boolean;
    error?: any;
    progressBarSpeed?: number
}

export default function TableGrid<T extends BaseTableGridProps, S extends SearchBarProps>({
    columnDefs,
    rowData,
    disableDefaultResetBehavior,
    isLoading,
    error,
    progressBarSpeed
}: TableGridProps<T, S>) {

    const [loadingProgress, setLoadingProgress] = useState(0);
    useEffect(() => {
        let timer: NodeJS.Timeout | undefined

        if (isLoading) {
            setLoadingProgress(0); 
            timer = setInterval(() => {
                setLoadingProgress((prev) => Math.min(prev + 10, 100)); // Increment progress
            }, progressBarSpeed || 100); // Adjust the speed of progress here
        } else {
            setLoadingProgress(100); // Ensure progress is complete when loading ends
            if (timer) {
                clearInterval(timer);
            }
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isLoading]);
    return (
        <>
    
            {isLoading ? (
                <LoadingContainer>
                    <LoadingProgress value={loadingProgress} max={100} />
                    <LoadingText>Serializing customer data...</LoadingText>
                </LoadingContainer>
            ) : error ? (
                <ErrorMessage>Error fetching customers: {error.message}</ErrorMessage>
            ) : (
            <BaseTableGrid
                columnDefs={columnDefs}
                rowData={rowData}
                isLoading={isLoading}
            />
            )}
        </>
    )
}



const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const LoadingProgress = styled.progress`
  width: 100%;
  max-width: 400px;
  margin-bottom: 1rem;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const LoadingText = styled.div`
  font-size: 1.25rem;
  text-align: center;
  color: #666;
`;

const ErrorMessage = styled.div`
  font-size: 1.25rem;
  text-align: center;
  padding: 2rem;
  color: #D9534F;
`;

