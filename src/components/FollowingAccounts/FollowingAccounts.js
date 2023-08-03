import { useState, useEffect, useRef } from "react";
import * as apiService from "../../services/apiServices";
import classNames from "classnames/bind";
import styles from "./FollowingAccounts.module.scss";

import AccountItem from "../AccountItem";

const cx = classNames.bind(styles);

function FollowingAccounts() {
    const btnRef = useRef();
    const [accountFollowing, setAccountFollowing] = useState([]);
    const [moreAccounts, setMoreAccounts] = useState(5);
    const [isMore, setIsMore] = useState(false);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await apiService.following(1, moreAccounts);
            // console.log(result);
            setAccountFollowing(result);
        };
        fetchAPI();
        // fetch("https://tiktok.fullstack.edu.vn/api/users/search?q=a&type=more")
        //     .then((result) => result.json())
        //     .then((result) => setAccountFollowing(result.data));
    }, [moreAccounts]);

    const hanldeMoreAccount = () => {
        if (!isMore) {
            setMoreAccounts(10);
            console.log(btnRef.current);
            btnRef.current.innerHTML = "See less";
            setIsMore(true);
        } else {
            setMoreAccounts(5);
            btnRef.current.innerHTML = "See more";
            setIsMore(false);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <p className={cx("title")}>Following accounts</p>
            <div className={cx("account-list")}></div>
            {accountFollowing.map((data) => (
                <AccountItem
                    className={cx("account-item")}
                    key={data.id}
                    data={data}
                />
            ))}
            <button
                ref={btnRef}
                onClick={hanldeMoreAccount}
                className={cx("more")}
            >
                See more
            </button>
        </div>
    );
}

export default FollowingAccounts;
