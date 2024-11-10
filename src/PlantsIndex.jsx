export function PlantsIndex({ plants }) {
  return (
    <div>
      <h1>All plants</h1>
      {plants.map((plant) => (
         <div key={plant.id}>
           <h2>{plant.name}</h2>
           <img src={plant.url} />
           <p>Width: {plant.width}</p> 
           <p>Height: {plant.height}</p>
         </div>
       ))}
      <p>Should be the page that contains all of the plants that are available to schedule</p>
    </div>
  );
}