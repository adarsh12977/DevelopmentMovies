import React from 'react'
import Layout from '../components/Layout/Layout'
import { usePlaylist } from '../context/playlist'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'

const PlaylistPage = () => {

    const [auth, setAuth] = useAuth()
    const [playlist, setPlaylist] = usePlaylist()
    const navigate = useNavigate()

    const removePlaylistItem = (pid) => {
        try {
            let myPlaylist = [...playlist]
            let index = myPlaylist.findIndex(item=>item._id===pid)
            myPlaylist.splice(index,1)
            setPlaylist(myPlaylist)
            localStorage.setItem('playlist', JSON.stringify(myPlaylist))
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Layout>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center bg-light p-2 mb-1">
                        {`Hello ${auth?.token && auth?.user?.name}`}
                    </h1>
                    <h4 className='text-center'>
                        {playlist?.length>0 ? `You have ${playlist.length} movies in your playlist
                        ${auth?.token ? "" : "Please login to watch"} ` : 'Your Playlist is empty'}
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {playlist?.map((p)=>(
                        <div className="row mb-2 p-3 card flex-row">
                            <div className="col-md-5">
                                <img width='100px' height={'400px'} src={`/api/v1/movie/movie-photo/${p._id}`} className='card-img-top' alt={p.name}/>
                            </div>
                            <div className="col-md-7">
                                <h2>{p.name}</h2>
                                <hr/>
                                <p>{p.description}</p>
                                <button className="btn btn-danger" onClick={()=>removePlaylistItem(p._id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default PlaylistPage