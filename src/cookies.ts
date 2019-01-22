
export class Cookies {

    private request: StackPathRequest;
    private cookies: { [key: string]: string } = {};

    constructor(request: StackPathRequest) {
        this.request = request;
        this.parseCookies();
    }

    private parseCookies() {
        const cookieArray: string[] = this.request.headers.get('cookie').split(';');
        const me: Cookies = this;
        cookieArray.forEach((item: string) => {
            const thisCookie = item.split('=');
            me.cookies[thisCookie[0].trim()] = decodeURIComponent(thisCookie[1].trim());
        });
    }

    public get(key: string): string {
        return this.cookies[key];
    }

    public getAll(): { [key: string]: string } {
        return this.cookies;
    }


}