import axios from 'axios'

export default async function getCountAPI() {
  try {
    const count = await axios.get('/get-count', {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
    return count.data.count
  } catch (e) {
    console.error(e)
  }
}
