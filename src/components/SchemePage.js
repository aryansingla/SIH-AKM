import React from "react";
import styled from "styled-components";
import SchemeInfo from "./SchemeInfo";
import { useLocation, Link } from "react-router-dom";
import "./SchemePage.css";
import { useEffect, useState } from "react";
import ApiService from "../service/apiService";
import { connect } from "react-redux";
import { setSchemes as setSchemeAction } from "../redux/action/scheme";
import { setCategory as setCategoryAction } from "../redux/action/filter";
import { setState as setStateAction } from "../redux/action/filter";

const SchemePage = ({
  schemes,
  category,
  stateSelected,
  setSchemeAction,
  setStateAction,
  setCategoryAction,
}) => {
  const search = useLocation().search;
  const usp = new URLSearchParams(search);

  useEffect(() => {
    setStateAction(usp.get("state"));
    setCategoryAction(usp.get("category"));
  }, []);

  useEffect(() => {
    getSchemes(category, stateSelected);
  }, [stateSelected, category]);

  const getSchemes = async (category = null, stateSelected = null) => {
    const response = await new ApiService().getSchemes(category, stateSelected);

    if (response.status === "ok") {
      setSchemeAction(response.response);
    } else {
      alert(response.error);
    }
  };

  const categoryData = [
    { name: "General", id: "1", value: "general" },
    { name: "Women", id: "2", value: "women" },
    { name: "Student", id: "3", value: "student" },
    { name: "Physically Challenged", id: "4", value: "pc" },
    { name: "Farmer", id: "5", value: "farmer" },
  ];
  const statesData = [
    { name: "Rajasthan", id: "1", value: "rajasthan" },
    { name: "Himachal Pradesh", id: "2", value: "himachal pradesh" },
  ];

  return (
    <>
      <div className="Scheme-top">
        <Ctitle>
          Schemes
          <ProfileButton>
            <a>
              <Link to="/profile">Go to Profile</Link>
            </a>
          </ProfileButton>
          <SchemeTop>
            <div class="dropdown mx-2">
              <button
                style={{ backgroundcolor: "#052132" }}
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {category === null ? "All" : category}
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton1"
              >
                {categoryData.map((d) => (
                  <li key={d.id}>
                    <button
                      className="dropdown-item"
                      onClick={() => setCategoryAction(d.value)}
                    >
                      {d.name}
                    </button>
                  </li>
                ))}
                <hr className="dropdown-divider" />

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setCategoryAction(null)}
                  >
                    All
                  </button>
                </li>
              </ul>
            </div>

            <div class="dropdown">
              <button
                style={{ backgroundcolor: "#052132" }}
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {stateSelected === null ? "All" : stateSelected}
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                {statesData.map((d) => (
                  <li key={d.id}>
                    <button
                      className="dropdown-item"
                      onClick={() => setStateAction(d.value)}
                    >
                      {d.name}
                    </button>
                  </li>
                ))}
                <hr className="dropdown-divider" />

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setStateAction("central")}
                  >
                    Central
                  </button>
                </li>
                <hr className="dropdown-divider" />

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setStateAction(null)}
                  >
                    All
                  </button>
                </li>
              </ul>
            </div>
          </SchemeTop>
        </Ctitle>
      </div>
      <div className="Scheme-content">
        {schemes.map((scheme, i) => (
          <SchemeInfo
            key={scheme._id}
            id={scheme._id}
            index={i}
            title={scheme.title}
            description={scheme.description}
            link={scheme.link}
          />
        ))}
      </div>
    </>
  );
};

const Ctitle = styled.div`
  color: #052132;
  font-weight: 800;
  font-size: 40px;
  background-color: #f1f1f155;
  padding: 25px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dropdown = styled.div`
  margin-left: 65%;
  padding-bottom: 10px;
  padding-top: -30px;
`;
const SchemeTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileButton = styled.div`
  font-size: 20px;
  background-color: rgb(3 105 161);
  color: white;
  padding: 7px;
  border-radius: 10px;
  margin-left: 70%;
`;

const mapStateToProps = (state) => {
  return {
    schemes: state.scheme.schemes,
    category: state.filter.category,
    stateSelected: state.filter.stateSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSchemeAction: (schemes) => dispatch(setSchemeAction(schemes)),
    setStateAction: (stateSelected) => dispatch(setStateAction(stateSelected)),
    setCategoryAction: (category) => dispatch(setCategoryAction(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchemePage);
