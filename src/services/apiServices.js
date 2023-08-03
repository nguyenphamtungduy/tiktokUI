import * as request from "../utils/httpRequest";
export const search = async (q, type = "less") => {
    try {
        const res = await request.get("users/search", {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log("error");
    }
};

// export const following = async (q = "a", type = "less") => {
//     try {
//         const res = await request.get("users/search", {
//             params: { q, type },
//         });
//         return res.data;
//     } catch (error) {
//         console.log("error");
//     }
// };

export const following = async (page = "1", per_page) => {
    try {
        const res = await request.get("users/suggested", {
            params: { page, per_page },
        });
        return res.data;
    } catch (error) {
        console.log("error");
    }
};

export const videoList = async (type = "for-you", page = 4) => {
    try {
        const res = await request.get("/videos", {
            params: { type, page },
        });
        return res.data;
    } catch (error) {
        console.log("error");
    }
};

export const videoListFollowing = async (type = "for-you", page = 6) => {
    try {
        const res = await request.get("/videos", {
            params: { type, page },
        });
        return res.data;
    } catch (error) {
        console.log("error");
    }
};
