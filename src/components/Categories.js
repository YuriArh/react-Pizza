import React, { useState } from "react";

function Categories({ value, onChangeCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((name, i) => (
          <li
            className={value === i ? "active" : null}
            onClick={() => onChangeCategory(i)}
            key={i}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
