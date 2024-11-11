import { getCities } from "../api/city";
import SlideShow from "../components/Slideshow";

const Contact = () => {
  const cities = getCities();
  return (
    <div className="row d-flex justify-content-center  mt-4">
      <div className="col-6">
        <SlideShow
          items={cities}
          key={Math.random()}
        />
      </div>
    </div>
  );
};
export default Contact;
