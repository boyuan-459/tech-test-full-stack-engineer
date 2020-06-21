import axiosInstance from './axiosInstance'

export function list ({ status, page }) {
    return axiosInstance.get(`/leads/${status}?page=${page}`).then(result => {
            return Promise.resolve(result.data)
        }).catch(error => {
            return Promise.reject(error.data)
        })
}

export function accept (id) {
    return axiosInstance.post(`/leads/${id}/accept`).then(result => {
        return Promise.resolve(result.data)
    }).catch(error => {
        return Promise.reject(error.data)
    })
}


export function decline (id) {
    return axiosInstance.post(`/leads/${id}/decline`).then(result => {
        return Promise.resolve(result.data)
    }).catch(error => {
        return Promise.reject(error.data)
    })
}
