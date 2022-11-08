import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/home"
import Post from "./pages/post"
// import CMS from 'netlify-cms-app'
// // Initialize the CMS object
// CMS.init()
// // Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('my-template', MyTemplate)

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/:id" render={props => <Post {...props} />} />

    </Router>

    
  );
}

export default App;
