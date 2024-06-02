import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6 ">
          <img
            src="/images/koala.png"
            alt="contactus"
            style={{ width: "80%", height: '480px' }}
          />
        </div>
        <div className="col-md-4">
          <h5 className="text-justify mt-2">
          Movies Library boasts an extensive collection of films from all genres and eras. Whether you’re a fan of heartwarming classics, thrilling blockbusters, thought-provoking documentaries, or indie gems, our library has something for everyone. Our catalog is continuously updated to include the latest releases and timeless favorites, ensuring that you always have something new and exciting to watch.
          </h5>
        </div>
      </div>
    </Layout>
  )
}

export default About