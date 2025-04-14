# Notes

the shadcn component has a sheet menu, which is a sidebar that we can use for a side bar menu.

We _refactor_ the side of the header that's the menu buttons into a seperate component.

**TIP**: when something isn't auto-imported, use `ctrl + .` as a shortcut to bring up a menu of where to import the component from.

Once we copied the code over, we put the new `Menu` component into the header.

**NOTE**: for some reason, this refactor didn't work for me, so I kept the original component.

Later on, we'll create a user button that will change when a user's signed in.

**NOTE**: the big trick here is to use two different nav components; one that renders when the screen is large, and the other to render when the screen is small, instead of doing this adjustment by width.
