import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Modify from './pages/modify/Modify';
import Create from './pages/create/Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/list" replace />} />
        <Route path="/list" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/linkpost" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/link/:id/edit" element={<Modify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
