# stackpath-edgeengine-typescript-example

To compile the bundle, use this command:

``` npm run build ```

This simple example will simply look for a userId cookie. If it is greater than 0 then it will give you the underlying file from the origin. If it is not present (or not greater than 0) it will return a 403 Permission Denied.

This is obviously not secure. It's just meant as a jumping off point.

This repository is associated with this blog post:
https://engineering.flosports.tv/authentication-at-edge-with-stackpath-86106e33f5d1
