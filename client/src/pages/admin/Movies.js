import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Movies = () => {

    const [movies, setMovies] = useState([])

    const getAllMovies = async () => {
        try {
            const {data} = await axios.get('/api/v1/movie/get-movie')
            setMovies(data.movies)
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }

    useEffect(()=>{
        getAllMovies()
    },[])

  return (
    <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>
            </div>
            <div className="col-md-9">
                <h1 className="text-center">All Movies List</h1>
                <hr/>
                <div className="d-flex flex-wrap">
                {movies?.map((p)=>(
                    <Link key={p._id} to={`/dashboard/admin/movie/${p.slug}`} className='movie-link text-decoration-none'>
                        <div className="card m-2" style={{width: '18rem'}}>
                            <img src={`/api/v1/movie/movie-photo/${p._id}`} className="card-img-top" alt={p.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.description.substring(0,50)}...</p>
                            </div>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default Movies