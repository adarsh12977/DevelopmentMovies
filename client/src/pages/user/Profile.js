import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'

const Profile = () => {

    const [auth, setAuth] = useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(()=> {
        const {name,email} = auth?.user
        setName(name)
        setEmail(email)
    },[auth?.user])

  return (
    <>
    <Layout>
        <div className="container-fluid p-3 m-3 dashboard">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu/>
                </div>
                <div className="col-md-9">
                    <h1 style={{marginLeft:'20px'}}>Your Profile</h1>
                    <hr/>
                    <h5 style={{marginLeft:'20px'}}>Name : {auth?.user?.name}</h5>
                    <h5 style={{marginLeft:'20px'}}>Email : {auth?.user?.email}</h5>
                </div>
            </div>
        </div>
    </Layout>
    </>
  )
}

export default Profile