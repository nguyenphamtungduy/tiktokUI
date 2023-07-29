import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

import Button from "../../Button";

const cx = classNames.bind(styles);
function MenuItem({ data, clicked, children }) {
    return (
        <Button
            text
            to={data.to}
            className={cx("item", { children, separate: data.separate })}
            onClick={clicked}
        >
            {data.icon && (
                <img className={cx("icon")} src={data.icon} alt=""></img>
            )}
            <p className={cx("title")}>{data.title}</p>
            <span className={cx("switch")}>{data.switch && data.switch}</span>
        </Button>
    );
}

export default MenuItem;
