import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";

const cx = classNames.bind(styles);

function AccountItem({ data, className, onHide }) {
    return (
        <Link
            onClick={onHide}
            to={`/@${data.nickname}`}
            className={cx("wrapper", { [className]: className })}
        >
            <Avatar className={cx("avatar")} src={data.avatar} alt="" />
            <div className={cx("info")}>
                <p className={cx("username")}>
                    <span>{data.nickname}</span>
                    {data.tick && (
                        <img
                            className={cx("check")}
                            src={images.checked}
                            alt=""
                        />
                    )}
                </p>
                <span className={cx("name")}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
    onHide: PropTypes.func,
};
export default AccountItem;
