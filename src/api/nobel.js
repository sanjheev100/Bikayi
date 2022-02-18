import axios from 'axios'

export const fetchNobelPrize = async () => {
  return await axios.get('http://api.nobelprize.org/v1/prize.json')
}
