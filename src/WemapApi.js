import axios from 'axios';

const API_BASE_URL = 'https://api.getwemap.com/v3.0/pinpoints/search';

const Contents = async (query, offset, limit) => {
  const params = { query, offset, limit };
  try {
    const response = await axios.get(API_BASE_URL, { params });
    const contentsWithImageUrls = response.data.results.map((item) => ({
      id: item.id,
      name: item.name,
      image_url: item.image_url, 
      address:item.address
    }));
    return contentsWithImageUrls;
  } catch (error) {
    console.error('Error fetching content:', error);
    return [];
  }
};

export default Contents;
