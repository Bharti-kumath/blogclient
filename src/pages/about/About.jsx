import "./about.css";
import about from "../../Images/blog1.jpg";
import Footer from "../../components/Footer/footer";
export default function About() {
  return (
    <div style={{ backgroundColor: "#95cde2"  }}>
      <div className="first">
        <h2 className="abouthead">About Us </h2>
        <p>
          "Beyond The Blog" is created to connect people's thoughts to everyone
          It is a blogging site for everyone to share their knowledge,
          perspectives, ideas, experiences, and much more. It allows you to
          build and control your online identity. Aside from social network
          profiles, people who are searching for your name can find your blog or
          your author page on other blogs. That information will help people to
          get to know you better by reading your work.When you create your own
          blog, you are creating the opportunity to build traffic from a whole
          new audience.let's all bring our own magic and uniqueness into the
          world. Our goal in life is to discover what that is, embrace it and
          share it.
        </p>
      </div>
      <div className="second">
        <img alt="" src={about}></img>
        <div className="inner">
          <h2>Start Your Journey with</h2>
          <h1>Beyond the Blog</h1>
        </div>
      </div>
<Footer />
    </div>
  );
}
