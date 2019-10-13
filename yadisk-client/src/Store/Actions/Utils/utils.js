import axios from "axios";

class Utils {
    async getWithToken(url, token){
        try {
            return await axios.get(url, {
                headers: {
                    Authorization: `OAuth ${token}`,
                },
            })
        } catch (e) {
            throw e.response
        }
    }
}

export default new Utils();