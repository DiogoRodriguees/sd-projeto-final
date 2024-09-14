export const AUTH_URL = "http://192.168.85.212:3000"
export const USER_URL = "http://192.168.85.212:3000"
export const PUB_URL = "http://192.168.85.212:3000"

export const AUTH_DEBUG = true

export const HttpStatus = {
  CREATED: 201,
  OK: 200,
  ERROR: 400
}

export class HttpResponse {
  status = HttpStatus.ERROR;
  data = null;

  constructor(status, data) {
    this.status = status; 
    this.data = data;
  }
}

