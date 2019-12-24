# My Styled Components Library 📔

I originally created my own [react app template named Bushido](https://www.npmjs.com/package/cra-template-bushido) and set it up just the way I like it. I had a whole bunch of nifty styled components I used quite frequently with a theme object where I had a bunch of color variables stored and a index.css file that gave everything a small but smooth overhaul. It worked really well but I got tired of trying to remember where the global folder was in relation to my current directory. And I just keep thinking to myself, _I could turn this into a style library that I could just import..._ So I did!

## Prebuilt Global Styled Components 📓

Since I have added styled-components to the list of additional dependencies, I thought it would be a good idea to through some prebuilt styled-components that are designed to make you life a little easier when laying out your page. Here's a list of the prebuilt components and their purpose:

- AppWrapper: This is just a generic div wrapping the whole app with no props. This is intended to wrap all the routes for the project in your App.js file.
- Wrapper: This should wrap every parent component. This is just like FlexBox, only difference is that in Wrapper the default for flex-direction is set to column. Also has props for **height** (auto), **width** (auto), and **background** (none).
- FlexBox: This is a generic div with props for **all** the flexbox properties set to there defaults. Has props for **height**, **width** and **background**, as well.
  Example:

```react
<FlexBox direction="column" width="100%" height="5rem">
  /* Code goes here */
</FlexBox>
```

- Card: For when you need to have a card component to display some information.
- Button: Self explanatory.
- Linkton: Looks exactly like a button, but is a Link from react-router-dom.
- Form: Basic form with **all** props for flexbox (flex-direction default set to column), **height**, **width** and **background**.
- Input: Slightly styled to look a little nicer.

## Importing bushido-strap css and styled components 🚀

All styled components get exported from `bushido-strap`. So all you need to do is deconstruct the component(s) you want from "./src/components/Global/styled". Example: `import { Wrapper, Button, FlexBox } from "bushido-strap"`.

If you want to pull in bushido-strap's global style overhauls, then `import "bushido-strap/css"` in your root index.js file. Feel free to check out the code to see what is under the hood! 🔥

## Theme Color Variables

There are currently 2 ways you can pull in color variables. You can use one or the other, and even use both. The theme object in styled/theme has the same color variables as the variables file in the SASS folder. Only difference is one is a list of SASS variables and the other is an object with values. So we can use our variables in SASS or in styled components.

#### The Styled Component Way

At the top of the file you want to use the color variables in just throw in this import: `import theme from "bushido-strap/styled/theme"`

Example:
```javascript
const StyledBox = styled(FlexBox)`
  background: ${theme.blue5};
`;
```

[Check here to see the full list of my javascript theme colors.](https://github.com/JimmyMcBride/bushido-strap/blob/master/styled/theme/index.js)

#### The SASS Way

At the top of your SASS file that you want to use the color variables in just import: `@import "bushido-strap/sass/variables.scss";`

Example:
```scss
body {
  background: $red3;
}
```

[Check here to see the full list of my SASS theme colors.](https://github.com/JimmyMcBride/bushido-strap/blob/master/sass/styles/variables.scss)

> The closer the number at the end of the color variable is to 0 the lighter the color is.