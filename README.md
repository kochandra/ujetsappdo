
# cis-image-viewer

A tool to submit images. A tool to review and adjudicate submitted images. Angular 5 and Bootstrap 4!


# Getting started

```npm install```
```npm run start```

#Production Docker container deployment


[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Build docker image

```
$ docker build -t cis-image-viewer . 
```

## Run the container

```
$ docker run --rm -d -p 8080:8080 -p 8081:8081 cis-image-viewer
```


The app will be available at http://localhost:8080

You can easily tweak the nginx config in ```nginx/nginx.conf```