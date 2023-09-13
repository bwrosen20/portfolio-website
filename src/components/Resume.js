import React from 'react'

function Resume() {

  const jobs = [{
    "id":1,
    "title":"Mechanical Design Engineer",
    "company":"Bendix Engineering",
    "timeframe":"11/2019-03/2022",
    "location":"Port Washington, NY",
    "bullets":["Initiated takeoff calls with clients recommending effective and energy efficient design practices",
                "Discussed complex engineering topic in layman's terms with less knowledgeable clients",
                "Kept constant contact with architects, owners and contractors to ensure seamless design coordination",
                "Designed HVAC, FP and plumbing systems for residential and small commerical buildings in NYC",
                "Worked directly under PE Matthew Bendix learning more design strategies daily",
                "Completed design and oversaw construction of two large scale 100 unit apartment buildings",
                "Traveled to different building/construction sites in NYC to survey existing conditions and inspect installations",
                "Designed and aided on over 150 projects in a 2 year span"]
  },
  {
    "id":2,
    "title":"Mechanical Design Engineer/Revit Manager",
    "company":"Epstein Architecture, Engineering and Construction",
    "timeframe":"03/2022-Present",
    "location":"New York, NY",
    "bullets":["Acted as Revit manager for Epstein New York office only a month after learning the program",
                "Designed Revit guidelines to be observed in Epstein NY",
                "Converted paper designs and older software models into Revit",
                "Initiated and kept close contact with in house architects, owners and contractors to ensure seamless coordination",
                "Completed Design of over 50 multimillion square foot factories and warehouses with complex HVAC requirements"]
  }]



  return (
  
    <div className="resumeContainer">
      <div className="resumeHeader">
        <img className="resumeImg" src={require("../me_c.jpg")} alt="Brian" />
        <h1 className="resumeName">Brian Rosen</h1>
      </div>
      <div className="levelTwoContainer">
        <div className="infoContainer">
          <h4 className="resumeTitle">Full Stack Developer</h4>
          <br/>
          <p>bwrosen20@gmail.com</p>
          <p>914-582-9734</p>
          <br/>
          <p>217 East Houston St, New York, NY
          10002, United States</p>
        </div>
        <div className="profile">
          <h2>Profile:</h2>
          <p>Hardworking full stack developer with strong ability to learn and quickly apply
            new technologies. Experienced teammate working across professional fields as a mechanical
            engineer. Carefully constructed user-friendly, efficient web applications throughout the flatiron school full stack bootcamp. Technically proficient and analytical problem solver with a calm and focused demeanor.
            </p>
        </div>
      </div>
      <div className="employmentContainer">
        <h1>Employment History</h1>
          {jobs.map((job)=>(
            <div className="jobContainer" key={job.id}>
                  <div >
                    <h4 className="jobTitle">{job.title} at {job.company}</h4>
                    <h5>{job.location}</h5>
                  </div>
                  <h4 className="jobTimeframe">{job.timeframe}</h4>
                  <ul>
                    {job.bullets.map((bullet)=>(
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
              </div>
          ))}
      </div>
    </div>
  )
}

export default Resume