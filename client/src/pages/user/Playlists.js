import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const Playlists = () => {
  return (
    <Layout>
        <div className="container-fluid p-3 m-3 dashboard">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu/>
                </div>
                <div className="col-md-9">
                    <h1>Playlist</h1>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Playlists