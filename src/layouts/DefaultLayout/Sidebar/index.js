import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import config from "../../../configs";
import { Menu, MenuItem } from "./Menu";
import images from "../../../assets/images";
import { FollowingAccounts } from "../../../components/FollowingAccounts";
import { Footer } from "../../../components/Footer";
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <div className={cx("container")}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={images.forYou}
                        activeIcon={images.forYouFocus}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={images.following}
                        activeIcon={images.followingFocus}
                    />
                    <MenuItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={images.explore}
                        activeIcon={images.exploreFocus}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={images.live}
                        activeIcon={images.liveFocus}
                    />
                </Menu>
                <FollowingAccounts />
                <Footer>
                    <div className={cx("block")}>
                        <div className={cx("line")}>
                            <a
                                className={cx("link")}
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.tiktok.com/about?lang=en"
                            >
                                About
                            </a>
                            <a
                                className={cx("link")}
                                rel="noreferrer"
                                target="_blank"
                                href="https://newsroom.tiktok.com/"
                            >
                                Newrooms
                            </a>
                            <a
                                className={cx("link")}
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.tiktok.com/about/contact?lang=en"
                            >
                                Contact
                            </a>
                            <a
                                className={cx("link")}
                                rel="noreferrer"
                                target="_blank"
                                href="https://careers.tiktok.com/"
                            >
                                Careers
                            </a>
                        </div>
                    </div>
                    <div className={cx("block")}>
                        <div className={cx("line")}>
                            <a
                                rel="noreferrer"
                                className={cx("link")}
                                target="_blank"
                                href="https://careers.tiktok.com/"
                            >
                                TikTok for Good
                            </a>
                            <a
                                className={cx("link")}
                                rel="noreferrer"
                                target="_blank"
                                href="https://careers.tiktok.com/"
                            >
                                Advertise
                            </a>
                        </div>
                        <div className={cx("line")}>
                            <a
                                rel="noreferrer"
                                className={cx("link")}
                                target="_blank"
                                href="https://careers.tiktok.com/"
                            >
                                Development
                            </a>
                            <a
                                rel="noreferrer"
                                className={cx("link")}
                                target="_blank"
                                href="https://careers.tiktok.com/"
                            >
                                Transparency
                            </a>
                        </div>
                        <div className={cx("line")}>
                            <a
                                className={cx("link")}
                                target="_blank"
                                href="https://careers.tiktok.com/"
                                rel="noreferrer"
                            >
                                TikTok Rewards
                            </a>
                            <a
                                className={cx("link")}
                                href="https://careers.tiktok.com/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                TikTok Embeds
                            </a>
                        </div>
                    </div>
                    <div className={cx("block")}>
                        <div>
                            <a
                                className={cx("link")}
                                target="_blank"
                                rel="noreferrer"
                                href="https://careers.tiktok.com/"
                            >
                                Help
                            </a>
                            <a
                                className={cx("link")}
                                target="_blank"
                                href="https://careers.tiktok.com/"
                                rel="noreferrer"
                            >
                                Safety
                            </a>
                            <a
                                className={cx("link")}
                                target="_blank"
                                rel="noreferrer"
                                href="https://careers.tiktok.com/"
                            >
                                Terms
                            </a>
                            <a
                                className={cx("link")}
                                target="_blank"
                                href="https://careers.tiktok.com/"
                                rel="noreferrer"
                            >
                                Privacy
                            </a>
                        </div>
                        <div className={cx("line")}>
                            <a
                                className={cx("link")}
                                rel="noreferrer"
                                target="_blank"
                                href="https://careers.tiktok.com/"
                            >
                                Creator Portal
                            </a>
                        </div>

                        <div className={cx("line")}>
                            <a
                                rel="noreferrer"
                                className={cx("link")}
                                target="_blank"
                                href="https://careers.tiktok.com/"
                            >
                                Community Guidelines
                            </a>
                        </div>
                    </div>
                    <p className={cx("link")}>© 2023 TikTok</p>
                </Footer>
            </div>
        </aside>
    );
}

export default Sidebar;
