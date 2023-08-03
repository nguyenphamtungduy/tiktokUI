import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, icon, activeIcon, to }) {
    return (
        <NavLink
            className={(nav) =>
                cx("menu-item", {
                    active: nav.isActive,
                })
            }
            to={to}
        >
            <img className={cx("icon")} src={icon} alt=""></img>
            <img className={cx("iconActive")} src={activeIcon} alt=""></img>
            <span className={cx("title")}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.string,
    activeIcon: PropTypes.string,
};
export default MenuItem;
