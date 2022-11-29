# How to run?
> **_NOTE:_** I recommend using Docker to run this project.

### Clone repo from Github

```
git clone git@github.com:cuongnguyen2605/fixtures.git

cd fixtures/
```

### Configure environment
```
cp .env.example .env
```
> **_NOTE:_** You can try to change database config in .env file

### Install package

```
npm install
```

### Run test

```
npm run test
```

### Run with Docker (recommended)

```
docker-compose up -d
```
Run seed data
```
docker exec -it fixtures-api-1 /bin/bash

cd /usr/src/app/src/

npx sequelize-cli db:seed:all
```

### Run without Docker (not recommended)

```
npm start
```

Run seed data (open new tab Terminal and cd to project)

```
npm run seed:up
```

### API Fixtures Listing (Pagination)
> **_NOTE:_** Curl can be used to test in Terminal.
```
GET: http://localhost:3000/v1/matches/find?page=1&limit=5
CMD: curl http://localhost:3000/v1/matches/find?page=1&limit=5

Request: {
    page: 1 || Default: 1
    limit: 5 || Default: 10
}

Response: {
    "status": 200,
    "message": "OK",
    "data": {
        "docs": [
            {
                "match_id": 8,
                "name": "World Cup 2022",
                "date": "2022-11-20T13:27:07.000Z",
                "home_team_goal": 9,
                "away_team_goal": 5,
                "home_team": {
                    "team_id": 16,
                    "name": "Tunisia",
                    "flag": null
                },
                "away_team": {
                    "team_id": 7,
                    "name": "USA",
                    "flag": null
                }
            },
            {
                "match_id": 5,
                "name": "World Cup 2022",
                "date": "2022-11-20T22:34:37.000Z",
                "home_team_goal": 4,
                "away_team_goal": 7,
                "home_team": {
                    "team_id": 15,
                    "name": "Denmark",
                    "flag": null
                },
                "away_team": {
                    "team_id": 4,
                    "name": "Netherlands",
                    "flag": null
                }
            },
            {
                "match_id": 20,
                "name": "World Cup 2022",
                "date": "2022-11-23T00:39:49.000Z",
                "home_team_goal": 2,
                "away_team_goal": 8,
                "home_team": {
                    "team_id": 6,
                    "name": "Iran",
                    "flag": null
                },
                "away_team": {
                    "team_id": 6,
                    "name": "Iran",
                    "flag": null
                }
            },
            {
                "match_id": 14,
                "name": "World Cup 2022",
                "date": "2022-11-23T02:16:25.000Z",
                "home_team_goal": 0,
                "away_team_goal": 6,
                "home_team": {
                    "team_id": 2,
                    "name": "Ecuador",
                    "flag": null
                },
                "away_team": {
                    "team_id": 16,
                    "name": "Tunisia",
                    "flag": null
                }
            },
            {
                "match_id": 7,
                "name": "World Cup 2022",
                "date": "2022-11-23T13:17:23.000Z",
                "home_team_goal": 2,
                "away_team_goal": 2,
                "home_team": {
                    "team_id": 4,
                    "name": "Netherlands",
                    "flag": null
                },
                "away_team": {
                    "team_id": 14,
                    "name": "Australia",
                    "flag": null
                }
            }
        ],
        "totalDocs": 20,
        "limit": 5,
        "page": 1,
        "totalPages": 4
    }
}
```

### API Fixtures Calendar
> **_NOTE:_** Curl can be used to test in Terminal.
```
GET: http://localhost:3000/v1/matches/find-by-dates?from=2022-11-20&to=2022-11-30
CMD: curl http://localhost:3000/v1/matches/find-by-dates?from=2022-11-20&to=2022-11-30

Request: {
    from: "2022-11-20" || Default today
    to: "2022-11-30" || Default today
}

Response: {
    "status": 200,
    "message": "OK",
    "data": [
        {
            "match_id": 8,
            "name": "World Cup 2022",
            "date": "2022-11-20T13:27:07.000Z",
            "home_team_goal": 9,
            "away_team_goal": 5,
            "home_team": {
                "team_id": 16,
                "name": "Tunisia",
                "flag": null
            },
            "away_team": {
                "team_id": 7,
                "name": "USA",
                "flag": null
            }
        },
        {
            "match_id": 5,
            "name": "World Cup 2022",
            "date": "2022-11-20T22:34:37.000Z",
            "home_team_goal": 4,
            "away_team_goal": 7,
            "home_team": {
                "team_id": 15,
                "name": "Denmark",
                "flag": null
            },
            "away_team": {
                "team_id": 4,
                "name": "Netherlands",
                "flag": null
            }
        },
        {
            "match_id": 20,
            "name": "World Cup 2022",
            "date": "2022-11-23T00:39:49.000Z",
            "home_team_goal": 2,
            "away_team_goal": 8,
            "home_team": {
                "team_id": 6,
                "name": "Iran",
                "flag": null
            },
            "away_team": {
                "team_id": 6,
                "name": "Iran",
                "flag": null
            }
        },
        {
            "match_id": 14,
            "name": "World Cup 2022",
            "date": "2022-11-23T02:16:25.000Z",
            "home_team_goal": 0,
            "away_team_goal": 6,
            "home_team": {
                "team_id": 2,
                "name": "Ecuador",
                "flag": null
            },
            "away_team": {
                "team_id": 16,
                "name": "Tunisia",
                "flag": null
            }
        },
        {
            "match_id": 7,
            "name": "World Cup 2022",
            "date": "2022-11-23T13:17:23.000Z",
            "home_team_goal": 2,
            "away_team_goal": 2,
            "home_team": {
                "team_id": 4,
                "name": "Netherlands",
                "flag": null
            },
            "away_team": {
                "team_id": 14,
                "name": "Australia",
                "flag": null
            }
        },
        {
            "match_id": 16,
            "name": "World Cup 2022",
            "date": "2022-11-25T04:39:24.000Z",
            "home_team_goal": 10,
            "away_team_goal": 6,
            "home_team": {
                "team_id": 5,
                "name": "England",
                "flag": null
            },
            "away_team": {
                "team_id": 7,
                "name": "USA",
                "flag": null
            }
        },
        {
            "match_id": 12,
            "name": "World Cup 2022",
            "date": "2022-11-27T08:10:05.000Z",
            "home_team_goal": 0,
            "away_team_goal": 5,
            "home_team": {
                "team_id": 7,
                "name": "USA",
                "flag": null
            },
            "away_team": {
                "team_id": 20,
                "name": "Japan",
                "flag": null
            }
        },
        {
            "match_id": 15,
            "name": "World Cup 2022",
            "date": "2022-11-29T15:09:10.000Z",
            "home_team_goal": 7,
            "away_team_goal": 4,
            "home_team": {
                "team_id": 4,
                "name": "Netherlands",
                "flag": null
            },
            "away_team": {
                "team_id": 1,
                "name": "Qatar",
                "flag": null
            }
        },
        {
            "match_id": 4,
            "name": "World Cup 2022",
            "date": "2022-11-30T21:02:32.000Z",
            "home_team_goal": 2,
            "away_team_goal": 3,
            "home_team": {
                "team_id": 3,
                "name": "Senegal",
                "flag": null
            },
            "away_team": {
                "team_id": 16,
                "name": "Tunisia",
                "flag": null
            }
        }
    ]
}
```

### Finish
With Docker
```
docker-compose down -v
```

Without Docker
```
npm run seed:down
```

Thanks for reading.