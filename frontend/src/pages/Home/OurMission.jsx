import { VscTriangleRight } from "react-icons/vsc";
import "../Home/OurMission.css";

function OurMission() {
    return (
        <>
            {/* Mission Section */}
            <div className="container-fluid px-lg-5 " id="Mission">
                <div className="row px-lg-5 px-2">
                    <div className="col-12 col-lg-6 ps-lg-5 d-flex flex-column mt-5" data-aos="fade-right">
                        <div className="col-12 py-3 fs-5 " id="ourstudy">
                            Our Journey
                        </div>
                        <h2 className="Our-mission">
                            Our Mission.
                        </h2>
                        <p className="Our-mission-p">
                        Our mission is to provide structured education, hands-on training, and ongoing mentorship to women who aspire to start their own businesses. Through comprehensive programs covering finance, marketing, operations, and scaling strategies, we aim to bridge the gap between ambition and execution.
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 mt-5  position-relative" id="Mission-storyimg" data-aos="fade-left">
                        <VscTriangleRight className="logo" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default OurMission;
