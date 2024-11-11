import Image1 from "../assets/img1.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/img3.png";
import Image4 from "../assets/img4.png";
const About = () => {
  return (
    <>
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col col-sm-10 ">
          <h3 className="text-center ">Top Stories</h3>
          <hr />
          <div className="row d-flex justify-content-center">
            <div className="col col-sm-6">
              <p className="font-font-weight-light">HURRICANE</p>
              <p>Tropical wind and rainstorm</p>
              <p>near the Carolina coast </p>
              <p>to track inland</p>
            </div>
            <div className="col-4">
              <img
                src={Image1}
                alt="Rainstorm"
                className="w-75 h-75"
              />
            </div>
          </div>
          <hr />

          <div className="row d-flex justify-content-center">
            <div className="col col-sm-6">
              <p className="font-font-weight-light">HURRICANE</p>
              <p>Tropical wind and rainstorm</p>
              <p>near the Carolina coast </p>
              <p>to track inland</p>
            </div>
            <div className="col-4">
              <img
                src={Image2}
                alt="Flood"
                className="w-75 h-75"
              />
            </div>
          </div>

          <hr />

          <div className="row d-flex justify-content-center">
            <div className="col col-sm-6">
              <p className="font-font-weight-light">HURRICANE</p>
              <p>Tropical wind and rainstorm</p>
              <p>near the Carolina coast </p>
              <p>to track inland</p>
            </div>

            <div className="col-4">
              <img
                src={Image3}
                alt="Flood"
                className="w-75 h-75"
              />
            </div>
          </div>

          <hr />

          <div className="row d-flex justify-content-center">
            <div className="col col-sm-6">
              <p className="font-font-weight-light">HURRICANE</p>
              <p>Tropical wind and rainstorm</p>
              <p>near the Carolina coast </p>
              <p>to track inland</p>
            </div>
            <div className="col col-sm-4">
              <img
                src={Image4}
                alt="Storm"
                className="w-75 h-75"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
