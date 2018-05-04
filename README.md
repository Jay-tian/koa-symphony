# koa-easy

## nginx 配置
```
server {
    set $webpack_server http://127.0.0.1:3032;
    server_name www.koa-easy.com;

    error_log /var/log/nginx/koa_error.log;
    access_log /var/log/nginx/koa_access.log;

    gzip off;

    gzip_min_length 1k;

    gzip_comp_level 4;

    gzip_vary on;

    gzip_buffers 32 4k;

    location ~ ^/build/ {
        if (-f /var/www/koa-blog/dev.lock){
          proxy_pass http://127.0.0.1:3032;
        }
        if (!-f /var/www/koa-blog/dev.lock){
            proxy_pass http://127.0.0.1:3000;
       }
    }
    location / {
         proxy_pass http://127.0.0.1:3000;
    }

}
```
