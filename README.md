# docker_study

1. docker pull nginx
2. docker build -t was .
3. docker-compose up

entrypoint : 0.0.0.0:3000


flow
1. compose option : 0.0.0.0:3000 -> 0.0.0.0:80(nginx)
2. nginx.conf : 0.0.0.0:80(nginx) -> http://was:8080(was server, express)
http:was:8080 : was server container name, docker-compose에 있는 서비스 이름으로 추적하는 것으로 예상