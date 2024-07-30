# _Stylist_

_Stylist_ is a plugin for Obsidian that allows to add classes and styles on markdown.

> [!note]
> This is a fork of the original plugin made by [@ixth](https://github.com/ixth).
> The only thing I did was remove the css parser, because it limited the user so be more aware using
> it on generic selector. I do not pretend on updating it further.

> [!warning]
> This plugin doesn't work in Live Preview mode.

## Examples

For example, if you want to add underline for headings on one particular page, you can do it like this:

````markdown
```style
h2 {
    text-decoration: underline;
}
```

## Does wood sink in water?
````

Result:

![Style tag render](.assets/style-dark.png#gh-dark-mode-only)
![Style tag render](.assets/style-light.png#gh-light-mode-only)

> **Note**
> All styles are processed to prevent messing up the rest of the Obsidian app.

Or if you want certain blocks on your page to use multi-column layout, you can just add class on containing block:

````markdown
```style
.multicol-3 ul {
    columns: 3;
}
```

## What also floats in water?

%% Class will be added not to the list element itself,
but to section container, so you should write styles respectively %%

`classname:multicol-3`

-   Bread
-   Apples
-   Very small rocks
-   Cider
-   Grape gravy
-   Cherries
-   Mum
-   Churches
-   Lead
-   A duck
````

Result:

![Class render](.assets/class-dark.png#gh-dark-mode-only)
![Class render](.assets/class-light.png#gh-light-mode-only)
