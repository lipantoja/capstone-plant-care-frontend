import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export function PlantsIndexPage() {
  const plants = useLoaderData();
  const [searchFilter, setSearchFilter] = useState("");
  const [wateringStartDate, setWateringStartDate] = useState("");
  const [selectedPlant, setSelectedPlant] = useState(null);

  const createPlant = (plant) => {
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
    <div className="plants-container">
      <h1 className="title">Plant List</h1>
      <input 
        type="text" 
        value={searchFilter} 
        onChange={(event) => setSearchFilter(event.target.value)}
        placeholder="Search plants..."
      />
      <div className="grid">
      {plants.filter((plant) => 
        plant.name.toLowerCase().includes(searchFilter.toLowerCase())).map(plant => (
        <div key={plant.id} className="plant-card">
          <h3>{plant.name}</h3>
          <img src={plant.image_url} alt={plant.name} className="plant-image" />
          <p> {plant.description}</p>
          <p> 🌞 Hours of Sunlight: {plant.amount_of_sun} </p>
          <p> 💧 Days Between Watering: {plant.days_to_water} </p>
          <button type="info" onClick={() => setSelectedPlant(plant)}> Set Watering Schedule </button>

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