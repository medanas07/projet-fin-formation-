import axios from 'axios';

// Définir baseURL en dehors de l'objet passé à axios.create
const baseURL = 'mongodb://localhost:27017/luxe_cars';
const api = axios.create({
  baseURL,
});

// Function to fetch all cars from the server
export const getAllCars = async () => {
  try {
    const response = await api.get('/api/cars');
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

// Function to create a new car on the server
export const createCar = async (carData) => {
  try {
    const response = await api.post('/api/cars', carData);
    return response.data;
  } catch (error) {
    console.error('Error creating car:', error);
    throw error;
  }
};

// Function to update an existing car on the server
export const updateCar = async (carId, carData) => {
  try {
    const response = await api.put(`/api/cars/${carId}`, carData);
    return response.data;
  } catch (error) {
    console.error(`Error updating car ${carId}:`, error);
    throw error;
  }
};

// Function to delete a car from the server
export const deleteCar = async (carId) => {
  try {
    const response = await api.delete(`/api/cars/${carId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting car ${carId}:`, error);
    throw error;
  }
};

// Fetching data from the server, e.g., during component initialization
try {
  const { data } = await api.get('/api/cars');
  console.log('Fetched data:', data);
} catch (error) {
  console.error('Error fetching data:', error);
}

// Frontend signup request
const signupData = {
  username: 'exampleUser',
  password: 'examplePassword',
  email: 'user@example.com',
  role: 'user',
};

try {
  const response = await api.post('/signup', signupData);
  console.log(response.data);
} catch (error) {
  console.error('Error during signup:', error);
}

export default api; 
