import "./reflections.css";
import logo from "../logo.svg";

const Reflections = () => {
  return (
    <header className="App-header">
      <div className="logo-row">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="text-block">
          <p style={{ fontWeight: "bold" }}>
            Principles of sustainability to create viable systems.
          </p>
          <p>
            In my current workspace, we recently had a project to uplift our
            existing software systems to be more optimised in runtime and
            processing efficiency as we were onboarding a new client that has
            over 1 million members and over 300k member transactions coming into
            the system at a daily rate. Our current services and systems only
            support clients with 300k members and 100k member transactions at a
            daily rate.
          </p>
          <p>
            I was concerned about the project size and delivering this
            functionality within the timeframe that we had, as we had to build
            and test these service enhancements within a span of 6 months. It
            was a difficult process as we had to gather all existing
            requirements from the clients and also solve the best possible way
            to achieve these enhancements and functionality given the time frame
            and technologies we had accessible. We ended up making some
            tradeoffs in functionality (i.e. client visible functionally) in
            order for us to deliver the higher priority items within the
            deadline.
          </p>
          <p>
            We also faced some difficulties when it came to testing as we
            realised there were some data misalignments that we had not built to
            account for. In order to resolve this we had to request samples of
            real data and the formats we would receive them on within our
            systems and build in accordance to that.
          </p>
          <p>
            Overall, the lesson I learnt from this was that you always have to
            plan for misoutcomes or missing requirements within the initial
            project scoping and planning phases. As there will always be
            problems and issues that arise that were not initially foreseen. I
            also learnt it is better to underpromise and over deliver when it
            comes to building out new services/products for clients as it gives
            you more leeway to negotiate re-scoping of the project if something
            goes astray.
          </p>

          <p style={{ fontWeight: "bold" }}>
            Professional Practice within intercultural and global contexts.
          </p>
          <p>
            In my current workplace we have an offshore engineering team working
            with us in the Philippines. There is a 2 hour time gap between us
            here in Sydney and over there. They also experience difficulties
            with their internet and working environment due to a lot of natural
            disasters occurring over there. In my team I try to be understanding
            and accommodating to their needs as often as possible. I do this by
            always responding to their messages/questions and calls as I know I
            will not have the time to do so outside of work when they are still
            working. I also am accommodating and try to pick up their work in
            times of hardships i.e. if their city is flooding which has happened
            recently.
          </p>
          <p>
            From this experience I have learnt that there are a number of
            different lifestyles that you must accommodate to during work and
            work should not only be viewed as work, there are all different
            types of people with different lifestyles and hardships that you
            must accommodate and be prepared for.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Reflections;
