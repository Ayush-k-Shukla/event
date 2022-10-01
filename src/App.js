import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CreateEvent, Home, Event } from './pages';
import { useState } from 'react';
function App() {
  const [eventData, setEventData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route
          path='/event'
          exact
          element={<Event eventData={eventData} setEventData={setEventData} />}
        />
        <Route
          path='/create'
          exact
          element={
            <CreateEvent eventData={eventData} setEventData={setEventData} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
