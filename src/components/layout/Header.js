import Button from "../shared/Button";

import logo, { ReactComponent as Icon } from "../../assets/nodepop.svg";
import { logout } from "../auth/service";

const Header = ({ isLogged, onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  }

  return (
    <header>
      <div>
        <Icon width="80" height="35" />
      </div>
      <nav>
        {isLogged ? (
          <Button onClick={handleLogoutClick}>Logout</Button>
        ) : (
          <Button variant="primary">Login</Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
