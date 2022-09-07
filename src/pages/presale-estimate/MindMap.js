import React from "react";

import Slide from "../../assets/images/Group 1321314499.jpg";

const MindMap = () => {
  return (
    <div className="container mind-map">
      <div className=" mind-map__title">
        <span>Structure of The Project logic</span>
      </div>
      <div>
        <img
          style={{
            overflow: "scroll",
            padding: "2%",
            width: "100%",
            objectFit: "cover",
          }}
          src={Slide}
          alt="slide"
        />
      </div>

      {/* <div className=" mind-map__title">
        <span>Structure of The Project logic</span>
      </div>
      <div className="mind-map__structure slide">
        <div className="slide-title">
          <span>Application structure</span>
        </div>
        <div className="slide-content">
          <div className="slide-content__section buyer">
            <div className="slide-content__section-header">
              <span
                style={{
                  width: "215px",
                  height: "51px",
                  fontSize: "18px",
                  background: "#ffe7f8",
                  border: "1px solid #f11869",
                  borderRadius: "8px",
                  color: "#f11869",
                }}
              >
                Buyer area
              </span>
            </div>
            <div className="slide-content__section-content row-block">
              <div className="row-block__first">
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "118px",
                    background: "#ffe7f8",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#f11869" }}>
                    Buyer company:
                  </span>
                  <p style={{ color: "#f11869" }}>- Clinic</p>
                  <p style={{ color: "#f11869" }}>- Pharmacy</p>
                  <p style={{ color: "#f11869" }}>- Hospital</p>
                  <p style={{ color: "#f11869" }}>- Vet</p>
                  <p style={{ color: "#f11869" }}>- Laboratory</p>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#ffe7f8",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#f11869" }}>
                    Company profile
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#ffe7f8",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#f11869" }}>
                    Buyer staff management
                  </span>
                </div>
              </div>
              <div className="row-block__second">
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#ffe7f8",
                    borderRadius: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#f11869",
                      textAlign: "center",
                    }}
                  >
                    Independent Healthcare Proffecional
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#ffe7f8",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#f11869" }}>
                    Independent HCP profile
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-content__section supplier">
            <div className="slide-content__section-header">
              <span
                style={{
                  width: "215px",
                  height: "51px",
                  background: "#edf2fe",
                  border: "1px solid #4675d3",
                  borderRadius: "8px",
                  fontSize: "18px",
                  color: "#4675d3",
                }}
              >
                Supplier area
              </span>
            </div>
            <div className="slide-content__section-content">
              <div className="row-block__first">
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#ffebd3",
                    borderRadius: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "17px",
                      color: "#d37400",
                      textAlign: "center",
                    }}
                  >
                    Common community area
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "74px",
                    background: "#ffebd3",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#d37400" }}>
                    Community news:
                  </span>
                  <p style={{ color: "#d37400" }}>- Posts</p>
                  <p style={{ color: "#d37400" }}>- Product finder request</p>
                  <p style={{ color: "#d37400" }}>- Questions</p>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#ffebd3",
                    borderRadius: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#d37400",
                      textAlign: "center",
                    }}
                  >
                    Requests for Product information
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#ffebd3",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#d37400" }}>
                    Suppliers search (list. map)
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#ffebd3",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#d37400" }}>
                    EUDRA dashboard
                  </span>
                </div>
              </div>
              <div className="row-block__second">
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#f2edfe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#5f3aae" }}>
                    Dashboard
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#f2edfe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#5f3aae" }}>
                    Quote requests
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#f2edfe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#5f3aae" }}>
                    Clients network
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#f2edfe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#5f3aae" }}>
                    Products database
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#f2edfe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#5f3aae" }}>
                    Products comparison
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#f2edfe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#5f3aae" }}>
                    Orders
                  </span>
                </div>
              </div>
              <div className="row-block__third">
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#edf2fe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#3a61ae" }}>
                    Company profile
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#edf2fe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#3a61ae" }}>
                    Company CEO
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#edf2fe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#3a61ae" }}>
                    Company info
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#edf2fe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#3a61ae" }}>
                    Facilities
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#edf2fe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#3a61ae" }}>
                    Products & Services
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "168px",
                    height: "51px",
                    background: "#edf2fe",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#3a61ae" }}>
                    Staff Management
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-content__section admin">
            <div className="slide-content__section-header">
              <span
                style={{
                  width: "215px",
                  height: "51px",
                  background: "#e6f8f0",
                  border: "1px solid #06bc65",
                  borderRadius: "8px",
                  fontSize: "18px",
                  color: "#06bc65",
                }}
              >
                Admin panel
              </span>
            </div>
            <div className="slide-content__section-content">
              <div className="row-block__first" style={{ width: "215px" }}>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "215px",
                    height: "51px",
                    background: "#e6f8f0",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#06bc65" }}>
                    EUDRA database import
                  </span>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "215px",
                    height: "120px",
                    background: "#e6f8f0",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#06bc65" }}>
                    Buyer company:
                  </span>
                  <p style={{ color: "#06bc65" }}>- Profile approve</p>
                  <p style={{ color: "#06bc65", textAlign: "center" }}>
                    - Updating the documents/facilities for the approved profile
                  </p>
                  <p style={{ color: "#06bc65" }}>
                    - Publish/Unpublish a Supplier
                  </p>
                  <p style={{ color: "#06bc65" }}>- Ban/Unbun a Supplier</p>
                  <p style={{ color: "#06bc65" }}>- Delete profile</p>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "215px",
                    height: "63px",
                    background: "#e6f8f0",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#06bc65" }}>
                    Buyers management:
                  </span>
                  <p style={{ color: "#06bc65" }}>- Delete a Buyer</p>
                  <p style={{ color: "#06bc65" }}>
                    - Publish/Unpublish a Buyer
                  </p>
                </div>
                <div
                  className="blocks__block-subblock"
                  style={{
                    width: "215px",
                    height: "51px",
                    background: "#e6f8f0",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "#06bc65" }}>
                    Orders list rewiew
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MindMap;
