import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchDataByGenre } from '../store';

export default function SelectGenre({genres,type}) {
    const dispatch = useDispatch();

  return (
    <Select className='flex' onChange={e=>{
        dispatch(fetchDataByGenre({genre:e.target.value,type}))
    }}>
        {genres.map((genre) => {
            return (
            <option value={genre.id} key={genre.id}>
                {genre.name}
                </option>
            );
        }
        )}
        </Select>
  )
}
const Select = styled.select`
  margin-left: 4rem;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: black; /* Adjust this value to make the box whiter */
  color: white;
  border:1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 20px; /* Adjust this value to create a more curved rectangle */
  appearance: none;     
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  font-weight: bold;
`;