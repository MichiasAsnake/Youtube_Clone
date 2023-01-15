import axios from "axios";

const apiData = 'https://youtube-v31.p.rapidapi.com'

const options = {
    
    params: {maxResults: '50'},
    headers: {
      'X-RapidAPI-Key': '65e44e266amsh9667018fe975d36p195cd5jsn715cee9d78a5',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetch = async (url) => {
    const {data} = await axios.get(`${apiData}/${url}`,
    options)

    return data
} 

