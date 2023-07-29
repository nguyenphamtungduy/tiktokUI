import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";
import Switch from "../../../Switch";

const cx = classNames.bind(styles); // có thể đặt className có dấu "-"

const MENU_ITEMS = [
    {
        icon: images.language,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "fr",
                    title: "Français",
                },
                {
                    code: "ja",
                    title: "日本",
                },
            ],
        },
    },
    {
        icon: images.feedback,
        title: "Feedback and help",
        to: "./feedback",
    },
    {
        icon: images.keyboard,
        title: "Keyboard shortcuts",
    },
    {
        icon: images.darkmode,
        title: "Dark mode",
        switch: <Switch onChange={(e) => handleDarkLight(e)} />,
    },
];

//
const handleDarkLight = (e) => {
    // console.log(e.target.checked);
    let display = e.target.checked;
    if (display) {
        console.log("Dark Mode");
    } else {
        console.log("Light Mode");
    }
};

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUsers = true;

    const userMenu = [
        {
            icon: images.profile,
            title: "View Profile",
        },
        {
            icon: images.favorites,
            title: "Favorites",
        },
        {
            icon: images.coins,
            title: "Get Coins",
        },
        {
            icon: images.settings,
            title: "Settings",
        },
        ...MENU_ITEMS,
        {
            icon: images.logout,
            title: "Log ut",
            separate: true,
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4]);
        }, 0);
    });

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <div>
                    {/* dung div bao bao the tippy */}
                    <HeadlessTippy
                        interactive={true}
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div
                                className={cx("search-results")}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <h4 className={cx("search-title")}>
                                        Accounts
                                    </h4>
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
                                placeholder="Search"
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
                    </HeadlessTippy>
                </div>
                <div className={cx("actions")}>
                    <Button defaults>
                        <img
                            className={cx("icon-plus")}
                            src={images.plus}
                            alt=""
                        />
                        <span>Upload</span>
                    </Button>
                    {currentUsers ? (
                        <>
                            <Tippy
                                content="Messages"
                                placement="bottom"
                                delay={[0, 200]}
                            >
                                <button className={cx("messages")}>
                                    <img src={images.messages} alt="" />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                placement="bottom"
                                delay={[0, 200]}
                            >
                                <button className={cx("inbox")}>
                                    <img src={images.inbox} alt="" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Log in</Button>
                    )}

                    <Menu
                        items={currentUsers ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUsers ? (
                            <img
                                className={cx("user-avatar")}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_100x100.jpeg?x-expires=1690794000&x-signature=RR3flx4dm22pCoQ%2BTiHb8XJYWDM%3D"
                                alt="Nguyen Van A"
                            ></img>
                        ) : (
                            <button className={cx("more-btn")}>
                                <img
                                    className={cx("more-icon")}
                                    src={images.more}
                                    alt=""
                                />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
