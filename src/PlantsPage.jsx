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

