import React from 'react'
import { useAuth } from '../../context/auth'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const AdminDashboard = () => {

    const [auth] = useAuth()

  return (
    <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu/>
                </div>
                <div className="col-md-9 ">
                    <div className="card w-75 p-3" style={{marginLeft:'40px'}}>
                        <h3>Admin Name : {auth?.user?.name}</h3>
                        <hr/>
                        <h3>Admin Email : {auth?.user?.email}</h3>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default AdminDashboard