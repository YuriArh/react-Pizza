import React, { useState } from "react";

function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);

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
                {categories.map((value, i) => (
                    <li
                        className={activeIndex === i ? "active" : null}
                        onClick={() => setActiveIndex(i)}
                        key={i}
                    >
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
