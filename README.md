# My Styled Components Library 📔

### Update (Live in versions 1.2.7+) Color Scheme Props!!!

> Color scheme themes for Button, Linkton, and Card components have been added. See the documentation below for more info.

I originally created my own [react app template named Bushido](https://www.npmjs.com/package/cra-template-bushido) and set it up just the way I like it. I had a whole bunch of nifty styled components I used quite frequently with a theme object where I had a bunch of color variables stored and a index.css file that gave everything a small but smooth overhaul. It worked really well but I got tired of trying to remember where the global folder was in relation to my current directory. And I just keep thinking to myself, _I could turn this into a style library that I could just import..._ So I did!

## Prebuilt Global Styled Components 📓

Since I have added styled-components to the list of additional dependencies, I thought it would be a good idea to through some prebuilt styled-components that are designed to make you life a little easier when laying out your page. Here's a list of the prebuilt components and their purpose:

### AppWrapper:

This is just a generic div wrapping the whole app with only one prop for **background**. This is intended to wrap all the routes for the project in your App.js file and it's only purpose it to set the background. The default is set to 5% gray so the screen is a little easier on the eyes. Wrappers that wrap a page set the page width and height and have no background by default.

`./styled/components/AppWrapper.js`

```javascript
const AppWrapper = styled.div`
  background: ${props =>
    props.background ? props.background : `${theme.gray0}`};
`;
```

### Box:

Box is just a div with props for height, width, and background.

> One thing to know about images is that by default, the main.css sets images to `width: 100%, height: auto` so some really funny things will happen if you don't put your images inside a container with a width property. Since height is set to auto you may need to manually tell the image div how wide and and tall to be. If you have a row of items in a FlexBox and you have a width on you image Box of 25px and the FlexBox it is in is 50px high for any reason, it will distort the image length-wise unless you hard code the height to the appropriate proportion.

You can also use this Box as a spacer.

Example:

```javascript
<FlexBox>
  <TopComponent />
  <Box height="20px" />
  <BottomComponent />
</FlexBox>
```

`./styled/components/Box.js`

```javascript
const Box = styled.div`
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
  background: ${props => (props.background ? props.background : "none")};
`;

export default Box;

Box.propTypes = {
  // CUSTOM PROPTYPES
  height: PropTypes.string,
  weight: PropTypes.string,
  background: PropTypes.string
};
```

### Wrapper:

This should wrap every parent component. This is just like FlexBox, only difference is that in Wrapper the _default for **flex-direction** (prop name **direction**) is set to **column** and **align-items** (prop name **align**) is set to **center**_. Also has props for **height** (auto), **width** (auto), and **background** (none), as well as special props for **min_height** (100vh) and **max_width** (100vw).

This keeps the wrapper at least as big as the page your viewing it on. It can get longer that 100vh so we can scroll down as see stuff, but it cannot get so wide it has a horizontal scrollbar. You can change the props for min-height and max-width but I don't recommend it unless you absolutely need to.

> **Note:** Name of **align-content** prop is **content**.

`./styled/components/Wrapper.js`

```javascript
const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  flex-wrap: ${props => (props.wrap ? props.wrap : "nowrap")};
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.align ? props.align : "center")};
  align-content: ${props => (props.content ? props.content : "stretch")};
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
  min-height: ${props => (props.min_height ? props.min_height : "100vh")};
  max-width: ${props => (props.max_width ? props.max_width : "100vw")};
  background: ${props => (props.background ? props.background : "none")};
`;
```

### FlexBox:

This is a generic div with props for **all** the flexbox properties set to their defaults. Has props for **height**, **width** and **background**, as well.

`./styled/components/FlexBox.js`

```javascript
const FlexBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  flex-wrap: ${props => (props.wrap ? props.wrap : "nowrap")};
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.align ? props.align : "stretch")};
  align-content: ${props => (props.content ? props.content : "stretch")};
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
  background: ${props => (props.background ? props.background : "none")};
`;
```

### Card:

For when you need to have a card component to display some information. Lot's of props going on here. All flexbox props here. **Flex-direction** (prop name **direction**) is set to **column**, and **justify-content** (prop name **justify**) is set to **center** instead of defaults. Also contains props for: **height**, **width**, **border**, **border-radius**, **padding**, and **margin**.

#### New: Color Scheme Props!

By adding a prop to your card (example: `<Card dark><h1>Header</h1></Card>`), you can change the color scheme of that card. Here's a list of the props and their color schemes:

- dark = // dark theme
- light = // light theme

> Has a medium tone by default.

`./styled/components/Card.js`

```javascript
const Card = styled.div`
  ${getColor}
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  flex-wrap: ${props => (props.wrap ? props.wrap : "nowrap")};
  justify-content: ${props => (props.justify ? props.justify : "center")};
  align-items: ${props => (props.align ? props.align : "stretch")};
  align-content: ${props => (props.content ? props.content : "stretch")};
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  padding: ${props => (props.padding ? props.padding : "0.5rem 1rem")};
  margin: ${props => (props.margin ? props.margin : "1rem 0")};
  box-shadow: 0 0.3rem 1rem ${theme.gray5};
  code {
    ${getCodeColor}
  }
  p {
    text-align: left;
    line-height: 2.2rem;
  }
`;
```

### Button:

Self explanatory. Has props for: **border**, **border-radius** (prop name **radius**), **padding**, **width**, and **height**.

#### New: Color Scheme Props!

By adding a prop to your button (example: `<Button primary>Click Here</Button>`), you can change the color scheme of that button. Here's a list of the props and their color schemes:

- primary = blue
- secondary = purple
- accent = magenta
- success = green
- warning = orange
- danger = red
- invert = // inverts default values

`./styled/components/Button.js`

```javascript
const Button = styled.button`
  ${getColor}
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem 1rem")};
  padding: ${props => (props.padding ? props.padding : "0.5rem 1rem")};
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  &:hover {
    ${getHover}
  }
`;
```

### Linkton:

Looks exactly like a button, but is a Link from react-router-dom.

#### New: Color Scheme Props!

By adding a prop to your linkton (example: `<Linkton primary>Click Here</Linkton>`), you can change the color scheme of that linkton. Here's a list of the props and their color schemes:

- primary = blue
- secondary = purple
- accent = magenta
- success = green
- warning = orange
- danger = red
- invert = // inverts default values

`./styled/components/Linkton.js`

```javascript
const Linkton = styled(Link)`
  ${getColor}
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0.3rem 1rem")};
  padding: ${props => (props.padding ? props.padding : "0.5rem 1rem")};
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  &:hover {
    ${getHover}
  }
`;
```

### Form:

Basic form with **all** props for flexbox (**flex-direction** (prop name **direction**) default set to **column**), **height**, **width** and **background**.

```javascript
const Form = styled.form`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  flex-wrap: ${props => (props.wrap ? props.wrap : "nowrap")};
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.align ? props.align : "stretch")};
  align-content: ${props => (props.content ? props.content : "stretch")};
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
  background: ${props => (props.background ? props.background : "none")};
`;
```

### Input:

Slightly styled to look a little nicer. Has props for **border-radius** (prop name **radius**) and **padding**.

```javascript
const Input = styled.input`
  border-radius: ${props => (props.radius ? props.radius : "0.3rem")};
  padding: ${props => (props.padding ? props.padding : "0.5rem")};
`;
```

### Importing bushido-strap css and styled components 🚀

If you want to pull in bushido-strap's global style overhauls, then `import "bushido-strap/css/main.css"` in your root index.js file. Feel free to check out the code to see what is under the hood! 🔥

All styled components get exported from `bushido-strap`. So all you need to do is deconstruct the component(s) you want from "bushido-strap".

#### Example:

`./src/components/MyComponent`

```javascript
import React from "react";
import { Wrapper, FlexBox, Button, Card } from "bushido-strap";
import "./styles.scss";

export default function MyComponent() {
  return (
    <Wrapper className="my_component-wrapper">
      <Card width="80vw">
        <h2>Card Header</h2>
        <p>Card text.</p>
        <FlexBox>
          <Button hover_color="red" hover_background="blue">
            Left Button
          </Button>
          <Button hover_color="blue" hover_background="red">
            Right Button
          </Button>
        </FlexBox>
      </Card>
    </Wrapper>
  );
}
```

> **Note:** Especially if your using SASS, I recommend giving every Wrapper a class name with the naming convention `component_name-wrapper`. Then you would create a SASS file in that component's folder and open a tag for that wrappers class name and nest all the sass inside that tag.

#### Example:

`./src/components/MyComponent/styles.scss`

```scss
.my_component-wrapper {
  h2 {
    font-size: 4rem;
  }
  p {
    color: salmon;
  }
}
```

> **Note:** Styling inside of the wrapper keeps everything semantically contained to the specific component your working in. So only h2's and p tags inside the MyComponent wrapper will be effected.

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

At the top of your SASS file that you want to use the color variables in just import: `@import "bushido-strap/sass/styles/variables.scss";`

Example:

```scss
body {
  background: $red3;
}
```

[Check here to see the full list of my SASS theme colors.](https://github.com/JimmyMcBride/bushido-strap/blob/master/sass/styles/variables.scss)

> **Note:** The closer the number at the end of the color variable is to 0 the lighter the color is.
