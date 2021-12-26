import axios from 'axios'

export const getTodosAPI = async () => {
  try {
    const response = await axios.get('/todos', {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })

    return response.data
  } catch (e) {
    console.error(e)
  }
}
