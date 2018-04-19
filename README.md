# koa-easy

## nginx 配置
```
server {
    server_name www.koa-easy.com;

    error_log /var/log/nginx/koa_error.log;
    access_log /var/log/nginx/koa_access.log;

    location / {
         proxy_pass http://127.0.0.1:3000;
    }

    location ~ ^/static {
	if (-f /var/www/koa-blog/static/dev.lock){
           proxy_pass http://127.0.0.1:3030;
	}
    }
}
```
