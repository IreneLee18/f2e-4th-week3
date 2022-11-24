import { nanoid } from "nanoid";
import { useState, useRef, useEffect } from "react";
function Stars() {
  const [stars, setStars] = useState([]);
  const star = useRef();
  const starList = [];
  for (let i = 0; i < 100; i++) {
    const style = {};
    style.left = `${Math.random() * 100}vw`;
    style.top = `${Math.random() * 100}vh`;
    style.transform = `scale(${Math.random() * 1.2})`;
    style.animationDelay = `${Math.random()}s`;
    starList.push(style);
    star.current = starList;
  }
  useEffect(() => {
    setStars(star.current);
  }, []);

  return (
    <ul className="stars">
      {stars.map((item) => (
        <li key={nanoid()} className="star" style={item}></li>
      ))}
    </ul>
  );
}

export default Stars;
