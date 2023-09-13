import NavBar from './NavBar'
import About from './About'
import ProjectContainer from './ProjectContainer'
import Resume from './Resume'
import Home from './Home'
import { Route, Switch } from 'react-router-dom'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import '../App.css';
import { library } from '@fortawesome/fontawesome-svg-core'

function App() {
  return (
    <div className="appContainer">
    <NavBar />
    <Switch>
      <Route exact path = '/projects'>
          <ProjectContainer />
      </Route>
      <Route exact path = '/resume'>
          <Resume />
      </Route>
      <Route exact path = '/about'>
          <About />
      </Route>
      <Route path = '/'>
          <Home />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
library.add(fab,fas,far)