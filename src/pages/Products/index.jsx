import axios from "axios";
import { useQuery } from "react-query";
import ProductItem from "./UI/ProductItem";

const fetcher = async () => {
  const res = await axios.get("http://localhost:4000/products");

  return res.data;
};

const Products = () => {
  const { data: products, isLoading } = useQuery("products", fetcher);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="wrapper">
      <div className="body-heading">Get Doggy Stickers!</div>
      <div className="body-title">
        Times are tough. Liven up your home with some cute Doggy Stickers. 🐶
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
