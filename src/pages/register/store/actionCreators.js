import axios from '../../../utils/request'

export const registerAc = (data) => {
    // console.log(data);

    return dispatch => {
        return axios.post('/api/register', data)
    };
};