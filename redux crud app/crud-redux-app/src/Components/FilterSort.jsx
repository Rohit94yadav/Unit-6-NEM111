import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const FilterSort = () => {

    const[searchParams, setSearchParams] = useSearchParams();
    const [sortBy,  setSortBy] = useState(searchParams.get("sortBy") || "")

    const [catagory, setCatagory] = useState(searchParams.getAll("genre") || []);

    const handleFilter = (e)=>{
        const option = e.target.value;
        let newCatagory = [...catagory];
        if(newCatagory.includes(option)){
            
            newCatagory.splice(newCatagory.indexOf(option), 1)

        }else{
            newCatagory.push(option)
        }

        setCatagory(newCatagory)
    }

    const handleSortBy=(e)=>{
        setSortBy(e.target.value)
    }

    useEffect(()=>{
        
        const params = {};
        catagory && (params.genre = catagory);
        sortBy && (params.sortBy = sortBy)
        setSearchParams(params);

    },[catagory, setSearchParams, sortBy])

  return (
    <div>
      <h2>Filter</h2>
      <div>
        <input type="checkbox" value="K-Pop" defaultChecked = {catagory.includes("K-Pop")} onChange={handleFilter} />
        <label htmlFor="">K-Pop</label>
      </div>

      <div>
        <input type="checkbox" value="Country" defaultChecked = {catagory.includes("Country")} onChange={handleFilter}/>
        <label htmlFor="">Country</label>
      </div>

      <div>
        <input type="checkbox" value="Pop" defaultChecked = {catagory.includes("Pop")} onChange={handleFilter}/>
        <label htmlFor="">Pop</label>
      </div>

      <div>
        <input type="checkbox" value="Heavy Metal" defaultChecked = {catagory.includes("Heavy Metal")} onChange={handleFilter}/>
        <label htmlFor="">Heavy Metal</label>
      </div>


        <h2>Sort</h2>

        <div onChange={handleSortBy}>
            <div>
                <input type="radio" value="asc" defaultChecked = {sortBy === "asc"} name = "sortBy" />
                <label htmlFor="">Ascending</label>
            </div>

            <div>
                <input type="radio" value="desc" defaultChecked = {sortBy === "desc"} name = "sortBy" />
                <label htmlFor="">Descending</label>
            </div>
        </div>


    </div>
  )
}

export default FilterSort
