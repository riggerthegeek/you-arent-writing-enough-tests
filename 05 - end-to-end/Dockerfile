########################################
# Docker                               #
#                                      #
# A NodeJS container that enables the  #
# application to run                   #
########################################

FROM node:6

MAINTAINER Simon Emms <simon@simonemms.com>

WORKDIR /opt/app
ADD . /opt/app

USER node

# Environment variables

# Install the dependencies

# Expose the port
EXPOSE 9999
EXPOSE 5858

# Run run run
CMD node src/app.js
