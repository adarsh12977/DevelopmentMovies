import React from 'react'
import Layout from '../components/Layout/Layout'
import { useSearch } from '../context/search'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [values, setValues] = useSearch()
    const navigate = useNavigate()

  return (
    <Layout>
        <div className="container">
            <div className="text-center" style={{marginTop:'70px'}}>
                <h1>Search Results</h1>
                <h6>{values?.results.length<1 ? 'No movies found' : `Found ${values?.results.length} movie(s)`}</h6>
                <div className="d-flex flex-wrap mt-4">
                    {values?.results.map((p)=>(
                        <div className="card m-2" style={{width: '18rem'}}>
                            <img src={`/api/v1/movie/movie-photo/${p._id}`} className="card-img-top" alt={p.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.description.substring(0,30)}...</p>
                                <button onClick={()=>navigate(`/movie/${p.slug}`)} className="btn btn-primary">More Details</button>
                            </div>
                        </div>
                    ))}
            </div>
            </div>
        </div>
    </Layout>
  )
}

export default Search