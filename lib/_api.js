import axios from "lib/_axios";

export const getAllNews = async () => {

    const news = await axios.get('news');
    return news.data;
}