import React, {useState} from "react";
import styled from "styled-components";

export interface SearchBarProps {
   handleSearch: (searchQuery: string) => void;
   handleReset?: () => void;
   disableDefaultResetBehavior?: boolean;
}

export default function SearchBar({
   handleSearch,
   handleReset,
   disableDefaultResetBehavior = false
}: SearchBarProps) {
   const [searchQuery, setSearchQuery] = useState('');

   function _handleReset () {
       if (!(disableDefaultResetBehavior === true)) setSearchQuery('');
       if (typeof handleReset === 'function') handleReset();
   }

   function _handleSearch () {
       if (typeof handleSearch === 'function') handleSearch(searchQuery);
   }

   return (
       <></>
   )

   return (
       <SearchBarContainer>
           <SearchInput
               type="text"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               placeholder="Search by name or email"
           />
           <SearchButton onClick={_handleSearch}>Search</SearchButton>
           <ResetButton onClick={_handleReset}>Reset</ResetButton>
       </SearchBarContainer>
   )
}


const SearchBarContainer = styled.div`
 display: flex;
 gap: 1rem;
 margin-bottom: 2rem;
`;

const SearchInput = styled.input`
 padding: 0.75rem;
 border-radius: 8px;
 border: 1px solid #ccc;
 flex: 1;
 font-size: 1rem;

 &:focus {
   outline: none;
   border-color: #0A4D51; /* High Tide Green */
 }
`;

const SearchButton = styled.button`
 padding: 0.75rem 1.5rem;
 background-color: #0A4D51; /* High Tide Green */
 color: #fff;
 border: none;
 border-radius: 8px;
 font-size: 1rem;
 cursor: pointer;
 transition: background-color 0.3s ease;

 &:hover {
   background-color: #052D2F; /* Deep Sea */
 }
`;

const ResetButton = styled.button`
 padding: 0.75rem 1.5rem;
 background-color: #B9D532; /* Prickly Pear */
 color: #fff;
 border: none;
 border-radius: 8px;
 font-size: 1rem;
 cursor: pointer;
 transition: background-color 0.3s ease;

 &:hover {
   background-color: #A4BF28;
 }
`;