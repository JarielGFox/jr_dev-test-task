//default card style for products

const Card = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={product.gallery[0]}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">$ {product.prices[0].amount}</p>
        <p className="card-text">{product.brand}</p>
        <p className="card-text">Category: {product.category}</p>
        <button className="btn btn-primary">Go fuck yourself</button>
      </div>
    </div>
  );
};

export default Card;
