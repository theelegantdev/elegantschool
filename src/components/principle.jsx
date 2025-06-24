import React from "react";

export const Principle = () => {
  // Responsive styles
  const isMobile = window.innerWidth <= 768;

  const sectionStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const infoStyle = {
    flex: "1 1 300px",
    minWidth: 0,
    boxSizing: "border-box",
    padding: isMobile ? "10px 0" : "50px 20px 20px 20px",
    width: isMobile ? "100%" : "50%",
  };

  const imageStyle = {
    flex: "1 1 300px",
    minWidth: 0,
    boxSizing: "border-box",
    padding: isMobile ? "10px 0" : "20px",
    width: isMobile ? "100%" : "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imgStyle = {
    width: "100%",
    maxWidth: 500,
    height: "auto",
    maxHeight: 500,
    borderRadius: 8,
    objectFit: "cover",
  };

  return (
    <div id="principle">
      <div className="container">
        <div style={sectionStyle}>
          <div style={infoStyle}>
            <div className="about-text">
              <h3>Sir Nabeel Ahmed <small>(Principal)</small></h3>
              <p>
                Welcome to The Elegant System of Education. As the Principal, I am honored to lead a team of dedicated educators committed to nurturing the minds and character of our students. Our school stands as a beacon of academic excellence, personal growth, and community spirit. 
                <br /><br />
                At Elegant School, we believe that education is not just about textbooks and exams, but about inspiring curiosity, building confidence, and preparing students for the challenges of tomorrow. Our curriculum blends traditional values with modern teaching methods, ensuring that every child receives a holistic education.
                <br /><br />
                We take pride in our state-of-the-art facilities, experienced faculty, and a supportive environment where every student is encouraged to discover their unique talents. From academics to sports, arts to leadership, we provide opportunities for all-round development.
                <br /><br />
                I invite you to visit our campus, meet our passionate staff, and experience the vibrant learning community we have built. Together, let us shape a brighter future for your child.
                <br /><br />
              </p>
            </div>
          </div>
          <div style={imageStyle}>
            <img
              src="img/principle.jpg"
              style={imgStyle}
              className="img-responsive"
              alt="Sir Nabeel Ahmed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
