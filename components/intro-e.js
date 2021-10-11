import { Image } from "react-bootstrap";

const Intro = () => (
    <div className="mb-4 media">
        <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-5"
            src="vercel.svg"
            alt="Generic placeholder"
        />
        <div className="media-body">
            <h5 className="font-weight-bold mb-1">News мэдээний портал сайт</h5>
            <p className="welcome-text">
                Өөрийгөө хөгжүүлэн хийж буй мэдээний сайт
            </p>
        </div>
    </div>
);
export default Intro;
