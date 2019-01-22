
declare class StackPathEvent {
    respondWith(response: Response | Promise<Response>): void;
    type: string;
    request: StackPathRequest;
    respondWithEntered: boolean;
}

declare function fetch(
    request: StackPathRequest
): Response;

declare function addEventListener(
    eventName: "fetch",
    callback: (event: StackPathEvent) => void
): void;

declare class StackPathRequest {
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
