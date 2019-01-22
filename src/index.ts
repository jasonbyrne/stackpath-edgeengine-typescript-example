import { Auth } from './auth';
import { Cookies } from './cookies';

addEventListener("fetch", (event: StackPathEvent) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: StackPathRequest): Promise<Response> {
    try {
        const auth = new Auth(request);
        if (!auth.isAuthenticated()) {
            return new Response('Permission denied.', { status: 403 });
        }
        return await fetch(request);
    } catch (e) {
        return new Response(e.stack || e, { status: 500 });
   }
}