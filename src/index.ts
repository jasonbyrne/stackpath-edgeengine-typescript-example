/// <reference path="./stackpath.d.ts" />

addEventListener("fetch", (event: StackPathEvent) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: StackPathRequest): Promise<Response> {
    try {
        //const response = await fetch(request);
        return new Response("Hello World", { status: 200 });
    } catch (e) {
        return new Response(e.stack || e, { status: 500 });
    }
}