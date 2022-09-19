const Footer = () => {
  return (
    <footer className="group-footer">
      <div className="group-div1">
        <div className="group-div1">
          <footer className="rectangle-footer" />
          <p className="buzzfeed-inc-p">© 2022 BuzzFeed, Inc</p>
          <b className="get-the-homechef16net-newslet">
            Get the Homechef16.net Newsletter
          </b>
          <p className="follow-us-p">Follow us</p>
          <p className="email-address-required">Email address (required)</p>
          <img
            className="rectangle-icon12"
            alt
            src="./img/rectangle-1838.svg"
          />

          <div className="sign-up-b btn-sign-in">Sign up</div>
          <input
            className="your-email-address"
            type="text"
            defaultvalue="email-address-input"
            placeholder="Enter Email Address"
          />
          <img
            className="outlinebrandsinstagram-icon"
            alt
            src="./img/outlinebrandsinstagram.svg"
          />
          <img
            className="outlinebrandsfacebook-icon"
            alt
            src="./img/outlinebrandsfacebook.svg"
          />
          <img
            className="outlinebrandstumblr-icon"
            alt
            src="./img/outlinebrandstumblr.svg"
          />
          <img
            className="outlinebrandsyoutube-icon"
            alt
            src="./img/outlinebrandsyoutube.svg"
          />
          <strong className="send-feedback-privacy-policy">
            <p className="send-feedback-p">Send feedback</p>
            <p className="send-feedback-p">Privacy Policy</p>
            <p className="send-feedback-p" />
            <p className="send-feedback-p">User Agreement</p>
            <p className="send-feedback-p">&nbsp;</p>
            <p className="accessibility-statement-p">Accessibility Statement</p>
          </strong>
          <a className="rectangle-a" href="#appstore" />
          <a className="rectangle-a1" href="#googleplay" />
          <img
            className="content-icon1"
            alt="content"
            src="./img/content1.svg"
          />
          <h1 className="homechef16net-h1" id="footer-title">
            HOMECHEF16.NET
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
