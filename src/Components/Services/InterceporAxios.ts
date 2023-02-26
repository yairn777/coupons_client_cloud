import axios from 'axios';
import store from '../../Redux/store';


const tokenAxios = axios.create();

tokenAxios.interceptors.request.use(request => {

    request.headers = {
        "authorization": store.getState().userReduser.user?.token
    };

    return request;
});

export default tokenAxios;