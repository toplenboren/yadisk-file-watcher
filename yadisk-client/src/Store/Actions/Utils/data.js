import Utils from "./utils";
import {BASE_URL} from "./settings";

class Data {
    fetchData = async (path, token) => {
        return await Utils.getWithToken(BASE_URL + '/v1/disk/resources' + '?path=' + path, token)
    };
}

export default new Data();