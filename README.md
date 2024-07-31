# _Stylist.css_

_Stylist_ is a plugin for Obsidian that allows you to add classes and styles on markdown.

> This is a fork of the original plugin made by [@ixth](https://github.com/ixth).

> [!important]
> The only thing I did was remove the css parser, because it limited my use cases, so be more aware
> this might break any of your already working css.
> (the trick to solve it is by putting .markdown-preview-view in the beginning of your selectors)

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

> [!important]
> ~All styles are processed to prevent messing up the rest of the Obsidian app.~
> No style is processed anymore due to me removing the css parser as said earlier. So again, be aware this
> might break any of your already working css.
> (the trick to solve it is by putting .markdown-preview-view in the beginning of your selectors)

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

---

> ⚠ Disclaimer <br>
> I pretend only to mantain the plugin in case things break, I don't plan on add any feature unless
> it matches any of my use cases.
