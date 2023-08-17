import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Donors from "../pages/Donors";
import Patients from "../pages/Patients";
import DonorRegistration from "../pages/DonorRegistration";
import PatientRegistration from "../pages/PatientRegistration";
import Records from "../pages/Records";
import AddRecord from "../pages/AddRecord";
import Login from "../pages/Login";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            index: true,
            element: <Login />,
          },
       
      ],
    },
    {
       path: "/home",
        element: <Home />,
      }
    ,
    {
      path: "/donors",
      element: <Donors />,
    },
    {
      path: "/patients",
      element: <Patients />,
    },
    {
      path: "/donor-registration",
      element: <DonorRegistration />,
    },
    {
      path: "/patient-registration",
      element: <PatientRegistration />,
    },
    {
      path: "/records",
      element: <Records />,
    },
    {
      path: "/add-record",
      element: <AddRecord />,
    },
    
    {
      path: "*",
      element: <App />,
    },
  ]);
  
  export default routes;
