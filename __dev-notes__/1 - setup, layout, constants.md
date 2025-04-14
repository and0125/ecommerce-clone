# Notes

## Setup

- cleared home page
- added Inter as the font
- added shadcnUi
- added resources
- kept initial `globals.css` file because the one provided has the older syntax for it.

## Root Layout and Constants

### Layout

We can have multiple layouts, and this can have groups of page using the parentheses in a folder name; this will treat the routes in the folder as a group, and not as a file based route.

We can do this to group pages with a specific layout.

So we make a group called `(root)` in the main application folder to hold our root pages, and copy the root layout file as a group specific layout file in that directory, but we remove the html tags, and add a div that's a wrapper for those specific pages.

We then want our home page to have this `(root)` layout, so we can move the `page.tsx` file into the `(root)` group.

### Constants

We want the title and description of our app, along with other things, to remain constant throughout our project, so we can add variables to store these values in a `constants` folder, within an `index.ts` file.

We use this setup to do a bit of a complex setup for the application title and description, but i can see that this enables us to control what displays for these fields if the next server doesn't have defined environment variables (not likely, but helpful prep work). So the `index.ts` file now has an `or` statement for each of the constants it exports, and that way, if there isn't environment variables, there is a fallback for the title and description of the application.

These values are mirrored in the `.env.local` file as well.

**NOTE**: he also adds quotations to his `.env` variables, which is different, but if it works, its just another good option to know.

This setup is useful for differentiating between the development and production build as well.

If on your homepage you can overwrite the metadata for specific pages by adding back in the metadata object and setting up a template. For this to work, there are _two steps_:

going into the `page.tsx` file, and adding a metadata element:

```javascript
// page.tsx
export const metadata = {
  title: "Home",
};
```

Then in the layout you can add the following:

```javascript
// main layout.tsx file
export const metadata: Metadata = {
  title: {
    template: `%s | Prostore`,
    default: APP_NAME,
  },
};
```

This setup will add the `route` name before the `|` character; so this will display in the tab in the browser for the webpage.

Can also set the URL for the base URL to your metadata with:

```javascript
export const metadata: Metadata = {
  title: {
    template: `%s | Prostore`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};
```
