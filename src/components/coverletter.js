import "./coverletter.css";
import logo from "../logo.svg";

const Coverletter = () => {
  return (
    <header className="App-header">
      <div className="logo-row">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="text-block">
          <p>To whomever this may concern,</p>
          <p>
            I am writing to express my interest in the Senior Backend /
            Full-Stack Engineer position at Novus. With extensive experience in
            building scalable, product-driven systems using TypeScript, Node.js,
            and React, I am excited about the opportunity to contribute to a
            platform that has a genuine positive impact on users globally.
          </p>
          <p>
            I have a strong track record of designing and delivering backend and
            full-stack solutions in fast-paced environments, with a focus on
            maintainable, well-tested code. My collaborative mindset and
            experience across cloud infrastructure, APIs, and frontend
            integration allow me to contribute effectively across the full
            stack.
          </p>
          <p>
            In my current role, our payments platform needed to scale rapidly to
            handle new advisor payment types while maintaining reliability. I
            was responsible for designing and implementing backend services to
            support these new payment flows.I built modular, reusable services
            using TypeScript and Node.js, designed database schemas in Postgres
            with careful indexing for performance, and implemented end-to-end
            tests to ensure reliability. I also collaborated closely with the
            frontend team to integrate APIs efficiently.The new services were
            delivered on time, improved payment processing speed by 30%, and
            enabled seamless onboarding of new user groups without any critical
            downtime.
          </p>
          <p>
            While working on an internal audit logging service, I identified a
            gap in how transaction data was being validated across services. I
            took the initiative to propose and implement a more robust
            validation system.I conducted knowledge-sharing sessions with my
            team, wrote clear documentation for the new validation logic, and
            iteratively refined the solution based on peer feedback. I also
            explored new tools and patterns to improve logging reliability. The
            service became more robust, reduced errors by 25%, and was adopted
            as a reference architecture for future services across the platform.
          </p>
          <p>
            I contributed to a customer-facing dashboard used by thousands of
            clients daily. My goal was to improve both performance and usability
            while adding new reporting features.I optimized backend queries,
            refactored API endpoints for better efficiency, and collaborated
            with UX designers to implement intuitive UI elements. I also
            monitored performance metrics post-launch to ensure improvements
            were measurable. The enhancements led to a 40% reduction in page
            load times, increased client engagement, and received positive
            feedback from end-users and stakeholders alike.
          </p>
          <p>
            I am excited about the opportunity to bring my experience in
            TypeScript, Node.js, and full-stack engineering to a platform with
            real-world impact. I would welcome the chance to discuss how I can
            contribute to your team and help shape the next phase of your
            product.
          </p>
          <p>Thank you for your time and consideration.</p>
          <p>Sincerely, Michelle Chen</p>
        </div>
      </div>
    </header>
  );
};

export default Coverletter;
