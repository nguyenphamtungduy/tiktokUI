import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import images from "../../assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AccountItem({ data }, onHide) {
    return (
        <Link
            onClick={onHide}
            to={`/@${data.nickname}`}
            className={cx("wrapper")}
        >
            <img className={cx("avatar")} src={data.avatar} alt="" />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <img
                            className={cx("check")}
                            src={images.checked}
                            alt=""
                        />
                    )}
                </p>
                <span className={cx("username")}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
