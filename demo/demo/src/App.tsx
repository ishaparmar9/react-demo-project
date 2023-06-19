import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import City from "./pages/City";
import Sidebar from "./components/Sidebar";
import AddCountry from "./pages/AddCountry";
import AddCity from "./pages/AddCity";
import EditCountry from "./pages/EditCountry";
import ViewCountry from "./pages/ViewCountry";


const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleWidth = (isOpen:boolean) => {
    setOpen(isOpen);
  };

  return (
    <>
      <Sidebar isOpen={handleWidth}/>
      <div style={{marginLeft: !open ? '265px' : '90px', marginRight: '25px', transition: 'margin-left 0.25s ease'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Country />} />
          <Route path="/city" element={<City />} />
          <Route path="/country/view" element={<ViewCountry />} />
          <Route path="/country/add" element={<AddCountry />} />
          <Route path="/country/edit" element={<EditCountry />} />
          <Route path="/city/view" element={<City />} />
          <Route path="/city/add" element={<AddCity />} />
          <Route path="/city/edit" element={<City />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
