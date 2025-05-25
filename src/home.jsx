import { useState, useEffect } from "react";
import "./home.scss";
import { avatars, data } from "./context/data";
import { RiTwitterXFill } from "react-icons/ri";
import shop from "./assets/shop.png";
import { Button } from "./components/button.components";
import { GalacticModal } from "./components/modal";
import { formatPrice } from "./context/fetch.service";

export function App() {
  const [selectedCategory, setSelectedCategory] = useState("STATIONS");
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const user_info = JSON.parse(localStorage.getItem("user_info") || "{}");
  const [userInfo, setUserInfo] = useState(
    user_info.id
      ? user_info
      : {
          name: avatars[2].name,
          id: Math.floor(Math.random() * 1000000),
          balance: 100000,
          avatar: avatars[2].image,
          desc: avatars[2].desc,
          edit: false,
        }
  );
  const [activeProduct, setActiveProduct] = useState(null);

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
    const filteredProducts = data.products.filter(
      (product) => product.category === category
    );
    setProducts(filteredProducts);
  };
  const handleCategoryClick = (category) => {
    filterProductsByCategory(category);
  };

  useEffect(() => {
    filterProductsByCategory(data.categories[0]);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    if (activeProduct) {
      const updatedBalance = userInfo.balance - activeProduct.price;
      setUserInfo({ ...userInfo, balance: updatedBalance });
      localStorage.setItem(
        "user_info",
        JSON.stringify({ ...userInfo, balance: updatedBalance })
      );
    } else {
      setUserInfo({ ...userInfo, edit: false });
      localStorage.setItem("user_info", JSON.stringify(userInfo));
    }
    setActiveProduct(null);
  };

  return (
    <div className="w100 df fdc aic ui-wrapper">
      <header className="w100 df aic jcsb main-header">
        <div className="header-button">
          <h1>GALACTIC APES</h1>
        </div>
        <div className="df aic gap-20">
          <div className="df aic gap-15 header-button">
            FOLLOW US <RiTwitterXFill />
          </div>
          <div className="header-button">CLONE & CONNECT</div>
        </div>
      </header>
      <main className="w100 df fw gap-20 main-content">
        <figure className="w100 df aic jcc">
          <img src={shop} alt="shop title" />
        </figure>
        <aside className="df fdc gap-15 sidebar">
          <h2>Categories</h2>
          <ul className="df fdc gap-20">
            {data.categories.map((category, index) => (
              <li
                key={index}
                className={`mini-card ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </aside>
        <section className="df fw gap-20 frame cards-section">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={product.id}
                className="df fdc aic gap-20 product-card main-card"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={100 * index}
                onClick={() => {
                  setActiveProduct(product);
                  setIsOpen(true);
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                />
                <h4 className="df fdc gap-10">{product.name}</h4>
                <p>{formatPrice(product.price)}</p>
                <Button text={"B U Y"} />
              </div>
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
          <span className="corner-right-bottom"></span>
          <span className="corner-left-bottom"></span>
        </section>
        <aside className="df fdc aic gap-20 profile">
          <h2>Profile</h2>
          <div className="df fdc gap-5">
            <span>Your Balance: </span>
            <span className="mini-card">
              <span>{formatPrice(userInfo.balance)} $cosm</span>
            </span>
          </div>
          <div className="df fdc gap-10">
            <img src={userInfo.avatar} alt="Avatar" className="avatar" />
            <h3>{userInfo.name}</h3>
            <p>ID: {userInfo.id}</p>
            <p>{userInfo.desc}</p>
            <span
              className="mini-card"
              onClick={() => {
                setUserInfo({ ...userInfo, edit: !userInfo.edit });
                setIsOpen(true);
              }}
            >
              <span>RECONSTRUCT</span>
            </span>
          </div>
        </aside>
      </main>
      <GalacticModal
        isOpen={isOpen}
        onClose={closeModal}
        title={activeProduct?.name ? activeProduct?.name : "Edit Profile"}
        btn_t={activeProduct?.name ? "BUY NOW" : "EDIT"}
      >
        {!activeProduct?.name ? (
          <div className="w100 df gap-20 avatars-section">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`avatar-card ${
                  userInfo.avatar === avatar.image ? "active" : ""
                }`}
                onClick={() =>
                  setUserInfo({
                    ...userInfo,
                    avatar: avatar.image,
                    name: avatar.name,
                    desc: avatar.desc,
                  })
                }
              >
                <img src={avatar.image} alt={avatar.name} className="avatar" />
                <h4>{avatar.name}</h4>
                <p>{avatar.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="w100 df fdc gap-20">
            <img
              src={activeProduct?.image}
              alt={activeProduct?.name}
              className="product-image"
            />
            <p>{activeProduct?.description}</p>
            <h4>${activeProduct?.price}</h4>
          </div>
        )}
      </GalacticModal>
      <i></i>
    </div>
  );
}
