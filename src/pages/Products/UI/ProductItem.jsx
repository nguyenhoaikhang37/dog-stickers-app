import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="product-box">
      <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
        <div className="product-img">
          <img src={product.imgList[0]} />
        </div>
        <div className="product-content">
          <div className="product-name">{product.name}</div>
          <div className="product-desc">{product.desc}</div>
          <div className="product-price">${product.prices[0].price}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
