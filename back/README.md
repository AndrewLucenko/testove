Нou need an installed docker to lift the database
It can be installed here
https://www.docker.com/products/docker-desktop/

After that, once you are in the docker, run the command:
docker compose -f ʼfilepathʼ/testove/back/configs/docker/docker-compose.yml -p docker up -d

Then in the terminal write
npm i
npm run start

after launching the application, go to Swager and add the ADD_MOCK endpoint

The backend is ready to go
