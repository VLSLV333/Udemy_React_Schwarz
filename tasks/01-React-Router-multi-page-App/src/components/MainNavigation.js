import { NavLink } from "react-router-dom";

import style from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          <li>
  {/*=============     end property in this Home link ensures that it is only active, if current link ends with "/"   */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
// ==============       we can use this   style syntax in pair with NavLink to create conditional inline styles
              // style={({isActive}) => ({testAlign: isActive ? 'center' : 'left'})}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
