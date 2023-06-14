import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from './Layout';
import About from "./component/About";
import NotFound404 from "./component/404";
import Weeks from "./component/Weeks";
import Feed from "./component/Feed";
import Projects from "./component/Projects";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App p-2">
      <Header />
      <main className="container mx-auto max-w-screen-sm text-lg min-h-[70vh] relative">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
