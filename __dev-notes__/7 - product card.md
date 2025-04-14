# Notes

The product card will replace the div with just hte product name; and we add the shadcn card component.

Pretty straightforward:

```javascript
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Card>
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>{product.name}</Link>
        <div className="flex-between gap-4">
          <p> {product.rating} Stars</p>
          {product.stock > 0 ? (
            <p className="font-bold">{product.price}</p>
          ) : (
            <p className="text-destructive">Sold Out</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
```
