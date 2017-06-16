FROM ubuntu:14.04

RUN apt-get update \
    && apt-get install -y git \
    && apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - \
    && apt-get install -y nodejs \
    && npm install pm2 -g --verbose \
    && cd ~/ \
    && git clone http://121.41.5.131:3000/yota/qmjy-isomorphic-mobile.git \
    && cd ~/qmjy-isomorphic-mobile \
    && npm i \
    && apt-get purge -y --auto-remove curl

CMD ["bash", "-g", "export NODE_ENV=production"]

