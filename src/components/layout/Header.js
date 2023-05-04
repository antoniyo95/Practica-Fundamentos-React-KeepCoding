import Button from "../shared/Button";

import logo, { ReactComponent as Icon } from "../../assets/nodepop.svg";

const Header = () => {
  return (
    <header>
      <div>
        <Icon width="80" height="35" />
      </div>
      <nav>
        <Button variant="primary">Login</Button>
      </nav>
    </header>
  );
};

export default Header;
