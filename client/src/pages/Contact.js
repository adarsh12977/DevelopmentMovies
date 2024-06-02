import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/clapperboard.png"
            alt="contactus"
            style={{ width: "80%", height: '480px' }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center" style={{marginLeft:'-100px'}}>CONTACT US</h1>
          <br/>
          <h5 className="text-justify mt-2" style={{marginLeft:'-100px'}}>
            Any query and info about anything? Feel free to call anytime!
          </h5>
          <h5 className="mt-3" style={{marginLeft:'-100px'}}>
            <BiMailSend /> : www.help@movieslibrary.com
          </h5>
          <h5 className="mt-3" style={{marginLeft:'-100px'}}>
            <BiPhoneCall /> : 0123456789
          </h5>
          <h5 className="mt-3" style={{marginLeft:'-100px'}}>
            <BiSupport /> : 1800-0000-0000 (toll free)
          </h5>
        </div>
      </div>
    </Layout>
  )
}

export default Contact