import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../../styles/AuthStyles.css'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/v1/auth/register', {name,email,password})
            if(res && res.data.success){
                toast.success(res && res.data.message)
                navigate('/login')
            }
            else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }

  return (
    <Layout>
        <div className="form-container">
            <form onSubmit={handleSubmit}>  
                <h4 className='title'>REGISTER FORM</h4>
                <div className="mb-3">
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' className="form-control" id="exampleInputName1" required/>
                </div>
                <div className="mb-3">
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' className="form-control" id="exampleInputEmail1" required/>
                </div>
                <div className="mb-3">
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' className="form-control" id="exampleInputPassword1" required/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    </Layout>
  )
}

export default Register