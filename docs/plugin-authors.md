# Plugin Authors

## CSS Hooks

mint-editor provides access to individual style values using CSS custom properties (see [Customization](customization) for details). Use these values along with a fallback value to easily specify styles for mint-editor as well as docsify's default themes.

```css
.myclass {
    /* Color will be --theme-color for mint-editor themes */
    /* Color will be red for other themes */
    color: var(--theme-color, red);
}
```

mint-editor also adds a `themeable` class to the `<html>` element during initialization. This class can be used to create styles that will only be applied when mint-editor is used.

```html
<html lang="en" class="themeable">
```

```css
.myclass {
    background: red;
}

/* mint-editor (recommended - does not increase specificity) */
:where(.themeable) .myclass {
    background: blue;
}

/* mint-editor (increases specificity) */
.themeable .myclass {
    color: blue;
}
```

## JavaScript Hooks

There are several ways to detect if mint-editor is being used via JavaScript. The first is to test for the existence of the `themeable` class on the document:

```js
var isThemeable = document.documentElement.classList.contains('themeable');

console.log(isThemeable); // true|false (Boolean)
```

Another way is to check for the existence of a mint-editor version in the `$docsify` configuration object. Checking the version is also useful if your plugin's behavior is dependent on the version of mint-editor being used.

```js
var themeableVersion = (window.$docsify.themeable || {}).version;
var themeableSemVer = (window.$docsify.themeable || {}).semver;

console.log(themeableVersion); // "<Number>.<Number>.<Number>" (String)
console.log(themeableSemVer);  // [<Number>, <Number>, <Number>] (Array)
```
