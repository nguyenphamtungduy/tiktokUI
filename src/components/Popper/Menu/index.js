import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            // console.log(isParent);
            return (
                <MenuItem
                    children={item.code}
                    key={index}
                    data={item}
                    clicked={() => {
                        if (isParent) {
                            // console.log(item.children);
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    return (
        <Tippy
            delay={[0, 500]}
            offset={[20, 4]}
            placement="bottom-end"
            interactive={true}
            // visible
            render={(attrs) => (
                <div className={cx("content")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("list")}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1)
                                    );
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
