import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BiSolidCameraMovie} from 'react-icons/bi'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
import SearchInput from '../Form/SearchInput'
import { usePlaylist } from '../../context/playlist'

const Header = () => {

  const [auth, setAuth] = useAuth()
  const [playlist, setPlaylist] = usePlaylist()

  const handleLogout = () => {
    setAuth({...auth, user:null, token:''})
    let myPlaylist = []
    setPlaylist(myPlaylist)
    localStorage.removeItem('playlist')
    localStorage.removeItem('auth')
    toast.success('Logged out successfully')
  }

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to='/' className="navbar-brand"><BiSolidCameraMovie className='mb-1'/>{" "}Movies Library</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <SearchInput/>
        <li className="nav-item">
          <NavLink to='/' className="nav-link" aria-current="page">Home</NavLink>
        </li>
        {
          !auth?.user ? (
            <>
              <li className="nav-item">
                <NavLink to='/register' className="nav-link">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/login' className="nav-link">Login</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {auth?.user?.name}
                </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="nav-link">Dashboard</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink onClick={handleLogout} to='/login' className="nav-link text-danger">Logout</NavLink>
                  </li>
            </>
          )
        }
        <li className="nav-item">
          <NavLink to='/playlist' className="nav-link">Playlist</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header