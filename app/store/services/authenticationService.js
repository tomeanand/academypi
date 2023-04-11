import service from './service';
import APIConstants from '../../utils/APIConstants';
export default function authenticationService(phone)  {
    const param = {
            "username": "user_schive_"+phone,
            "fname": "Schive "+Math.random(1000).toString(),
            "lname": "Ham",
            "phone": phone,
            "email": "t@cc.co",
            "password": "12345",
            "dob": "12/1/2000",
            "addr": "^",
            "location": {
              "coordinates": []
            }
    }
    const endpoint = APIConstants.DEV_BASE+ 'character'
    return service(endpoint,null,'GET')
}