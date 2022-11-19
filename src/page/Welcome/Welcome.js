import Loading from "../../components/Loading/Loading";
function Welcome({ isLoading }) {
  return <>{isLoading ? <Loading /> : <div className="container">Welcome</div>}</>;
}

export default Welcome;
