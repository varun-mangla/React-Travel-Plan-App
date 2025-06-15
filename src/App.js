import React from 'react';
import Tours from './components/Tours.js';
import data from './data.js';
import { useState } from 'react';

import './App.css';

function App() {
  const[tours,setTours]= useState()

  function removeTour(id){
    const newTours=tours.filter(tour=> tour.id !==id);
    setTours(newTours);

    };

  return (
    <div >
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App;
