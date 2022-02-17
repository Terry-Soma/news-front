import axios from "lib/_axios";

export const getAllNews = async () => {
    const news = await axios.get('news');
    return news.data;
}
export const getNewsByUrl = async (uniqueUrl) => {
    const news = await axios.get(`news/${uniqueUrl}`);
    return news.data;
}
export const getAsideNews = async () => {
    return "jak";
}