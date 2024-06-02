import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateGenre from './pages/admin/CreateGenre';
import CreateMovie from './pages/admin/CreateMovie';
import Playlists from './pages/user/Playlists';
import Profile from './pages/user/Profile';
import Movies from './pages/admin/Movies';
import UpdateMovie from './pages/admin/UpdateMovie';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';
import PlaylistPage from './pages/PlaylistPage';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/movie/:slug' element={<MovieDetails/>}/>
      <Route path='/playlist' element={<PlaylistPage/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>}>
        <Route path='user' element={<Dashboard/>}/>
        <Route path='user/playlists' element={<Playlists/>}/>
        <Route path='user/profile' element={<Profile/>}/>
      </Route>
      <Route path='/dashboard' element={<AdminRoute/>}>
        <Route path='admin' element={<AdminDashboard/>}/>
        <Route path='admin/create-genre' element={<CreateGenre/>}/>
        <Route path='admin/create-movie' element={<CreateMovie/>}/>
        <Route path='admin/movie/:slug' element={<UpdateMovie/>}/>
        <Route path='admin/movies' element={<Movies/>}/>
      </Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </>
  );
}

export default App;
