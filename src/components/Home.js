import React from 'react'

function Home() {
  return <div className="info">
        <div className="headers">
            <h1>HEY, I'M BRIAN.</h1>
            <p >I'm a full-stack web-developer with a passion for coding.
                It doesn't hurt to get paid to do what you love.
            </p>
            <p >
                I'm looking for a job in web-development. Check out my project portfolio
                and resume!
            </p>
        </div>

        {/* <div className="blurbContainer">
            <p className="blurb">Hey man</p>
        </div> */}

        <img src={require("../me_c.jpg")} alt="Brian" className="aboutImage"/>
</div>
}

export default Home