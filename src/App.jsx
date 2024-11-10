import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
// import { SignupPage } from "./SignupPage";
// import { LoginPage } from "./LoginPage";
import { PlantsIndexPage } from "./PlantsIndexPage";
import { PlantsShowPage } from "./PlantsShowPage";
// import { PlantsNewPage } from "./PlantsNewPage";
import { Footer } from "./Footer";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <PlantsIndexPage />,
        loader: () => axios.get("http://localhost:3000/plants.json").then((response) => response.data)
      },
      // {
      //   path: "/signup",
      //   element: <SignupPage />,
      // },
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
      {
        path: "/plants",
        element: <PlantsIndexPage />,
        loader: () => axios.get("http://localhost:3000/plants.json").then((response) => response.data),
      },
  // {
  //   path: "/plants/new",
  //   element: <PlantsNewPage />,
  // },
    {
      path: "/plants/:id",
      element: <PlantsShowPage />,
      loader: ({ params }) => axios.get(`http://localhost:3000/plants/${params.id}.json`).then((response) => response.data),
    },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;