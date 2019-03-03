import request from '@/utils/request';
import axios from 'axios';

export function getBanner (params) {
    return request({
        url: 'http://67.216.223.155:3000/banner',
        method: 'get',
        params
    })
}

export function getPersonalized (params) {
    return request({
        url: 'http://67.216.223.155:3000/personalized',
        method: 'get',
        params
    })
}

export function getRecommonData (apiNames) {
    var api = {
            personalizedData: getBanner(),
            bannerData: getPersonalized()
        },
        apiNames = apiNames || ['personalizedData', 'bannerData'],
        apiArr = apiNames.map(item => api[item]);

    return axios.all(apiArr).then(axios.spread(function (banner, personalized) {
        return Promise.resolve([banner, personalized])
    })).catch(err => {
        return Promise.reject(err)
    })
}

export function getPlayList (id) {
    return request({
        url: 'http://67.216.223.155:3000/playlist/detail',
        method: 'get',
        params: {
            id
        }
    })
}

export function getMusicUrl (id) {
    return request({
        url: 'http://67.216.223.155:3000/song/url',
        method: 'get',
        params: {
            id
        }
    })
}