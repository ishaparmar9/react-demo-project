import axios from "axios";

interface RecordData {
    id: number,
    name: string,
    status: number
}

const editRecord = async (recordId: number, updatedData: RecordData) => {
    try {
        const response = await axios.put(`https://apit2.web2.anasource.com/admin/Countries/${recordId}`, updatedData);
        console.log('Record updated successfully');
        // Perform any additional actions after successful update
    } catch (error: any) {
        console.error('Error editing record:', error.message);
        if (error.response) {
            console.log('Response status:', error.response.status);
            console.log('Response data:', error.response.data);
        }
        // Handle the error appropriately
    }
};
  
  export {editRecord};