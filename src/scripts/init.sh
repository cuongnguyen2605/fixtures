docker-compose up -d

docker ps

docker exec -it container_id /bin/bash

cd src/

npx sequelize-cli db:seed:all

npx sequelize-cli db:seed:undo:all