import { Cookies } from './cookies';

export class Auth {

    private cookies: Cookies;
    private request: StackPathRequest;

    constructor(request: StackPathRequest) {
        this.request = request;
        this.cookies = new Cookies(request);
    }

    public isAuthenticated(): boolean {
        return parseInt(this.cookies.get('userId')) > 0;
    }

}