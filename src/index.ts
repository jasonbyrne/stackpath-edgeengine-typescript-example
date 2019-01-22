import { Request, Response, addEventListener, fetch } from './stackpath';

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
    try {
        //const response = await fetch(request);
        return new Response("Hello World", { status: 200 });
    } catch (e) {
        return new Response(e.stack || e, { status: 500 });
    }
}