import { Row, Col, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import Layout from 'components/layout';
import { getAllNews, getNewsByUrl } from "lib/_api";
import News from 'components/news-e.js';
import AsideNews from 'components/aside-news-d';
const Cat = ({ news }) => {

    const router = useRouter();
    if (router.isFallback)
        return (
            <Layout>
                <div>Түр хүлээнэ үү ...</div>
            </Layout>
        );

    // if (!router.isFallback && !news?.uniqueUrl)
    //     return (
    //         <Layout>
    //             <div>Уучлаарай ийм пост байхгүй байна...</div>
    //         </Layout>
    //     );

    return (
        <Layout>
            <Row>
                <Col md="12">
                    {router.query.uniqueUrl}
                    {/* {preview && <PreviewAlert />} */}
                    <pre>{/*JSON.stringify(post, null, 2)*/}</pre>
                    <News news={news} />
                    <br />

                </Col>
                {/* <Col md="4">
                    <AsideNews />
                </Col> */}
            </Row>
        </Layout >
    );
}

export default Cat;

/* props  */
export const getStaticProps = async ({ params }) => {
    console.log(params.uniqueUrl);
    const { data } = await getNewsByUrl(params.uniqueUrl);
    return {
        props: {
            news: data,
        },
    };
};
/* paths */
export async function getStaticPaths() {
    const { data } = await getAllNews();
    // console.log(data);
    const url = data.map((post) => ({
        params: {
            uniqueUrl: post.uniqueUrl,
        }
    }));

    return {
        paths: url,
        fallback: true,
    }
};

/* server side */
// export const getServerSideProps = async ({ params }) => {
//     const { data } = await getNewsByUrl(params.uniqueUrl);
//     return {
//         props: {
//             news: data.data
//         }
//     }
// }
