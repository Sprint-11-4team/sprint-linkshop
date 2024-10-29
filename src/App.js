import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Modify from './pages/modify/Modify';
import Create from './pages/create/Create';
import RootPage from './pages/detail/RootPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/list" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
