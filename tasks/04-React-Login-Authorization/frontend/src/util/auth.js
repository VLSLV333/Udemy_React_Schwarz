import { redirect } from 'react-router-dom'

export const getTokenDurationLeft = () => {
    const storedExpirationDate = localStorage.getItem('expiration')
    const expirationDate = new Date (storedExpirationDate)
    const timeNow = new Date()
    const tokenLifeLeft = expirationDate.getTime() - timeNow.getTime()
    return tokenLifeLeft
}

export default function getAuthToken() {
    const token = localStorage.getItem('token')

    const tokenLifeLeft = getTokenDurationLeft()

    if (!token) {
        return null
    }

    if (tokenLifeLeft < 0) {
        return 'EXPIRED'
    }

    return token
}

export const tokenLoader = () => {
   return getAuthToken()
}

export const checkAuthLoader = () => {
    const token = getAuthToken()

    if (!token) {
        return redirect('/auth?mode=login')
    }
    return null
}