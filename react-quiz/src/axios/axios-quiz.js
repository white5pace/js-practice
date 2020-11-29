import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-f5a03.firebaseio.com/'
})