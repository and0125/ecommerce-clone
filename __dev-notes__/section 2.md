# Notes

## Setup

- cleared home page
- added Inter as the font
- added shadcnUi
- added resources
- kept initial `globals.css` file because the one provided has the older syntax for it.

## Root Layout and Constants

We can have multiple layouts, and this can have groups of page using the parentheses in a folder name; this will treat the routes in the folder as a group, and not as a file based route.

We can do this to group pages with a specific layout.

So we make a group called `(root)` in the main application folder to hold our root pages, and copy the root layout file as a group specific layout file in that directory, but we remove the html tags, and add a div that's a wrapper for those specific pages.

We then want our home page to have this `(root)` layout, so we can move the `page.tsx` file into the `(root)` group.
