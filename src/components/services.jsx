import React from "react";

export const Services = (props) => {
  const renderServices = (data) => {
    const rows = [];
    for (let i = 0; i < data.length; i += 3) {
      const rowItems = data.slice(i, i + 3);
      rows.push(
        <div className="row" key={i}>
          {rowItems.map((d, index) => (
            <div key={`${d.name}-${index}`} className="col-md-4">
              <i className={d.icon}></i>
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Features</h2>
          <p style={{marginTop: "40px"}}>
            At The Elegant System of Education, we focus on more than academics — we nurture creativity, confidence, and a strong sense of community. Our innovative programs and supportive environment help every student thrive, preparing them for a bright and successful future.
          </p>
        </div>
        {props.data ? renderServices(props.data) : "loading"}
      </div>
    </div>
  );
};
