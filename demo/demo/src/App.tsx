import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Country from "./Pages/Country";
import City from "./Pages/City";
import Sidebar from "./Components/Sidebar";
import AddCountry from "./Pages/AddCountry";
import AddCity from "./Pages/AddCity";
import EditCountry from "./Pages/EditCountry";


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
          <Route path="/country/view" element={<City />} />
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
