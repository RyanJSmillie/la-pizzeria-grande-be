# La Pizzeria Grande

## Back-end Application

Back-end express project for BurdaForward tech test "la pizzeria grande"

## General Information

Express application that communicates with database that stores menu information for 'la-pizzeria-grande'.

## Technologies Used

- Express
- Postgres
- Sequelize
- CORS
- Dotenv
- ESLint
- Nodemon

## Project Status

In progress

## Improvements

- Add test coverage

## Features that can be Added

- Additional routes for new menu items (Sides, Desserts, etc)
- Additional controller functions to allow use of query parameters
-

# Setup

Dependencies are listed in `package.json` and can be installed with `npm i`.

## Environemnt Variables

You will need to create a `.env` file in the root of the project and provide the credentials required to connect to the data base in the format:

```
 PGUSER=
 PGHOST=
 PGPASSWORD=
 PGDATABASE=
 PGPORT=
 PORT=3001
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Starts the Express application and sets to listen on [http://localhost:3001](http://localhost:3001).

The application will disconnect and reconnect when you make changes.

### `npm run lint`

Will perform linting operations on the application.

## Routes Available

You can hit `http://localhost:3001/` with the following routes either through an application or `postman`.

## `/test`

### `GET`

Authenticate this express application has connected with the database. If successful you will see `Connection has been established successfully.`/

If unsuccessful you will see `Unable to connect to the database:` followed by an error message.

## `/menu`

### `GET`

Hitting the `/menu` endpoint will return all menu items in the format:

```
{
  drinks: [
    {
      id: 1,
      title: "Frozen Margarita",
      description: "Literally a stone cold classic, Olmeca Blanco, lime, gomme.",
      price: 9,
      img: "https://www.nellspizza.co.uk/wp-content/uploads/2023/06/frozen.png"
    }
  ],
  pizza: [
    {
      id: 1,
      title: "Original Sausage Material",
      description: "House sausage and pepperoni, marinara sauce, mozza…apeño, finished with house chilli sauce and parm.",
      price: 16,
      img: "https://www.nellspizza.co.uk/wp-content/uploads/2023/02/originalsausagematerial14february.png",
    },
  ],
};
```

You can append the following routes to `/menu` for additional functionality.

## `/pizza`

### `GET`

Hitting this endpoint will return all pizzas from the menu in the format:

```
{
  [
    {
      id: 1,
      title: "Frozen Margarita",
      description: "Literally a stone cold classic, Olmeca Blanco, lime, gomme.",
      price: 9,
      img: "https://www.nellspizza.co.uk/wp-content/uploads/2023/06/frozen.png"
    },
  ],
};
```

### `PUT`

To add a new entry to the database, hit this endpoint with a JSON body in the format:

```
{
  title: "Original Sausage Material",
  description: "House sausage and pepperoni, marinara sauce, mozza…apeño, finished with house chilli sauce and parm.",
  price: 16,
  img: "https://www.nellspizza.co.uk/wp-content/uploads/2023/02/originalsausagematerial14february.png",
}
```

## `/pizza/:id`

### `DELETE`

To delete an entry from the database by id, hit this endpoint replacing `:id` with the id of the desired deletion.

## `/pizza/:id/price`

### `PATCH`

The update the price of a pizza, hit this endpoint replacing `:id` with the id of the desired item to alter, with a JSON body in the format:

```
{
  "price": 10
}
```

## `/pizza/title/:title`

### `DELETE`

To delete an To delete an entry from the database by title, hit this endpoint replacing `:title` with the title of the desired deletion.

## `/drinks`

All of the routes above also exist for the drinks menu items. Simply replace `pizza` with `drinks` where appropriate.
