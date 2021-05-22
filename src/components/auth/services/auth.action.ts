import axios from 'axios';

export const loginUser = async (login_detail) => {
    const res = await axios.post('/api/auth/login', login_detail)
    if (res.status !== 200) {
        return false
    }
    return res.data
}

