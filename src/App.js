import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateKaryawan from './components/CreateKaryawan';
import Footer from './components/Footer';
import Header from './components/Header';
import ListKaryawan from './components/ListKaryawan';
import ViewKaryawan from './components/ViewKaryawan';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<ListKaryawan />}></Route>
            <Route path="/karyawan" element={<ListKaryawan />}></Route>
            <Route path="/add-Karyawan/:id" element={<CreateKaryawan  />}></Route>
            <Route path="/view-Karyawan/:id" element={<ViewKaryawan />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
