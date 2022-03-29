import React from "react";
import "./SchemeInfo.css";
const SchemeInfo = ({ index, title, description, link }) => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${index}`}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${index}`}
            aria-expanded="true"
            aria-controls={`collapse${index}`}
          >
            <b>
              <a href="/">{title}</a>
            </b>
          </button>
        </h2>
        <div
          id={`collapse${index}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${index}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {description} <a href={link}>Apply</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeInfo;
