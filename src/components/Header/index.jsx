import icon from "../../assets/icon.png";
import * as C from "./style";

const Header = () => {
  return (
    <C.Header>
      <img src={icon} />
      <h1>
        Procurar<i>CEP</i>
      </h1>
    </C.Header>
  );
};

export default Header;
