import styled from "styled-components";
import CategoryCard from "./CategoryCard";

import "./categoryCard.css";

import farmer from "../assets/farmer.png";
import pc from "../assets/pc.png";
import women from "../assets/women.png";
import general from "../assets/general.png";
import student from "../assets/student.png";
import collage1 from "../assets/collage1.jfif";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const CategoryPage = (props) => {
  const cardsData = [
    {
      title: "General",
      img: general,
    },
    {
      title: "Farmer",
      img: farmer,
    },
    {
      title: "Student",
      img: student,
    },
    {
      title: "Women",
      img: women,
    },
    {
      title: "Physically Challenged",
      img: pc,
    },
  ];
  return (
    <>
      <div className="Home-top">
        <div className="Home-grid">
          <div className="Home-left">
            <h2>AKM-Apno ki Madad</h2>
            <p>
              This website helps rural people to identify their eligibility in
              various Govt. Schemes launched by Central Govt. and State
              Governments of India. User can check various schemes availble and
              their elgibility , details &amp; advanatges of all schemes shown
              and then they will be redirected to official link if it is in
              online mode.If it is in Offline mode , then path will be shown for
              how to avail that scheme.
            </p>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login" style={{ marginLeft: "10px" }}>
              Log In
            </Link>
          </div>

          <div className="Home-right">
            <div>
              <img src={collage1} alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Ctitle>Categories</Ctitle>
        <div className="categoryContainer">
          {cardsData.map((card) => (
            <CategoryCard
              className="d-inline-block"
              title={card.title}
              imgsrc={card.img}
            />
          ))}
        </div>
      </div>
      <div>
        <Ctitle>Check Eligibility</Ctitle>
        <div className="Home-bottom">
          <div className="Home-grid">
            <div className="Home-right">
              <div>
                <img src={collage1} alt=""></img>
              </div>
            </div>
            <div className="Home-left">
              <p className="reverse-p">
                This website helps rural people to identify their eligibility in
                various Govt. Schemes launched by Central Govt. and State
                Governments of India. User can check various schemes availble
                and their elgibility , details &amp; advanatges of all schemes
                shown and then they will be redirected to official link if it is
                in online mode.If it is in Offline mode , then path will be
                shown for how to avail that scheme.
              </p>
              <Link to="/scheme">Check</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Ctitle = styled.div`
  color: #052132;
  font-weight: 800;
  font-size: 40px;
  text-align: center;
  background-color: #f1f1f155;
  padding: 25px;
  margin-bottom: 40px;
`;
export default CategoryPage;
