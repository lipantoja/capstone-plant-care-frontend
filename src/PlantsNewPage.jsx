// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import { PlantsNew } from "./PlantsNew";

// export function PlantsNewPage() {
//   const navigate = useNavigate();

//   const handleCreate = (params) => {
//     console.log("handleCreate", params);
//     axios.post("http://localhost:3000/plants.json", params).then((response) => {
//       console.log(response);
//       navigate("/plants");
//     });
//   };

//   return (
//     <div>
//       <PlantsNew onCreate={handleCreate} />
//     </div>
//   );
// }