import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export function PlantsIndexPage() {
  const plants = useLoaderData();
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <h1>Plant List</h1>
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)}/>
      <div className="posts-container">
      {plants.filter((plants) => plants.name.toLowerCase().includes(searchFilter.toLowerCase())).map(plants => (
        <div key={plants.id} className="plants">
          <h2>{plants.name}</h2>
          <img src={plants.image_url} alt="" />
          <p> {plants.description}</p>
          <p>Category: {plants.category}</p>
          <button type="info" onClick={() => (plants)}> More Info</button>
        </div>
      ))}
      </div> 
    </div>
  );
}