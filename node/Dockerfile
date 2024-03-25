FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN chmod +x install.sh

EXPOSE 3000

ENTRYPOINT ["sh"]
CMD ["./install.sh"]
