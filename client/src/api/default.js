export const AUTH_URL = "http://localhost:3002"
export const USER_URL = "http://localhost:3003"
export const PUB_URL = "http://localhost:3001"

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

