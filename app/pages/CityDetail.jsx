import { useParams } from "react-router-dom";
import { getLocationById } from "../api/cities";

const CityDetail = () => {
  const { cityId } = useParams();
  const City = getLocationById(cityId);
  return (
    <div>
      <p>weather</p>
    </div>
  );
};
export default CityDetail;
