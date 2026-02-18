import http from 'k6/http';
import { token } from './env.js';

export function homeload_admin() {
    const url = 'https://homeload.ehp.co.th/api/v2/other/api/v1/test_homeload?year=2025';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const response = http.get(url, params);

    //console.log('Response body:', response.body);

    return response;
}
