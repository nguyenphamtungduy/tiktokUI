import classNames from "classnames/bind";
import styles from "./Videos.module.scss";
import { useState, useRef, useEffect } from "react";
import Button from "../Button";
import images from "../../assets/images";
import { Actions } from "../Actions";
import Avatar from "../Avatar";
const cx = classNames.bind(styles);

function Videos({ data }) {
    const videoRef = useRef();
    const playBtnRef = useRef();
    const volumeBtnRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMute, setIsMute] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", handleAutoPlayWithScroll);
        return () => {
            window.removeEventListener("scroll", handleAutoPlayWithScroll);
        };
    });

    // setTimeout(() => {
    //     handlePlayVideoFirst();
    // }, 1000);

    // const handlePlayVideoFirst = () => {
    //     const bounds = videoRef.current.getBoundingClientRect();
    //     if (bounds.bottom < window.innerHeight + 300 && bounds.top > -50) {
    //         play();
    //     }
    // };

    const handleAutoPlayWithScroll = () => {
        const bounds = videoRef.current.getBoundingClientRect();
        if (bounds.bottom < window.innerHeight + 300 && bounds.top > 0) {
            play();
        } else {
            pause();
        }
    };

    const handleVisible = () => {
        playBtnRef.current.style.opacity = 1;
        volumeBtnRef.current.style.opacity = 1;
    };
    const handleHidden = () => {
        playBtnRef.current.style.opacity = 0;
        if (!isMute) {
            volumeBtnRef.current.style.opacity = 0;
        }
    };

    const play = () => {
        videoRef.current.play();
        setIsPlaying(true);
    };

    const pause = () => {
        videoRef.current.pause();
        setIsPlaying(false);
    };

    const handleChangePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    };
    const handleChangeVolume = () => {
        if (isMute) {
            videoRef.current.muted = false;
            setIsMute(false);
        } else {
            videoRef.current.muted = true;
            setIsMute(true);
        }
    };

    return (
        <article className={cx("wrapper")}>
            <header className={cx("header")}>
                <Avatar className={cx("avatar")} src={data.user.avatar} />
                {/* <img
                    className={cx("avatar")}
                    src={data.user.avatar}
                    alt=""
                ></img> */}
                <div className={cx("info")}>
                    <div className={cx("info__name")}>
                        <h3 className={cx("nickname")}>{data.user.nickname}</h3>
                        <h4 className={cx("name")}>{data.user.first_name}</h4>
                    </div>
                    <div className={cx("info__description")}>
                        {data.description}
                    </div>
                    <div className={cx("info__music")}>
                        <img
                            className={cx("logo-music")}
                            src={images.music}
                            alt=""
                        ></img>
                        <span children={cx("music-name")}>
                            {data.music || "Default Music"}
                        </span>
                    </div>
                </div>
                <Button size="small" outline className={cx("btn")}>
                    Follow
                </Button>
            </header>
            <div
                className={cx("video-wrapper")}
                onMouseOverCapture={handleVisible}
                onMouseOutCapture={handleHidden}
            >
                <video
                    muted
                    ref={videoRef}
                    // autoPlay

                    preload="auto"
                    className={cx("video")}
                    width={data.meta.video.resolution_x}
                    height={data.meta.video.resolution_y}
                    src={data.file_url}
                    // controls
                ></video>
                <button
                    ref={playBtnRef}
                    onClick={handleChangePlay}
                    className={cx("change-btn")}
                >
                    {!isPlaying && (
                        <img alt="" className={cx("play")} src={images.play} />
                    )}
                    {isPlaying && (
                        <img
                            alt=""
                            className={cx("pause")}
                            src={images.pause}
                        />
                    )}
                </button>

                <button
                    ref={volumeBtnRef}
                    onClick={handleChangeVolume}
                    className={cx("volume-btn")}
                >
                    {isMute && (
                        <img
                            className={cx("speaker")}
                            alt=""
                            src={images.speakerOff}
                        />
                    )}
                    {!isMute && (
                        <img
                            className={cx("speaker")}
                            alt=""
                            src={images.speakerOn}
                        />
                    )}
                </button>

                <Actions data={data} />
            </div>
        </article>
    );
}

export default Videos;
