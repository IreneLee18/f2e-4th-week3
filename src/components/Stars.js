import { nanoid } from "nanoid";
import { useState, useRef, useEffect } from "react";
function Stars() {
  const [stars, setStars] = useState([]);
  const bodyWidth = window.innerWidth;
  const bodyHeight = window.innerHeight;
  const star = useRef();
  const starList = [];
  for (let i = 0; i < 100; i++) {
    const style = {};
    style.left = `${Math.random() * bodyWidth}px`;
    style.top = `${Math.random() * bodyHeight}px`;
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
