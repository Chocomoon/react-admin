import axios from '../../../utils/request'

export const decideAc = (data) => {
    // console.log(data);

    return dispatch => {
        return axios.post('/api/decide', data)
    };
};

export const syncInfoAc = (data) => {
    return {
        type: 'SYNC_STATE_INFO',
        payload: data
    };
};

export const logout = (data) => {
    return dispatch => {
        localStorage.removeItem('@#@TOKEN');
        dispatch(syncInfoAc({}));
    }
}