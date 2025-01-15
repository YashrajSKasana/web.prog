import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import serList from "../assets/SerList.json";
import navInfo from "../assets/NavInfo.json";
import companyInfo from "../assets/companyInfo.json";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";
function SerLinks({ Ser }) {
  return (
    <li>
      <Link to={`/${Ser.Name}`}>{Ser.Name}</Link>
    </li>
  );
}

function QuickLinks({ NavLinks }) {
  return (
    <li>
      <Link to={`${NavLinks.to}`}>{NavLinks.text}</Link>
    </li>
  );
}
function SocialLink({ SocialLinks }) {
  return (
    <li>
      <SocialIcon url={SocialLinks.url} />
    </li>
  );
}

function Footer() {
  const serData = serList.map((Ser) => {
    return { ...Ser, id: crypto.randomUUID() };
  });
  const navLinkData = navInfo.NavLink.map((NavLink) => {
    return { ...NavLink, id: crypto.randomUUID() };
  });
  const SocialLinkData = navInfo.socialmedia.map((SocialLink) => {
    return { ...SocialLink, id: crypto.randomUUID() };
  });
  // console.log(SocialLinkData)
  const [click, setClick] = useState(true);
  const whenClicked = () => {
    setClick(!click);
  };
  return (
    <footer>
      <div className="und-lin-cont">
        <div className="under-line"></div>
      </div>
      <div className="footerCont">
        <div className="socialMedia">
          <h3>Follow us</h3>
          <ul>
            {SocialLinkData.map((SocialLinkItem) => (
              <SocialLink key={SocialLinkItem.id} SocialLinks={SocialLinkItem} />
            ))}
          </ul>
        </div>
        <div className="quickCont">
          <h3>Quick Links</h3>
          <ul>
            {navLinkData.map((NavLink) => (
              <QuickLinks key={NavLink.id} NavLinks={NavLink} />
            ))}
            <li>
              <a href={navInfo.form}>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="ContactCol">
          <h3>Contact Us</h3>
          <p>{companyInfo.Email}</p>
          <p>{companyInfo.phoneNumber}</p>
          <p>{companyInfo.ShopAddress}</p>
        </div>
      </div>
      <div className="bottom-bar">
        <p>© 2023 your company . All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
