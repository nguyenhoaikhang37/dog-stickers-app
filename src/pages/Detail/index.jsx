import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";

const fetcher = async (productId) => {
  const res = await axios.get(
    `https://json-s-dog-stickers.herokuapp.com/api/products/${productId}`
  );

  return res.data;
};

const Detail = () => {
  const { productId } = useParams();
  const { data: product } = useQuery(["product-detail", productId], () =>
    fetcher(productId)
  );

  const options = product?.prices.map((price) => ({
    value: price.price,
    label: price.size,
  }));

  return (
    <div className="detail-wrapper">
      <div className="detail-main">
        <div className="detail-img">
          <img src={product?.imgList[0]} />
          <div class="section">
            <div class="section__item">
              <img src={product?.imgList[0]} />
            </div>
            <div class="section__item">
              <img src={product?.imgList[0]} />
            </div>
            <div class="section__item">
              <img src={product?.imgList[0]} />
            </div>
            <div class="section__item">
              <img src={product?.imgList[0]} />
            </div>
          </div>
        </div>
        <div className="detail-info">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="detail-btn">
              <ion-icon name="arrow-back-outline"></ion-icon>
              <div>Back To All Product</div>
            </div>
          </Link>
          <div className="detail-name">{product?.name}</div>
          <div className="detail-desc">{product?.desc}</div>
          <div className="detail-price">${product?.prices[0].price}</div>

          <div className="detail-inputs">
            <div className="detail-qty">
              <div className="qty-name">Qty.</div>
              <div className="qty-input">
                <input type="number" value={1} />
              </div>
            </div>
            <div className="detail-size">
              <div className="size-name">Size</div>
              <div className="size-input">
                <Select options={options} />
              </div>
            </div>
          </div>

          <div className="detail-submit">
            Add To Cart
            <ion-icon name="cart"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
