import { useState, useEffect } from "react";
import "./home.scss";
import { avatars, data, transmissions, planets, titles } from "./context/data";
import { RiTwitterXFill } from "react-icons/ri";
import { Button } from "./components/button.components";
import { GalacticModal } from "./components/modal";
import { formatPrice } from "./context/fetch.service";
import Slider from "react-slick";

function getTitleByBalance(balance) {
  const available = titles.filter((t) => balance >= t.minBalance);
  return available.length ? available[available.length - 1].name : "Cadet";
}

export function App() {
  const localData = JSON.parse(localStorage.getItem("user_info") || "null");
  const [userInfo, setUserInfo] = useState(
    localData || {
      name: "",
      id: Math.floor(Math.random() * 1000000),
      balance: 100000,
      avatar: avatars[0].image,
      desc: avatars[0].desc,
      rank: "Cadet",
      mission: "Scouted Zone R-7",
      inventory: "4 / 20 slots",
      faction: "Neutral",
      planet: planets[0].name,
      climate: planets[0].climate,
    }
  );

  const [selectedCategory, setSelectedCategory] = useState("STATIONS");
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [transmissionIndex, setTransmissionIndex] = useState(0);
  const [logMessages, setLogMessages] = useState([
    { type: "normal", message: "Initializing systems..." },
    { type: "warn", message: "Scanner sync unstable." },
    { type: "error", message: "Unknown entity detected!" },
  ]);

  const planetImage = planets.find(
    (planet) => planet.name === userInfo.planet
  )?.image || "";

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
    const interval = setInterval(() => {
      setTransmissionIndex((prev) => (prev + 1) % transmissions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    filterProductsByCategory(data.categories[0]);

    const transmissionTimer = setInterval(() => {
      setTransmissionIndex((prev) => (prev + 1) % transmissions.length);
    }, 5000);

    const logTimer = setInterval(() => {
      const types = ["normal", "warn", "error"];
      const newType = types[Math.floor(Math.random() * 3)];
      const newMsg = {
        type: newType,
        message:
          newType === "error"
            ? "⚠️ ALERT: Reactor spike detected!"
            : newType === "warn"
            ? "⚠️ Temp fluctuation in Zone-3."
            : "✔️ Routine check complete.",
      };

      setLogMessages((prev) => [newMsg, ...prev.slice(-3)]);
    }, 7000);

    return () => {
      clearInterval(transmissionTimer);
      clearInterval(logTimer);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    const updatedUser = activeProduct
      ? {
          ...userInfo,
          balance: userInfo.balance - activeProduct.price,
          rank: getTitleByBalance(userInfo.balance - activeProduct.price),
        }
      : {
          ...userInfo,
          rank: getTitleByBalance(userInfo.balance),
        };
    setUserInfo(updatedUser);
    localStorage.setItem("user_info", JSON.stringify(updatedUser));
    setActiveProduct(null);
  };

  const sliderSettings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="w100 df fdc aic ui-wrapper no-scroll">
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
      <div className="flavor-log">
        {logMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`log-line ${msg.type} level-${logMessages.length - idx}`}
          >
            {msg.message}
          </div>
        ))}
      </div>

      <main className="w100 df gap-20 main-content">
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
          <span>Your Balance:</span>
          <span className="mini-card">
            <span>
              {formatPrice(userInfo.balance)}{" "}
              <small>
                <small>$cosm</small>
              </small>
            </span>
          </span>
        </aside>

        <section className="frame cards-sections slider-wrapper">
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <div className="w100 df aic jcc">
                <div
                  key={product.id}
                  className="df fdc aic gap-5 product-card main-card"
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
                  <h4>{product.name}</h4>
                  <p>{formatPrice(product.price)}</p>
                  {/* <Button text="B U Y" /> */}
                </div>
                {/* <small className="flavor-text">
                  {
                    galacticFacts[
                      Math.floor(Math.random() * galacticFacts.length)
                    ]
                  }
                </small> */}
              </div>
            ))}
          </Slider>
        </section>

        <aside className="df fdc aic gap-20 profile">
          <h2>Profile</h2>
          <div className="df fdc gap-5">
            <span>Rank: {getTitleByBalance(userInfo.balance)}</span>
            <span>Origin: {userInfo.planet}</span>
            <span>Climate: {userInfo.climate}</span>
            <span>Last Mission: {userInfo.mission}</span>
            <span>Inventory: {userInfo.inventory}</span>
            <span>Allegiance: {userInfo.faction}</span>
          </div>
          <div className="df fdc gap-10">
            <img src={userInfo.avatar} alt="Avatar" className="avatar" />
            <h3>{userInfo.name}</h3>
            <p>ID: {userInfo.id}</p>
            <p>{userInfo.desc}</p>
            <button onClick={() => setIsOpen(true)}>RECONSTRUCT</button>
          </div>
        </aside>
      </main>
      <div className="transmission-console">
        <span className="transmission-title">[ Transmission Feed ]</span>
        <span className="transmission-line">
          {transmissions[transmissionIndex]}
          <span className="cursor">█</span>
        </span>
      </div>

      <GalacticModal
        isOpen={isOpen}
        onClose={closeModal}
        title={
          activeProduct?.name ||
          (!localData ? "Welcome, Traveler" : "Edit Profile")
        }
        btn_t={activeProduct ? "Buy Now" : "Save"}
      >
        {!activeProduct ? (
          <div className="edit-profile">
            <h3>Select Avatar</h3>
            <Slider {...settings} className="avatar-slider">
              {avatars.map((avatar, index) => {
                const isActive = userInfo.avatar === avatar.image;
                return (
                  <div
                    key={index}
                    className={`avatar-card ${isActive ? "active" : ""}`}
                    onClick={() =>
                      setUserInfo({
                        ...userInfo,
                        avatar: avatar.image,
                        name: avatar.name,
                        desc: avatar.desc,
                      })
                    }
                  >
                    <img src={avatar.image} alt={avatar.name} />
                    <h4>{avatar.name}</h4>
                    <p>{avatar.description}</p>
                  </div>
                );
              })}
            </Slider>

            <h3 className="mt-20">Select Your Planet</h3>
            <Slider {...settings}>
              {planets.map((planet, index) => {
                const isActive = userInfo.planet === planet.name;
                return (
                  <div
                    key={index}
                    className={`df fdc aic planet-card ${
                      isActive ? "active" : ""
                    }`}
                    onClick={() =>
                      setUserInfo({
                        ...userInfo,
                        planet: planet.name,
                        faction: planet.faction,
                        climate: planet.climate,
                      })
                    }
                  >
                    <img src={planet.image} alt={planet.name} />
                    <h4>{planet.name}</h4>
                    <p>{planet.climate} Climate</p>
                    <span>{planet.faction}</span>
                    <small className="desc">{planet.description}</small>
                    <small>
                      Coordinates: <hr />
                      <small className="desc">{planet.coordinates}</small>
                    </small>
                    <small>
                      Resources: <hr />
                      <small className="desc">
                        {planet.resources.join(", ")}
                      </small>
                    </small>
                  </div>
                );
              })}
            </Slider>
          </div>
        ) : (
          <div className="w100 df fdc gap-20">
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              className="product-image"
            />
            <p>{activeProduct.description}</p>
            <h4>${activeProduct.price}</h4>
          </div>
        )}
      </GalacticModal>

      <i></i>
      <img src={planetImage} alt="" className="planet" />
    </div>
  );
}
