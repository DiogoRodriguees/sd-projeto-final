export const BASE_URL = "https://66db96a647d749b72ac98bb8.mockapi.io"

export const AUTH_DEBUG = true

export const HttpStatus = {
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

