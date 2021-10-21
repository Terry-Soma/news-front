import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import Layout from 'components/layout';
import { getAllNews, getNewsByUrl } from "lib/_api";
import moment from "moment";

const Cat = ({ news }) => {
    moment.locale("mn");

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
        <Layout Layout >
            {router.query.uniqueUrl}
            <Row>
                {/* <Col md="12"> */}

                {/* {preview && <PreviewAlert />} */}
                {/* <pre>{JSON.stringify(news, null, 2)}</pre> */}
                <div className="blog-detail-header">
                    <p className="lead mb-0">
                        <img
                            src={news.image.url}
                            className="rounded-circle mr-10"
                            height="50px"
                            width="50px"
                        />
                        {news.title}, {moment(news.Ognoo).format("lll")}
                    </p>

                    <h1 className="font-weight-bold blog-detail-header-title mb-0">
                        {news.title}
                    </h1>

                    <h2 className="blog-detail-header-subtitle mb-3">{news.title + "=====>>>>>>>" + Math.random()}</h2>

                    <img
                        className="img-fluid rounded"
                        src={news.image.url}
                    />
                    {/* <div className="code-filename" style={{ textAlign: "center" }}>
                            {post.cover_image.alt}
    </div> */}
                </div>
                {/* <PostHeader post={post} /> */}
                <br />
                {/* <BlockContent
                        blocks={post.content}
                        serializers={serializers}
                        imageOptions={{ w: 320, h: 240, fit: "max" }}
                    /> */}
                {/* </Col> */}
            </Row>
        </Layout >
    );
}

export default Cat;


export const getStaticProps = async ({ params }) => {
    console.log(params.uniqueUrl);
    const { data } = await getNewsByUrl(params.uniqueUrl);

    return {
        props: {
            news: data
        },
    };
};
/* paths */
export async function getStaticPaths() {
    const { data } = await getAllNews();
    console.log(data);

    const url = data.map((post) => ({
        params: {
            uniqueUrl: post.uniqueUrl
        }
    }));

    return {
        paths: url,
        fallback: false,
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
