import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import serList from "../assets/SerList.json";

function SerCard({ Ser }) {
  return (
    <article>
      <Link to={`/${Ser.Name}`}>
        <div className="article-wrapper">
          <figure>
            <img src={`/images/${Ser.img}`} alt={Ser.Name} />
          </figure>
          <div className="article-body">
            <h2>{Ser.Name}</h2>
            <p>{Ser.cardText}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
function Services({ HadingOff = false }) {
  const serData = serList.map((Ser) => {
    return { ...Ser, id: crypto.randomUUID() };
  });
  return (
    <section className="ServiceSec">
      <div className="title_sec1" style={HadingOff ? { display: "none" } : {}}>
        <h1>Services</h1>
        <div className="under-line"></div>
      </div>

      <div className="services">
        <section className="articles">
          {serData.map((Ser) => (
            <SerCard key={Ser.id} Ser={Ser} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default Services;
