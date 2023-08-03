import classNames from "classnames/bind";

import styles from "./Avatar.module.scss";
import avatarDefaults from "../../assets/avatarDefault/avatar.png";

import { useState, forwardRef } from "react";

const cx = classNames.bind(styles);

function Avatar({ src, alt, className, onError, ...props }, ref) {
    const [fallback, setFallback] = useState("");

    return (
        <img
            ref={ref}
            alt={alt}
            src={fallback || src}
            className={cx("wrapper", className)}
            onError={() => setFallback(avatarDefaults)}
            {...props}
        ></img>
    );
}

export default forwardRef(Avatar);
