import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export function PlantsIndexPage() {
  const plants = useLoaderData();
  const [searchFilter, setSearchFilter] = useState("");
  const [wateringStartDate, setWateringStartDate] = useState("");
  const [selectedPlant, setSelectedPlant] = useState(null);

  const createPlant = (plant) => {
    console.log(plant)
    axios.post("http://localhost:3000/schedules.json", {
      plant_id: plant.id, 
      watering_start_date: wateringStartDate,
    }).then((response) => {
      console.log("Watering schedule create:", response.data);
      alert("This plant has been added to your 'My Plants' page");
      setWateringStartDate("");
      setSelectedPlant(null);
    }).catch((error) => {
      console.error("Error creating schedule.", error);
      alert("Failed to create schedule.");
    });
 };
  
  return (
    <div>
      <h1>Plant List</h1>
      <input 
      type="text" 
      value={searchFilter} 
      onChange={(event) => setSearchFilter(event.target.value)}
      placeholder="Search plants..."
      />
      <div className="posts-container">
      {plants.filter((plant) => 
      plant.name.toLowerCase().includes(searchFilter.toLowerCase())).map(plant => (
        <div key={plant.id} className="plant">
          <h2>{plant.name}</h2>
          <p> {plant.description}</p>
          <p> Requires {plant.amount_of_sun} Hours of Sun</p>
          <p> Water Every {plant.days_to_water} Days</p>
          <button type="info" onClick={() => setSelectedPlant(plant)}> Set Watering Schedule </button>
        {/* Simple form for adding a watering schedule, shown when a plant is selected */}
        {selectedPlant && selectedPlant.id === plant.id && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createPlant(plant);
                }}
              >
                <div>
                  Start Watering:
                  <input
                    type="datetime-local"
                    value={wateringStartDate}
                    onChange={(e) => setWateringStartDate(e.target.value)}
                  />
                </div>
                <button type="submit">Create</button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}