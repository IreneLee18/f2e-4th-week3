import { useNavigate } from "react-router-dom";

function ProductBacklogFooter({last,next,btnTxt}) {
  const navigate =useNavigate()

  return (
    <div className=" product_backlog_footer">
    <button onClick={() => navigate(last)}>&lt;</button>
    <button onClick={() => navigate(next)}>{btnTxt}</button>
  </div>
  )
}

export default ProductBacklogFooter