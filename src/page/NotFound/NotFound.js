import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
function NotFound() {
  const navigate = useNavigate();
  const [number, setNumber] = useState(3);
  const counter = useRef(null);

  useEffect(() => {
    counter.current = setInterval(() => {
      setNumber((state) => state - 1);
    }, 1000);

    return () => {
      clearInterval(counter.current);
      counter.current = null;
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, [3100]);
  }, []);
  
  return (
    <div className="container">
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
        }}
      >
        <h1 style={{paddingBottom:'32px'}}>沒有此畫面</h1>
        <h2>{number}秒後幫你跳回首頁</h2>
      </div>
    </div>
  );
}

export default NotFound;
