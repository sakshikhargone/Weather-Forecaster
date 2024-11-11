import axios from "axios";

export const getAddress = async ({ latitude, longitude }) => {
  try {
    const details = {
      method: "GET",
      url: `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2`,
      headers: {
        Accept: "application/json",
      },
    };
    const response = await axios.request(details);

    console.log("address details", response.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
