import axios from "axios";

const instance = axios.create({
  baseURL: 'https://app.wewantwaste.co.uk/api',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const SkipsDatasource = async () => {
    const { data, status, statusText } = await instance.get('skips/by-location?postcode=NR32&area=Lowestoft', {
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    });
    if(status === 200 )
        return { data, status, success: true};
    return { data: statusText, status, success: false };
}