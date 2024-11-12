import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export function SchedulesIndexPage() {
  const schedules = useLoaderData();
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <h1>Plant Watering Schedules</h1>
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)}/>
      <div className="posts-container">
      {schedules.filter((schedules) => schedules.user.name.toLowerCase().includes(searchFilter.toLowerCase())).map(schedules => (
        <div key={schedules.id} className="schedules">
          {/* <h2>{schedules.image_url}</h2> */}
          <img src={schedules.image_url} alt="" />
          <p> {schedules.watering_start_date}</p>
          <button type="button" onClick={() => (schedules)}> Save Schedule</button>
        </div>
      ))}
      </div> 
    </div>
  );
}