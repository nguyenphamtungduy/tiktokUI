import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";

const cx = classNames.bind(styles); // có thể đặt className có dấu "-"

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4]);
        }, 0);
    });

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx("search-results")}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("serach")}>
                        <input
                            type="text"
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        ></input>
                        <button className={cx("clear-btn")}>
                            <img src={images.clear} alt="TikTok" />
                        </button>
                        <button className={cx("loading-btn")}>
                            <img src={images.loading} alt="Loading" />
                        </button>
                        <button className={cx("search-btn")}>
                            <img src={images.search} alt="Search videos" />
                        </button>
                    </div>
                </Tippy>
                <div className={cx("actions")}></div>
            </div>
        </header>
    );
}

export default Header;
