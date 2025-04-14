# Notes

## Setup

added a `shared` dir inside the `components` dir, and then added a `header` folder, and then an `index.tsx` file in that file to start working.

Then we imported the header into the `(root)` layout file.

installed lucide-react for icons as well.

See `header.tsx` file for code.

**NOTE**: the way this was implemented in styling I'm not sure I had the right nesting at first.

And we import the server url constant to complete this.

## Footer

Made a quick footer with no links:

```javascript
import { APP_NAME } from "@/lib/constants";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear} {APP_NAME}. All Rights Reserved.
      </div>
    </footer>
  );
}
```
