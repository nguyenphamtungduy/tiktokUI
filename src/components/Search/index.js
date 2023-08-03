import React, { useEffect, useState, useRef } from "react";
import { useDebounce } from "../../hooks";
import classNames from "classnames/bind";

import * as apiService from "../../services/apiServices";
import styles from "./Search.module.scss";
import images from "../../assets/images";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountItem from "../AccountItem";

const cx = classNames.bind(styles); // có thể đặt className có dấu "-"

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);
            const result = await apiService.search(debouncedValue);
            console.log(result);
            setSearchResult(result);
            setLoading(false);
        };

        fetchAPI();
    }, [debouncedValue]);

    const handleHideResults = () => {
        setShowResults(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(" ")) {
            return;
        }

        setSearchValue(searchValue);
    };

    return (
        <HeadlessTippy
            interactive={true}
            visible={showResults && searchResult.length > 0}
            onClickOutside={handleHideResults}
            render={(attrs) => (
                <div className={cx("search-results")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("results-wrapper")}>
                        <h4 className={cx("search-title")}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem
                                className={cx("account-item")}
                                key={result.id}
                                data={result}
                                onHide={() => {
                                    setShowResults(false);
                                }}
                            />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx("serach")}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Search"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => setShowResults(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx("clear-btn")}
                        onClick={() => {
                            setSearchValue("");
                            inputRef.current.focus();
                        }}
                    >
                        <img src={images.clear} alt="Clear" />
                    </button>
                )}
                {loading && (
                    <button className={cx("loading-btn")}>
                        <img src={images.loading} alt="Loading" />
                    </button>
                )}
                <button className={cx("search-btn")}>
                    <img src={images.search} alt="Search videos" />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
