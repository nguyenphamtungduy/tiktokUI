import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    outline,
    defaults,
    text,
    rounded,

    className,
    size,
    disabled = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = "button";
    const props = { onClick, ...passProps };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }

    if (disabled) {
        delete props.onClick;
    }

    const classes = cx("wrapper", {
        primary,
        outline,
        defaults,
        text,
        rounded,
        disabled,
        [className]: className,
        [size]: size,
    });
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    defaults: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
