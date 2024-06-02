import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { usePlaylist } from '../context/playlist'
import toast from 'react-hot-toast'

const HomePage = () => {

  const [auth, setAuth] = useAuth()
  const [playlist, setPlaylist] = usePlaylist()
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const navigate = useNavigate()

  const getAllMovies = async () => {
    try {
      const {data} = await axios.get('/api/v1/movie/get-movie')
      setMovies(data.movies)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getAllMovies()
  },[])

  return (
    <Layout>
      <div className="container-fluid row mt-3 home-page">
        <div className="row mt-3 homepage homepage-banner">
          <div className="col-md-4">
            <img width='600' className='m-4 p-4' src='/images/movie.png' alt='bannerImage'/>
          </div>
          <div className="col-md-8">
            <div className='banner-text col-md-10 p-3'>
            <h1 className='content-texts'>Welcome to the <span className='text-primary'>MOVIES LIBRARY</span></h1>
            <hr/>
            <br/>
            <h5 className='content-texts'>Welcome to Movies Library, your ultimate online movie library! Dive into an extensive collection of films spanning all genres and eras, from timeless classics to the latest blockbusters. Movies Library offers a user-friendly interface where you can easily search for your favorite movies, read detailed synopses, and discover cast and crew information. Enjoy personalized recommendations based on your viewing history and preferences, and join a vibrant community of movie enthusiasts. Whether you're a casual viewer or a hardcore cinephile, Movies Library is your go-to destination for all things movies. Explore, discover, and indulge in the world of cinema with Movies Library!</h5>
          </div>
          </div>
          <hr/>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h1 className="content-texts text-center">All Movies</h1>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
            {movies?.map((p)=>(
                    
                        <div className="card m-2" style={{width: '18rem'}}>
                            <img src={`/api/v1/movie/movie-photo/${p._id}`} className="card-img-top" alt={p.name}/>
                            <div className="card-body">
                              <div className="card-name-price">
                                <h5 className="content-texts card-title">{p.name}</h5>
                                </div>
                                <p className="card-text">{p.description.substring(0,30)}...</p>
                                <div className="card-name-price">
                                <button onClick={()=>navigate(`/movie/${p.slug}`)} className="btn btn-primary ms-1">More Details</button>
                                <button className="btn btn-secondary ms-1" onClick={()=>{
                                  setPlaylist([...playlist,p])
                                  localStorage.setItem('playlist', JSON.stringify([...playlist,p]))
                                  toast.success('Movie added to playlist')
                                }}>Add to Playlist</button>
                            </div>
                        </div>
                        </div>
                ))}
            </div>
          </div>
        </div>
        </div>
    </Layout>
  )
}

export default HomePage