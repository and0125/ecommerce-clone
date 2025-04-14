# notes

## Models

these are used to create the methods to interact with the tables (called clients).

We'll add the models to the schema.prisma file. And there are annotations you can use to edit the models you have for each object.

see the `Product` model for our first model. this has an id that's a uuid, default values for price and ratings, a unique map for the slug, a timestamp for created at.

After creating a model, we need to deploy the model. To do this we need to setup a post install script, which we added to package.json, and this command is: `"postinstall": "prisma generate"`

Then we need to run this locally as well, which can require stopping the server with `npx prisma generate`. Then we want to make sure this says `Generated Prisma Client` for a success message.

Then we want to have a migration to add the model table to the database: `npx prisma migrate dev --name init` which we named `init` because its the first migration. Success message is `Your database is now in sync with your schema`.

We can check it was created in prisma studio, and also in the migrations folder in the `prisma` folder.

Could also use pgadmin, but using prisma studio is a nicer display: `npx prisma studio`. This may need a refresh to see the latest model if you open it right after a migration. This runs on `localhost:5555`.

This will display the data you add, and shows the columns defined in the model.

Prisma also gives some tools to add sample data to the database.

## Sample Data

We want to move away from the sample data files and move to adding data from the database.

so in the `db` folder we'll create a file called `seed.ts`.

This file creates a function to seed the database with the sample data already generated.

we can run this file with: `npx tsx ./db/seed`.

after running this, you can refresh prisma studio in the browser to see the data added.

Next we fetch data from the database.

## Fetching Data

to do this, we'll use server actions, that are async functions run on the server.

You can submit a form to these actions as well, but we don't need this for retrieving data.

This is much better than using API routes; these have their place if you want to use the same front-end with the backend.

But for a monolith web app, use the server Actions.

create a folder to hold these actions called `lib/actions`.

we would create these actions for each model it seems like.

We'll convert the PrismaClient to a JSON object to turn the client's functions into javascript functions to abstract their implementation in case this changes later.

Example:

```javascript
"use server";
import { PrismaClient } from "@prisma/client";

/** gets latest products */
export async function getLatestProducts() {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return data;
}
```

We use this in the Home page to use the action to get the latest products:

```javascript
// modified homepage
import React from "react";
import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
}
```
