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
    follow(userId: number) {
        return instance.post(`/follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`)
    },
}
export const profileAPI = {
    getUserProfile(userId: ReactText) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status/', {status})
    }

}
export const authAPI = {
    checkAuth() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}