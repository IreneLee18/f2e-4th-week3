import { useNavigate } from "react-router-dom";

function ProductBacklogFooter({
  last,
  next,
  btnTxt,
  handleClickOpenModal,
  css,
}) {
  const navigate = useNavigate();

  return (
    <div className="product_backlog_footer" style={css ? css : {}}>
      <button onClick={() => navigate(last)}>&lt;</button>
      {next ? (
        <button onClick={() => navigate(next)}>{btnTxt}</button>
      ) : (
        <button onClick={handleClickOpenModal}>{btnTxt}</button>
      )}
    </div>
  );
}

export default ProductBacklogFooter;
