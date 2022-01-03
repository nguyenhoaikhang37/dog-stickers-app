import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
import { useRecoilState } from "recoil";
import Loading from "../../components/Loading";
import { addProductToCart, cartState } from "../../stores/Cart";

const fetcher = async (productId) => {
  const res = await axios.get(
    `https://json-s-dog-stickers.herokuapp.com/api/products/${productId}`
  );

  return res.data;
};

const Detail = () => {
  const { productId } = useParams();
  const { data: product, isLoading } = useQuery(
    ["product-detail", productId],
    () => fetcher(productId)
  );

  const [choseImg, setChoseImg] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);

  const [cart, setCart] = useRecoilState(cartState);

  const options = product?.prices.map((price) => ({
    value: price.price,
    label: price.size,
  }));

  useEffect(() => {
    if (isLoading) return;
    setChoseImg(product?.imgList[0]);
    setPrice(product?.prices[0].price);
    setSize(product?.prices[0].size);
  }, [isLoading]);

  const handlechangeImg = (img) => {
    setChoseImg(img);
  };

  const handleAddToCart = () => {
    const productItem = {
      id: product.id,
      name: product.name,
      desc: product.desc,
      size,
      price,
      img: product.imgList[0],
      quantity,
    };

    const newCart = addProductToCart(cart, productItem);

    setCart(newCart);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="detail-wrapper">
      <div className="detail-main">
        <div className="detail-img">
          <img src={choseImg} />
          <div class="section">
            {product?.imgList?.map((x) => (
              <div
                onClick={() => handlechangeImg(x)}
                class={clsx("section__item", { "active-img": x === choseImg })}
              >
                <img src={x} />
              </div>
            ))}
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
          <div className="detail-price">${price * quantity}</div>

          <div className="detail-inputs">
            <div className="detail-qty">
              <div className="qty-name">Qty.</div>
              <div className="qty-input">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, +e.target.value))}
                />
              </div>
            </div>
            <div className="detail-size">
              <div className="size-name">Size</div>
              <div className="size-input">
                <Select
                  defaultValue={options.filter(
                    (option) => option.label === "3 x 3"
                  )}
                  options={options}
                  name={price}
                  onChange={(e) => {
                    setPrice(e.value);
                    setSize(e.label);
                  }}
                />
              </div>
            </div>
          </div>

          <div onClick={handleAddToCart} className="detail-submit">
            Add To Cart
            <ion-icon name="cart"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
