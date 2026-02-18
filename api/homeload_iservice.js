import http from 'k6/http';
import { token } from './env.js';

export function homeload_iservice() {
    const url = 'https://homeload-iservice.ehp.co.th/api/service/customer/v1/test_homeload?date_start=2025-12-01&date_end=2025-12-31&cis_code=52223';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const response = http.get(url, params);

    //console.log('Response body:', response.body);

    return response;
}
