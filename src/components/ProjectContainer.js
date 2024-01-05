import React from 'react'
import Project from './Project'

function ProjectContainer() {

  const projects = [
    {
    "id":2,
    "name":"Mustache Books",
    "image":"../Book-club.png",
    "description":"Mustache Books can track 1: books that a club have read, 2: reviews left by each user, 3: nominations and votes for the next book. Head to mustachebooks.com to learn more!",
    "github":"https://github.com/bwrosen20/book_club",
    "demo":"https://youtu.be/kAQW2-m6BYk"
  },
  {
    "id":4,
    "name":"Basketball Statistical Model",
    "image":"../basketball_model.png",
    "description":"Data is scraped from various endpoints across the internet and downloaded into a database where it is used to predict outcomes of upcoming games",
    "github":"https://github.com/bwrosen20/basketball_stat_model",
    "demo":"brian-rosen.com"
  },
  {
    "id":3,
    "name":"Chore Tracker",
    "image":"../chore-tracker.png",
    "description":"Chore Tracker allows admins (parents/guardians) to assign chores to their family. Users will use points earned from completing chores to earn prizes",
    "github":"https://github.com/bwrosen20/chore-tracker",
    "demo":"https://youtu.be/QbeMustachefTQbJCgc"
  },{
    "id":1,
    "name":"Jeopardy",
    "image":"../Jeopardy.png",
    "description":"Jeopardy was designed fully in React, using a a data.json file as the backend. Users are able to play a game of Jeopardy where the game will keep the score throughout and announce the winner at the end",
    "github":"https://github.com/bwrosen20/React-basketball_stat_model",
    "demo":"https://youtu.be/Q18Qx4NyOYs"
}]

  return (
    <div style={{marginTop:"2.5em"}}>
      <h1 className="heading">Projects</h1>
      {/* <p className="projectParagraph">I selected these projects to show my ability to quickly learn and apply new skills.
        I completed all three projects over a period of three months, and each displays a more advanced understanding of features and styles. 
        Hover over the pictures for a quick preview or check out my demo's and github
        repositories to learn more!
      </p> */}

      <div className="projectContainer">
        {projects.map((project)=>(
          <Project project={project} key={project.id}/> 
        ))}
      </div>
      </div>
  )
}

export default ProjectContainer