import http from 'k6/http';
import { token } from './env.js';

function generateRandomLicenseClinic() {
    const timePart = Date.now().toString().slice(-6); // 6 หลักท้าย
    const vuPart = (__VU % 100).toString().padStart(2, '0'); // 2 หลัก
    return 'POC' + timePart + vuPart; // รวม 8 หลักพอดี
}

export function ehp_register() {
    const url = 'https://homeload.ehp.co.th/api/v2/poc/api/v1/register';

    const payload = JSON.stringify({
        username: "adasdas.as",
        password: "eyJ1.eyJETMxETMxETM==",
        name1: "นางสาว",
        name2: "ทดสอบ",
        name3: "หหหห",
        position: "ทันตแพทย์",
        name2en: "asdasdasd",
        name3en: "adasdas",
        citizen_id: "5131512312312",
        license_no: "41254125124",
        phone: "4215214123",
        email: "24124@gmail.com",
        lineid: "fasds",
        license_clinic: generateRandomLicenseClinic(), // ✅ random ตรงนี้
        code5: "00000",
        clinic_name: "sadfsdfsdada",
        clinic_type: "เวชกรรม",
        map: {
            type: "เวชกรรม"
        },
        clinic_province: "กรุงเทพมหานคร",
        clinic_ask1: [
            "ต้องการบันทึกเวชระเบียนอิเล็กทรอนิกส์"
        ],
        clinic_news: "Social Media - Facebook"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    };

    const response = http.post(url, payload, params);

    console.log('Response body:', response.body);

    return response;
}