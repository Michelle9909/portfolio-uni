import logo from "./logo.svg";
import "./App.css";
import Header from "./components/navbar";
import Resume from "./components/resume";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <header className="App-header">
              <div className="logo-row">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="text-block">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla non cumque nobis ab illo consequatur unde accusantium
                    excepturi deleniti culpa eos mollitia, quisquam, tenetur
                    maiores rerum reiciendis iusto in eaque voluptatibus maxime
                    quo a facilis. Vel eum maxime quos numquam dicta quas. Quia
                    numquam cumque dolore nulla pariatur quisquam fugiat labore
                    placeat autem cupiditate, voluptates omnis! Quasi soluta
                    perspiciatis excepturi sunt qui atque sint dolorum corporis
                    totam recusandae labore sapiente vitae facilis minima
                    eveniet amet rerum vel ducimus quae non neque nesciunt
                    voluptatum, porro a. Commodi, repellat rem aspernatur
                    voluptas quis exercitationem amet quibusdam quas tempora et?
                    Cupiditate, voluptatem nihil.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla non cumque nobis ab illo consequatur unde accusantium
                    excepturi deleniti culpa eos mollitia, quisquam, tenetur
                    maiores rerum reiciendis iusto in eaque voluptatibus maxime
                    quo a facilis. Vel eum maxime quos numquam dicta quas. Quia
                    numquam cumque dolore nulla pariatur quisquam fugiat labore
                    placeat autem cupiditate, voluptates omnis! Quasi soluta
                    perspiciatis excepturi sunt qui atque sint dolorum corporis
                    totam recusandae labore sapiente vitae facilis minima
                    eveniet amet rerum vel ducimus quae non neque nesciunt
                    voluptatum, porro a. Commodi, repellat rem aspernatur
                    voluptas quis exercitationem amet quibusdam quas tempora et?
                    Cupiditate, voluptatem nihil.
                  </p>
                </div>
              </div>
            </header>
          }
        />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/coverletter" element={<CoverLetter />} />
        <Route path="/reflections" element={<Reflections />} /> */}
      </Routes>
    </div>
  );
}

export default App;
