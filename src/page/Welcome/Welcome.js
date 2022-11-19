import Loading from "../../components/Loading/Loading";
import { useState, useEffect } from "react";
function Welcome() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [1000]);
  }, []);
  return <>{isLoading ? <Loading /> : <div>Welcome</div>}</>;
}

export default Welcome;
