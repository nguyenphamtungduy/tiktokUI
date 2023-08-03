import classNames from "classnames/bind";
import styles from "./Actions.module.scss";
import images from "../../assets/images";
// not complete yet
const cx = classNames.bind(styles);
function Actions({ data }) {
    return (
        <div className={cx("wrapper")}>
            <button className={cx("btn")}>
                <img className={cx("icon")} alt="" src={images.heart}></img>
            </button>
            <span className={cx("stat")}>{data.views_count}</span>
            <button className={cx("btn")}>
                <img className={cx("icon")} alt="" src={images.comment}></img>
            </button>
            <span className={cx("stat")}>{data.comments_count}</span>

            <button className={cx("btn")}>
                <img className={cx("icon")} alt="" src={images.save}></img>
            </button>
            <span className={cx("stat")}>{data.shares_count}</span>

            <button className={cx("btn")}>
                <img className={cx("icon")} alt="" src={images.share}></img>
            </button>
            <span className={cx("stat")}>{data.views_count}</span>
        </div>
    );
}

export default Actions;
