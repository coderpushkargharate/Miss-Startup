import { VscTriangleRight } from "react-icons/vsc";
function OurMission(){
    return(
        <>
         {/* Mission Section */}
                        <div className="row mt-5 w-100">
                            <div className="col-12 col-lg-6 d-flex flex-column mt-5">
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
                            <div className="col-12 col-lg-6 mt-5 ms-5 position-relative" id="about-storyimg">
                                <VscTriangleRight className="logo " />
                            </div>
                        </div>
        </>
    )
}
export default OurMission;