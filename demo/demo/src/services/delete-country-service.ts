import axios from 'axios';
const deleteRecord = async (recordId: number) => {
  try {
    await axios.delete(`https://apit2.web2.anasource.com/admin/Countries/${recordId}`);
    console.log('Record deleted successfully');
    // Perform any additional actions after successful deletion
  } catch (error: any) {
    console.error('Error deleting :', error.message);
    // Handle the error appropriately
  }
};

export {deleteRecord};
