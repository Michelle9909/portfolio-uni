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
                    I am a passionate and motivated Senior Software Engineer who
                    has 5 years professional experience within the financial
                    technology industry. I have worked with a wide range of
                    technologies and systems, some of which include: distributed
                    systems, RESTful API’s, microservice architecture, event
                    driven architecture, database modelling, batch processing
                    and many more. I have a deep and extensive knowledge of
                    product driven design and a strong record of delivering
                    impactful solutions within the financial technology sector.
                    I engineer smart and simple software solutions for products
                    that aim to solve complex problems within the industry.
                  </p>
                  <p>
                    In terms of career progression, I have recently taken an
                    interest in leveraging AI and ML within my skillset in order
                    to produce more robust and data driven engineering solution
                    design. I wish to extend my knowledge within that area into
                    a product space outside of the financial sector. I am keen
                    to understand more problems that exist in the technology
                    sector to build upon my problem solving capacity. I also
                    enjoy game design and development in my personal time and
                    would also be interested in exploring that space
                    professionally.
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
