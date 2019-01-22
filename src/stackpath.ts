
interface Headers {
    [key: string]: string | string[]
}

export declare class Response {
    constructor(body: string, params: {});
    bodySource: string;
    stream: string | null;
    headers: Headers;
    url: string;
    status: number;
    ok: boolean;
    statusText: string;
    type: string;
}

export declare class Request {
    bodySource: string | null;
    stream: string | null;
    method: string;
    url: string;
    referrer: string | null;
    mode: string | null;
    credentials: string;
    headers: Headers;
    remoteAddr: string;
}

export declare class Event {
    respondWith(response: Response | Promise<Response>): void;
    type: string;
    request: Request;
    respondWithEntered: boolean;
}

export declare function addEventListener(eventName: string, callback: (event: Event) => void): void;

export declare function fetch(request: Request): Response;