import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const getFromBackend = async (link) => {
    try {
      const token = localStorage.getItem('token'); // Ensure token is retrieved
      if (!token) {
        throw new Error('No token found in localStorage');
      }
  
      const response = await axios.get(link, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response; // Return the full Axios response object
    } catch (error) {
      console.error('Request Error:', error.response ? error.response.data : error.message);
      throw error; // Rethrow to allow handling at the calling site
    }
  };
  