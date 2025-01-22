import { VscTriangleRight } from "react-icons/vsc";
import "../Home/OurMission.css";

function OurMission() {
    return (
        <>
            {/* Mission Section */}
            <div className="container-fluid px-lg-5" id="Mission">
                <div className="row px-lg-5">
                    <div className="col-12 col-lg-6 ps-lg-5 d-flex flex-column mt-5">
                        <div className="col-12 py-3 fs-5 " id="ourstudy">
                            Our Journey
                        </div>
                        <h2 className="Our-mission">
                            Our Mission is to Deliver Fresh, Healthy, and Affordable Meals.
                        </h2>
                        <p className="Our-mission-p">
                            We specialize in home-cooked meals for students, professionals, and families, ensuring quality and taste in every bite.
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 mt-5  position-relative" id="Mission-storyimg">
                        <VscTriangleRight className="logo" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default OurMission;
