import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
  <div className="contact-bg">
    <h3>
      Get in Touch with Us
    </h3>
    <h2>
      contact us
    </h2>
    <div className="line">
      <div />
      <div />
      <div />
    </div>
    <p className="text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.
    </p>
  </div>
  <div className="contact-body">
    <div className="contact-info">
      <div>
        <span>
          {/* <i className="fas fa-mobile-alt" /> */}
        </span>
        <span>
          Phone No.
        </span>
        <span className="text">
          1-2392-23928-2
        </span>
      </div>
      <div>
        <span>
          {/* <i className="fas fa-envelope-open" /> */}
        </span>
        <span>
          E-mail
        </span>
        <span className="text">
          mail@company.com
        </span>
      </div>
      <div>
        <span>
          {/* <i className="fas fa-map-marker-alt" /> */}
        </span>
        <span>
          Address
        </span>
        <span className="text">
          2939 Patrick Street, Vicotria TX, United States
        </span>
      </div>
      <div>
        <span>
          <i className="fas fa-clock" />
        </span>
        <span>
          Opening Hours
        </span>
        <span className="text">
          Monday - Friday (9:00 AM to 5:00 PM)
        </span>
      </div>
    </div>
    <div className="contact-form">
      <form>
        <div>
          <input
            className="form-control"
            placeholder="First Name"
            type="text"
          />
          <input
            className="form-control"
            placeholder="Last Name"
            type="text"
          />
        </div>
        <div>
          <input
            className="form-control"
            placeholder="E-mail"
            type="email"
          />
          <input
            className="form-control"
            placeholder="Phone"
            type="text"
          />
        </div>
        <textarea
          className="form-control"
          placeholder="Message"
          rows="5"
        />
        <input
          className="send-btn"
          type="submit"
          value="send message"
        />
      </form>
      <div>
        <img
          alt=""
          src="images/contact-png.png"
        />
      </div>
    </div>
  </div>
  <div className="map">
    <iframe
      allowFullScreen
      aria-hidden="false"
      frameBorder="0"
      height="450"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp"
      style={{
        border: '0'
      }}
      tabIndex="0"
      width="100%"
    />
  </div>
  <div className="contact-footer">
    <h3>
      Follow Us
    </h3>
    <div className="social-links">
      {/* <a
        className="fab fa-facebook-f"
        href="#"
      />
      <a
        className="fab fa-twitter"
        href="#"
      />
      <a
        className="fab fa-instagram"
        href="#"
      />
      <a
        className="fab fa-linkedin"
        href="#"
      />
      <a
        className="fab fa-youtube"
        href="#"
      /> */}
    </div>
  </div>
</section>    
  );
};

export default Contact;