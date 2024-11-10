import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

// import { PlantsShow } from "./PlantsShow";

export function PlantsShowPage() {
  const plant = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (id, params) => {
    console.log("handleUpdate", params);
    axios.patch(`http://localhost:3000/plants/${id}.json`, params).then(() => {
      navigate("/plants");
    });
  };

  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    axios.delete(`http://localhost:3000/plants/${id}.json`).then(() => {
      navigate("/plants");
    });
  };

  return (
    <div>
      <PlantsShowPage plant={plant} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}