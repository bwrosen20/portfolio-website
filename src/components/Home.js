import React from 'react'

function Home() {
  return <div className="info">
        <div className="headers">
            <h1>Brian Rosen</h1>
            <h3 >Full Stack Web Developer</h3>
        </div>
        {/* <div className="blurbContainer">
            <p className="blurb">Hey man</p>
        </div> */}

        <img src={require("../me_c.jpg")} alt="Brian" className="aboutImage"/>
</div>
}

export default Home