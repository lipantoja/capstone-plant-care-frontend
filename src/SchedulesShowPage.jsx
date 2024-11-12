import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

// import { SchedulesShow } from "./SchedulesShow";

export function SchedulesShowPage() {
  const schedule = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (id, params) => {
    console.log("handleUpdate", params);
    axios.patch(`http://localhost:3000/schedules/${id}.json`, params).then(() => {
      navigate("/schedules");
    });
  };

  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    axios.delete(`http://localhost:3000/schedules/${id}.json`).then(() => {
      navigate("/schedules");
    });
  };

  return (
    <div>
      <SchedulesShowPage schedule={schedule} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}