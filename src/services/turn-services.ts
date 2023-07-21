import axios , { AxiosResponse } from 'axios'
import urlMap from '../config/httpUrl'

const URL = urlMap.baseUrl

const axiosClient = axios.create({
    baseURL: `${URL}`
});

const getTurnsList = () => {
    return axiosClient.get<any[]>("getTurns")
        .then(response => {
            return resolveResponse(response);
        })
        .catch(error => {
            console.log(error);
        });
}

const postTurns = (PostTurnModel: any) => {
    return axiosClient.post<any[]>("PostTurns", PostTurnModel)
        .then(response => {
            return resolveResponse(response);
        })
        .catch(error => {
            console.log(error);
            /* toast.error(error.message); */
        });
}

const resolveResponse = (response: AxiosResponse) => {
    if (!(response.status >= 200 && response.status < 300)) return false
    if (!response.data) return false
    return response.data
}

export const turnServices = {
    getTurnsList,
    postTurns
}