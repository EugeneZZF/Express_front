import './App.css';
import Landing from './pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom';
import Mains from './pages/Catalog/Mains'
import Layout from './components/Layout/Layout';
import Settings from './pages/settings/Settings';
import Post from './pages/Post/Post';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Archive from './pages/Archive/Archive';
import Mypub from './pages/Mypub/Mypub';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Auth/Confirm/:uuid' element={<Landing/>} />
        <Route path='/' element={<Layout></Layout>}>
          <Route path='/catalog' element={<Mains/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/post' element={<Post/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/resources' element={<Mains/>} />
          <Route path='/archive' element={<Archive/>} />
          <Route path='/publication' element={<Mypub/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;