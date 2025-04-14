# Mode Toggler

This enables you to select light, dark, or system theme.

This requires a new package.

**Update**: changed the type of button for the home button as well; from a ghost variant; just got rid of the variant keyword.

`npm install next-themes` for the different modes.

Then `npx shadcn@latest add dropdown-menu`.

To adjust with the Theme, we add the `ThemeProvider` to the root layout file, and then add attributes to it. One important attribute is this one:

<html lang="en" suppressHydrationWarning> - this suppresses a warning that happens when the themes are changed, so that the nextjs UI continues to render when the window updates.

We updated the root layout to:

```javascript
<html lang="en" suppressHydrationWarning>
  <body className={`${inter.className} antialiased`}>
    <ThemeProvider
      attribute={"class"}
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  </body>
</html>
```

This will change the theme based on the `defaultTheme` prop, and now that we can change that, we can make it adjustable from a dropdown in the header.

We do this in a `mode-toggle.tsx` file we add to the header file.

## Hooks

we plan to use hooks to modify things based on data from the client, so we need to make this file a `use client` component. This enables use to use the `useTheme` hook from `next-themes`.

Then we want to use the shadcn dropdown menu.

He demonstrated the issue; when the themes are switched, it uses a concept called a `window` on the client side, but this ends up being a server action because of the hook, so there's technically no window for it to use. So the window returns undefined in this case. The `suppressHydrationWarning` setting was initially meant to take care of this, but this alone doesn't do it.

So we need to make sure the component is mounted before trying to render the theme.

To do this we use:

```javascript
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) {
  return null;
}
```

Which is a common trick for checking if a component is mounted or not; which can help to avoid things like this hydration error.

## Finishing the Dropdown

we have the trigger setup, but not the dropdown, so we added this.
