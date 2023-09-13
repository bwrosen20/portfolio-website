import React from 'react'
import Project from './Project'

function ProjectContainer() {

  const projects = [{
    "id":1,
    "name":"Jeopardy",
    "image":"../Jeopardy.png",
    "description":"Jeopardy was designed fully in React, using a a data.json file as the backend. Users are able to play a game of Jeopardy where the game will keep the score throughout and announce the winner at the end"
  },{
    "id":2,
    "name":"Brian's Book Club",
    "image":"../Book-club.png",
    "description":"Brian's Book Club can track 1: books that a club have read, 2: reviews left by each user, 3: nominations and votes for the next book"
  },{
    "id":3,
    "name":"Chore Tracker",
    "image":"../chore-tracker.png",
    "description":"Chore Tracker allows admins (parents/guardians) to assign chores to their family. Users will use points earned from completing chores to earn prizes"
  }]

  return (
    <div>
      <h1 className="heading">Projects</h1>
      <p className="projectParagraph">I selected these projects to show my ability to quickly learn and apply new skills.
        These three projects were completed over a period of 3 months, and each displays a more advanced understanding of features and styles. 
        Hover over the pictures for a quick preview or check out my demo's and github
        repositories to learn more!
      </p>

      <div className="projectContainer">
        {projects.map((project)=>(
          <Project project={project}/> 
        ))}
      </div>
      </div>
  )
}

export default ProjectContainer