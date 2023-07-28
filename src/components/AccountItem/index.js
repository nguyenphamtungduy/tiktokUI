import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import images from "../../assets/images";

const cx = classNames.bind(styles);

function AccountItem({ children }) {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1690621200&x-signature=Qojmh92nIFPTlwNyjGT6NasODrc%3D"
                alt=""
            />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>Nguyen Van A</span>
                    <img className={cx("check")} src={images.checked} alt="" />
                </p>
                <span className={cx("username")}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
