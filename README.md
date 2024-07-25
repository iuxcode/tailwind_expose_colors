# Expose Tailwind colors as CSS custom properties (variables)

This is a simple Tailwind plugin to expose all of Tailwind's colors, including any custom ones, as custom css properties on the :root element from [Merot](https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574).

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
      },
    },
  },
  plugins: [
    // the plugin goes here
  ],
};
```
