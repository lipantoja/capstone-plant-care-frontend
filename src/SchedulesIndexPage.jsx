import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export function SchedulesIndexPage() {
  const schedules = useLoaderData();
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <h1>Plant Schedules</h1>
      <input 
      type="text" 
      value={searchFilter} 
      onChange={(event) => setSearchFilter(event.target.value)}
      placeholder="Search your plants..."/>
      <div className="posts-container">
      {schedules.filter((schedules) => schedules.plant.name.toLowerCase().includes(searchFilter.toLowerCase())).map(schedules => (
        <div key={schedules.id} className="schedules">
          <h3>{schedules.plant.name}</h3>
          <img src={schedules.plant.image_url} alt="" />
          <p> 🌞 Hours of Sunlight: {schedules.plant.amount_of_sun}</p>
          <p> 💧 Days Between Watering: {schedules.plant.amount_of_sun}</p>
          <p> Water On: {new Date(schedules.watering_start_date).toLocaleString()}</p>
        </div>
      ))}
      </div> 
    </div>
  );
}