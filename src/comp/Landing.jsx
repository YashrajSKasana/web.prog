import "./Landing.css";
import landingData from "../assets/landingData.json";

function Landing() {
  return (
    <div>
      <div className="container">
        <header>
          <div className="content">
            <h1>
              <span>Get Quick</span>
              <br />
              Repair Services
            </h1>
            <p>
              {landingData.paragraph}
            </p>
            <button className="btn">Get Services</button>
          </div>
          <div className="image">
            <span className="image__bg" />
            <img src={`images/${landingData.headerImg}`} alt="header image" />
            <div className="image__content image__content__1">
              <span>
              </span>
              <div className="details">
                <h4>1520+</h4>
                <p>Active Clients</p>
              </div>
            </div>
            <div className="image__content image__content__2">
              <ul>
                <li>
                  <span>
                    Expert, Repair-man
                  </span>
                </li>
                <li>
                  With years of esperance.
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Landing;
