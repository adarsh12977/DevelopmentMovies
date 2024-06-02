import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import toast from 'react-hot-toast'
import axios from 'axios'
import {Select} from 'antd';
import { useNavigate, useParams } from 'react-router-dom'
const {Option} = Select

const UpdateMovie = () => {

  const params = useParams()
  const [genres, setGenres] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [genre, setGenre] = useState('')
  const [photo, setPhoto] = useState('')
  const [id, setId] = useState('')

  const navigate = useNavigate()

  const getSingleMovie = async () => {
    try {
        const {data} = await axios.get(`/api/v1/movie/get-movie/${params.slug}`)
        setName(data.movie.name)
        setId(data.movie._id)
        setDescription(data.movie.description)
        setGenre(data.movie.genre._id)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    getSingleMovie()
    //eslint-disable-next-line
  },[])

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

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const movieData = new FormData()
      movieData.append('name',name)
      movieData.append('description',description)
      photo && movieData.append('photo',photo)
      movieData.append('genre',genre)
      const {data} = await axios.put(`/api/v1/movie/update-movie/${id}`, movieData)
      if(data?.success){
        toast.success(data?.message)
      }
      else{
        toast.success('Movie updated successfully')
        navigate('/dashboard/admin/movies')
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are you sure you want to delete this movie?");
      if (!answer) return;
      const { data } = await axios.delete(`/api/v1/movie/delete-movie/${id}`)
      toast.success("Movie deleted successfully");
      navigate("/dashboard/admin/movies");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>
            </div>
            <div className="col-md-9">
                <h1 style={{marginLeft:'50px', marginBottom:'30px'}}>Update Movie</h1>
                <div className="w-75" style={{marginLeft:'50px'}}>
                  <Select variant={false} placeholder='Select a genre' size='large' showSearch className='form-select mb-3' onChange={(value)=>{setGenre(value)}} value={genre}>
                    {
                      genres?.map((c)=>(
                        <Option key={c._id} value={c._id}>
                          {c.name}
                        </Option>
                      ))
                    }
                  </Select>
                  <div className="mb-3">
                    <label className='btn btn-outline-secondary col-md-12'>
                      {photo ? photo.name : 'Upload Photo'} 
                      <input type='file' name='photo' accept='image/*' onChange={(e)=>setPhoto(e.target.files[0])} hidden />
                    </label>
                  </div>
                  <div className='mb-3'> 
                    {photo ? (
                      <div className="text-center">
                        <img className='img img-responsive' src={URL.createObjectURL(photo)} alt='Uploaded Photo' height={'200px'}/>
                      </div>
                    ):(
                        <div className="text-center">
                        <img className='img img-responsive' src={`/api/v1/movie/movie-photo/${id}`} alt='Uploaded Photo' height={'200px'}/>
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <input type='text' value={name} placeholder='Write a name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <textarea type='text' value={description} placeholder='Write a description' className='form-control' onChange={(e)=>setDescription(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary" onClick={handleUpdate}>Update Movie</button>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-danger" onClick={handleDelete}>Delete Movie</button>
                  </div>
                </div>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default UpdateMovie