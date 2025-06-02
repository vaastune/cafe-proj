import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import logo from "./logo3.png";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1 className="cafe" id="cafe">𝓒𝓐𝓕𝓔 𝓜𝓞𝓝𝓢𝓣𝓔𝓡!</h1>
          <img src={logo} alt="logo" className="logo" id="logo" />
          <section className="about" id="about">
            <h2>𝓐𝓑𝓞𝓤𝓣 𝓤𝓢</h2>
            <p id="para">Just a little cafe that specializes in cooking tasty and aesthetically pleasing food.</p>
          </section>
          <h2>
          𝑀𝐸𝒩𝒰
          </h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      

      </section>
      
      
    </main>
  );
};

export default App;
