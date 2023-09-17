import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='text-center mt-3 list-group-item justify-content-center align-items-center mx-auto'
            style={{'width':'450px', 'backgroundColor':'#ffffff'}}>
        <h2 className='card text-white bg-primary mb-2 pb-2'>School Management System</h2>
      </div>
    </div>
  );
}

export default App;
