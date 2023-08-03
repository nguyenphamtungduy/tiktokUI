import { Videos } from "../../components/Videos";
import { useEffect, useState } from "react";
import * as apiService from "../../services/apiServices";

function Following() {
    const [renderVideo, setRenderVideo] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await apiService.videoListFollowing();
            setRenderVideo(result);
        };
        fetchAPI();
    }, []);
    console.log(renderVideo);
    return (
        <div>
            {renderVideo.map((data) => (
                <Videos key={data.id} data={data} />
            ))}
        </div>
    );
}

export default Following;
