import './App.css';
import { Routes, Route } from 'react-router-dom'
import Anasayfa from './components/Anasayfa'
import Hakkimda from './components/Hakkimda'
import Htmlyazi from './components/Htmlyazi'
import Cssyazi from './components/Cssyazi'
import Javascriptyazi from './components/Javascriptyazi'
import Yapayzekaningelecegi from './components/Yapayzekaningelecegi'
import Yazilarimsayfasi from './components/Yazilarimsayfasi'
import Sosyalmedyasayfasi from './components/Sosyalmedyasayfasi'
import Blackmirroryazi from './components/Blackmirroryazi'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/html-yazi" element={<Htmlyazi />} />
        <Route path="/css-yazi" element={<Cssyazi />} />
        <Route path="/javascript-yazi" element={<Javascriptyazi />} />
        <Route path="/yapayzeka" element={<Yapayzekaningelecegi />} />
        <Route path="/yazilarim" element={<Yazilarimsayfasi />} />
        <Route path="/sosyalmedya" element={<Sosyalmedyasayfasi />} />
        <Route path="/blackmirror-yazi" element={<Blackmirroryazi />} />
      </Routes>
    </>

  );
}

export default App;
