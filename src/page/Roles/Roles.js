import { Link ,useNavigate } from "react-router-dom";
function Roles() {
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="roles_title">
        <h2>角色介紹</h2>
      </div>
      <div className="roles_body">
        <ul className="characters">
          <li className="character character_po">
            <div className="character_image image"></div>
            <h3 className="title">產品負責人</h3>
            <h4 className="content">
              產品方向及願景，定義產品細節，優先級別，交付時間。
            </h4>
          </li>
          <li className="character character_sm">
            <div className="character_image image"></div>
            <h3 className="title">敏捷教練</h3>
            <h4 className="content">
              負責團隊 scrum
              能合理運作，理解需求及安排產品技術製作時程，確保工程品質。
            </h4>
          </li>
          <li className="character character_rd">
            <div className="character_image image"></div>
            <h3 className="title">開發團隊</h3>
            <h4 className="content">
              負責開發與交付產品，可為跨領域團隊，由設計師、工程師等不同專業人士組成。
            </h4>
          </li>
        </ul>
      </div>
      <div className="roles_footer">
        <div>
          <Link
            onClick={() =>
              (window.location.href =
                "https://medium.com/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81-scrum-%E7%9A%84%E8%A7%92%E8%89%B2%E5%88%86%E5%B7%A5-d1d05818a954")
            }
          >
            推薦閱讀連結
          </Link>
        </div>
        <div className="roles_footer_switch_page_btn">
          <button onClick={()=>navigate('/')}>&lt;</button>
          <button onClick={()=>navigate('/product_backlog')}>我瞭解了！</button>
        </div>
      </div>
    </div>
  );
}

export default Roles;
