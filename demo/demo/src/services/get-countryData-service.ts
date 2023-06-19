import axios from 'axios';
const getRecord = async (recordId: number) => {
    try {
      const response = await axios.get(`https://api.example.com/records/${recordId}`);
      const recordData = response.data;
      console.log('Record retrieved successfully:', recordData);
      // Perform any additional actions with the retrieved record data
    } catch (error: any) {
      console.error('Error retrieving record:', error.message);
      if (error.response) {
        console.log('Response status:', error.response.status);
        console.log('Response data:', error.response.data);
      }
      // Handle the error appropriately
    }
  };
  export {getRecord};