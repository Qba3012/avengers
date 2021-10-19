import axios from "axios";
import md5 from "md5";
import ApiCharacterResponse from "../model/api/ApiCharactersResponse";
import ApiSeriesResponse from "../model/api/ApiSeriesResponse";

export const getAvailableSeries = async () => {
  const response = await axios.get(`${process.env.API_URL}/series?${createAuthParameters()}&title=avengers`);

  if (response.data && response.status == 200) {
    return response.data as ApiSeriesResponse;
  }
  return null;
};

export const getAvengersBySeries = async (seriesId: string) => {
  const response = await axios.get(`${process.env.API_URL}/characters?${createAuthParameters()}&series=${seriesId}&limit=100`);
  if (response.data && response.status == 200) {
    return response.data as ApiCharacterResponse;
  }
  return null;
}

const createAuthParameters = () => {
  const timestamp = Date.now();
  const publicKey = process.env.API_PUBLIC_KEY;
  const privateKey = process.env.API_PRIVATE_KEY;

  const hash = md5(timestamp.toString() + privateKey?.toString() + publicKey?.toString());

  return `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
};
