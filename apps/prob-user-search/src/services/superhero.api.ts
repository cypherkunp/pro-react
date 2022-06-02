import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const TOKEN = '112479973822448';
// const BASE_URL = `https://superheroapi.com/api/${TOKEN}`;
const BASE_URL = 'https://randomuser.me/api/?results=10&inc=name,picture';
const SEARCH_URL = '/search';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {},
});

async function searchSuperhero(searchString: string) {
  try {
    const axiosConfig: AxiosRequestConfig = {
      //url: `${SEARCH_URL}/${searchString || ''}`,
      method: 'get',
    };
    const superHeroResponse = await axiosInstance(axiosConfig);
    return superHeroResponse.data;
  } catch (error) {
    throw error as AxiosError;
  }
}

export { searchSuperhero };
