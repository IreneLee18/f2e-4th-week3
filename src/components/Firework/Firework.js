const array93 = [...Array(50).keys()];
function Firework() {
  return (
    <ul className="firework_group">
      {array93.map((item) => (
        <li key={item} className="firework"></li>
      ))}
    </ul>
  );
}

export default Firework;
