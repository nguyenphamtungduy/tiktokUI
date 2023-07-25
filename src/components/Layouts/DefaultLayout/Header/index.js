import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles); // có thể đặt className có dấu "-"

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>Header</div>
        </header>
    );
}

export default Header;
