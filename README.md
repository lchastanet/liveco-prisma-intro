## CRUD with Prisma ORM

- To setup the project :

```shell
$ npm i
````

- To run the project :

```shell
$ npm run dev
````

- To make migration of the database :

First create a `[DATABASE_NAME]` in your db server.

- Then :

Creat a `.env` file and add the folowing line whit correct informations:

`"mysql://[DB_USER]:[DB_PASSWORD]@[SERVER_NAME]:[SERVER_PORT]/[DATABASE_NAME]?schema=public"`

- Finaly run :

```shell
$ npx prisma migrate reset
```