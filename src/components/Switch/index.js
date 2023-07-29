import classNames from "classnames/bind";
import styles from "./Switch.module.scss";

const cx = classNames.bind(styles);

function Switch({ onChange }) {
    // const Comp = "input";
    const props = { onChange };
    return (
        <div className={cx("wrapper")}>
            <label className={cx("switch")}>
                <input type="checkbox" {...props} />
                <span className={cx("slider")}></span>
            </label>
        </div>
    );
}

export default Switch;
