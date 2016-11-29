FROM ubuntu:16.04
# FROM debian:latest


# base packages

ENV DEBIAN_FRONTEND noninteractive


RUN apt-get update      -y --ignore-missing               && \
    apt-get install     -y software-properties-common apt-utils wget curl vim git unzip



# bitcoin-core from source
#
# RUN apt-get install -y build-essential libtool autotools-dev pkg-config autoconf libssl-dev libboost-all-dev bsdmainutils
# ...


# bitcoin-core from ppa/launchpad
#
RUN add-apt-repository ppa:bitcoin/bitcoin
RUN apt-get update

RUN apt-get install -y bitcoind




# node 6 from package
#
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

RUN npm i -g coffee-script pm2


# ruby from package
#
RUN apt-get install software-properties-common && \
    apt-add-repository ppa:brightbox/ruby-ng && \
    apt-get update && \
    apt-get install ruby2.3 -y  && \
    gem i bundler


# # build-essential not always needed (just if your lib has C dependencies)
# RUN apt-get install -y build-essential ruby2.3-dev

# install go

RUN mkdir ~/tmp
RUN cd ~/tmp && curl -O https://storage.googleapis.com/golang/go1.6.linux-amd64.tar.gz && tar xvf go1.6.linux-amd64.tar.gz

RUN chown -R root:root ~/tmp/go
RUN mv ~/tmp/go /usr/local

# export GOPATH=$HOME/work
# export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin

# install bcoin

RUN npm i -g bcoin

ADD ./bin /usr/local/bin

VOLUME /root/.bitcoin


EXPOSE 8332


CMD bitcoind_run
