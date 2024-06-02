import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import toast from 'react-hot-toast'
import axios from 'axios'
import GenreForm from '../../components/Form/GenreForm'

const CreateGenre = () => {

  const [genres, setGenres] = useState([])
  const [name,setName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post('/api/v1/genre/create-genre',{name})
      if(data?.success){
        toast.success(`${name} is created`)
        getAllGenre()
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong in input form')
    }
  }

  const getAllGenre = async () => {
    try {
      const {data} = await axios.get('/api/v1/genre/get-genre')
      if(data?.success){
        setGenres(data?.genre)
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong in getting genres')
    }
  }

  useEffect(()=>{
    getAllGenre()
  },[])

  return (
    <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>
            </div>
            <div className="col-md-9">
                <h1 className='' style={{marginLeft:'50px'}}>Manage Genre</h1>
                <div className="p-3 w-50" style={{marginLeft:'40px'}}>
                  <GenreForm handleSubmit={handleSubmit} value={name} setValue={setName}/>
                </div>
                  <div className='w-75' style={{marginLeft:'50px'}}>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                        </tr>
                      </thead>
                      <tbody>
                          {
                            genres?.map((c)=>(
                              <>
                              <tr>
                                <td key={c._id}>{c.name}</td>
                              </tr>
                              </>
                            ))
                          }
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default CreateGenre