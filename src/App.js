import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from './Layout';
import About from "./component/About";
import { LogoDocker, LogoGithub, LogoLinkedin, Mail } from 'react-ionicons'
import NotFound404 from "./component/404";
import Weeks from "./component/Weeks";
import Feed from "./component/Feed";
import Projects from "./component/Projects";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-screen-sm text-lg min-h-screen">
        <HashRouter basename="/">
          <Routes>
              <Route path="/" element={<Layout />}>
              <Route index element={<Feed />} />
              <Route path="about" index element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="weeks" element={<Weeks />} />
              <Route path="*" element={<NotFound404 />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
