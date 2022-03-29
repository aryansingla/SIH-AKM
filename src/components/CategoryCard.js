import "./categoryCard.css";

const CategoryCard = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title"> {props.title} </h4>
        <a
          href={`/scheme?category=${props.title.toLowerCase()}`}
          className="btn btn-outline-dark"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;
