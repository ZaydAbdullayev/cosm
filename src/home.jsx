import { useState, useEffect } from "react";
import "./home.scss";
import { avatars, data } from "./context/data";
import { RiTwitterXFill } from "react-icons/ri";

export function App() {
  const [selectedCategory, setSelectedCategory] = useState("STATIONS");
  const [products, setProducts] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: avatars[0].name,
    id: "123456789",
    balance: 100000,
    avatar: avatars[0].image,
    desc: avatars[0].desc,
  });

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
          <div className="header-button">CLONE & CRAFT TECH</div>
        </div>
      </header>
      <main className="w100 df fw gap-20 main-content">
        <h1 className="w100 df aic jcc">Galactic Shops</h1>
        <aside className="df fdc gap-15 sidebar">
          <h3>Categories</h3>
          <ul className="df fdc gap-20">
            {data.categories.map((category, index) => (
              <li
                key={index}
                className="mini-card"
                onClick={() => handleCategoryClick(category)}
              >
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </aside>
        <section className="df aic fw gap-20 cards-section main-card">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="df fdc product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>${product.price}</p>
              </div>
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </section>
        <aside className="df fdc aic profile">
          <span className="mini-card">
            <span>Balance {userInfo.balance} $cosm</span>
          </span>
          <div className="df fdc gap-10">
            <img src={userInfo.avatar} alt="Avatar" className="avatar" />
            <h3>{userInfo.name}</h3>
            <p>ID: {userInfo.id}</p>
            <p>{userInfo.desc}</p>
            <span className="mini-card">
              <span>RECONSTRUCT</span>
            </span>
          </div>
        </aside>
      </main>
      <i></i>
    </div>
  );
}
