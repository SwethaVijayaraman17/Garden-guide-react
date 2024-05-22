import './App.css';
import { Route, Routes } from 'react-router-dom';
import PlantsList from './PlantsList';
import PlantingGuidance from './PlantingGuidance';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PlantsList />} />
        <Route path='/guidance' element={<PlantingGuidance />} />
      </Routes>
    </div>
  );
}

export default App;
