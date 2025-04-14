# Notes

we'll use Neon for postgresql db, and we'll use prisma to do CRUD operations, and these models pertain to the DB table.

This will also create the provisioned fields through migrations; and we'll learn how to seed the database with data; use Zod for validating data, and then we'll use that to refactor our pages to use the database instead of the sample data.

Then we'll create the application and deploy it.

## Neon

offers cloud postgres database. This enables you to use 10 projects with .5 GB of storage. Vercel offers neon through vercel, and you can create this through vercel. There are different storage options in vercel to choose.

Our database info is at: <https://vercel.com/aarons-projects-0a2f2e0d/~/stores/integration/store_5CkZGSOBtdzWQ0S4/guides>.

Then you can use Prisma to interact with this database.

## Prisma

`npm i -D prisma @prisma/client` to setup prisma in the project.

then we initialize with `npx prisma init` will add folders.

Once created in vercel, the main environment variable to setup is the `DATABASE_URL` link, which you can copy from the storage page.

Then we'd be able to work with the database.

Then there's a prisma extension for VS code; so that way the `schema.prisma` files are organized properly.
