import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";

  export function PlantsPage() {
    const [plants, setPlants] = useState([]);

    const handleIndex = () => {
     console.log("handleIndex");
     axios.get("http://localhost:3000/plants.json").then((response) => {
       console.log(response.data);
       setPlants(response.data);
     });
   };

   useEffect(handleIndex, []);
    return (
      <main>
       <PlantsIndex plants={plants} />
      </main>
    );
  }
// import { PlantsIndex } from "./PlantsIndex";
// export function PlantsPage() {
//   {plants.map((plant) => (
//     <div key={plant.id}>
//       <h2>{plant.name}</h2>
//       {/* <img src={plant.url} /> will have to add an image column later */}
//       <p>Description: {plant.description}</p>
//       <p>Hours of Sunlight Required: {plant.amount_of_sun}</p>
//       <p>Water Every {plant.days_to_water} Day(s)</p>
//     </div>
//   ))}
//   // const [plants, setPlants] = useState([]);

//   // const handleIndex = () => {
//   //        console.log("handleIndex");
//   //        axios.get("http://localhost:3000/plants.json").then((response) => {
//   //          console.log(response.data);
//   //          setPlants(response.data);
//   //        });
//   //      };
    
//   //      useEffect(handleIndex, []);
//   return (
//     <main>
//       <PlantsIndex plants={plants} />
//     </main>
//   )
// }
