import axios from 'axios'


const getAll = async () => {
  const response = await axios.get('/restaurants')
  return response.data
}

export default {
  getAll
}