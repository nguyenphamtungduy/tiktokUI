import { Videos } from "../../components/Videos";
import { useEffect, useState } from "react";
import * as apiService from "../../services/apiServices";

function Home() {
    const [renderVideo, setRenderVideo] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await apiService.videoList();
            setRenderVideo(result);
        };
        fetchAPI();
    }, []);
    return (
        <div>
            {renderVideo.map((data) => (
                <Videos
                    key={data.id}
                    data={data}
                    onScroll1={() => {
                        console.log("hello");
                    }}
                />
            ))}
        </div>
    );
}

export default Home;
