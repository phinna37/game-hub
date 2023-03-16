import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1febad23f92541aba9f52c7ba742ac35'
    }
})