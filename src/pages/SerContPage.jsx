import "./SerContPage.css";
import serList from "../assets/SerList.json";
import NavInfo from "../assets/NavInfo.json";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const serData = serList.map((Ser) => {
  return { ...Ser, id: crypto.randomUUID() };
});

function SerLinks({ Ser }) {
  return (
    <li>
      <Link to={`/${Ser.Name}`}>{Ser.Name}</Link>
    </li>
  );
}

function SerContPage() {
  const { serName } = useParams();
  const pageData = serList.find((item) => {
    return item.Name === serName;
  });

  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "16px Arial";
    const textWidth = context.measureText(pageData.Name).width;
    setUnderlineWidth(textWidth);
  }, [pageData.Name]);

  useEffect(() => {
    fetch(`/serviceParagraphText/carpenter_service.txt`)
      .then((response) => response.text())
      .then((text) => {
        setParagraph(text);
      })
      .catch((error) => {
        console.error("Error loading text file:", error);
      });
  }, [pageData.paragraph]);

  return (
    <div className="singleService">
      <div className="SingleSerHading">
        <h1>{pageData.Name}</h1>
      </div>
      <div
        className="under-line"
        style={{ width: `${underlineWidth}px` }}
      ></div>
      <div className="serviceContainer">
        <div className="serviceInfo">
          <div className="serviceInfoImage">
            <img src={`/images/${pageData.img}`} alt={pageData.img} />
          </div>
          <div className="serviceInfoText">
            <a
              href={NavInfo.form}
              className="ContactLink"
            >
              Contact to this get service <span>{">>"}</span>
            </a>
            <p>{paragraph}</p>
          </div>
        </div>

        <div className="quickAccessServiceList">
          <h2>Services</h2>
          <div className="under-line"></div>
          <div>
            <ul>
              {serData.map((Ser) => (
                <SerLinks key={Ser.id} Ser={Ser} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SerContPage;
