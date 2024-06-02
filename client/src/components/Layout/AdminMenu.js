import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
        <div className="text-center">
        <div className="list-group dashboard-menu">
            <h4>Admin Panel</h4>
            <NavLink to='/dashboard/admin/create-genre' className="list-group-item list-group-item-action">Create Genre</NavLink>
            <NavLink to='/dashboard/admin/create-movie' className="list-group-item list-group-item-action">Create Movie</NavLink>
            <NavLink to='/dashboard/admin/movies' className="list-group-item list-group-item-action">Movies</NavLink>
        </div>
        </div>
    </>
  )
}

export default AdminMenu