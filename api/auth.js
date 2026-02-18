import http from 'k6/http';

export function auth() {
    const url = 'https://homeload.ehp.co.th/api/center/service/api/v1/auth';

    const payload = JSON.stringify({
        ref_code: 'EcyTls',
        service_id: '699410a1f9117897ebebe2f3'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = http.post(url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}