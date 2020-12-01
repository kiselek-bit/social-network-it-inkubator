import axios from "axios";
import {ReactText} from "react";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '433520f3-b807-456c-908f-67604d9c56a7'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
}
export const profileAPI = {
    getUserProfile(userId: ReactText) {
        return instance.get('profile/' + userId)
    }
}
export const authAPI = {
    checkAuth() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}