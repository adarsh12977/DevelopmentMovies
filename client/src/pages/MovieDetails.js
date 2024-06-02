import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const MovieDetails = () => {

    const params = useParams()
    const [movie, setMovie] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        if(params?.slug){
            getMovie()
        }
    },[params?.slug])

    const getMovie = async () => {
        try {
            const {data} = await axios.get(`/api/v1/movie/get-movie/${params.slug}`)
            setMovie(data?.movie)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Layout>
        <div className="row container m-4">
            <div className="col-md-6" style={{marginTop:'60px'}}>
                <img height='600' width={'600px'} src={`/api/v1/movie/movie-photo/${movie._id}`} className='card-img-top-detail' alt={movie.name}/>
            </div>
            <div className="col-md-6" style={{marginTop:'100px'}}>
                <h1 className='text-center'>Movie Details</h1>
                <hr/>
                <h4>Name : {movie.name}</h4>
                <h6>Genre : {movie?.genre?.name}</h6>
                <hr/>
                <h6>Description : {movie.description}</h6>
                <hr/>
                <button onClick={()=>navigate('/')} className="btn btn-secondary">Go to Home</button>
            </div>
        </div>
    </Layout>
  )
}

export default MovieDetails