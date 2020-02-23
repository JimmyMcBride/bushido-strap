# The Bushido-strap Styled Components Library 🎨

Bushido-strap is a design system built with accessability as the highest priority.

## Getting Started

### Installing

To install Bushido-strap to your project simply run `yarn add bushido-strap` || `npm i bushido-strap` and your ready to hook it up!

### CSS overhaul and AppWrapper

Bushido-strap comes with a css file you can import that includes a nice subtle style overhaul and a normalize. Just add `import "bushido-strap/css/main.css";` to the top of your src/index.js!

AppWrapper is a powerful component that lets you set the background and fonts of your application.

Example:

```javascript
// src/App.js
export default function App() {
  return (
    <AppWrapper
    bg_src={
      /* This prop lets you easily set a responsive image as your background */
    }
    bg={/* Lets you set the background color of the app */}
    head_font={/* Lets you change the font of all the headers in the app */}
    font={/* Lets you can the font of everything else in the app */}
  >
      <Route path="/" exact component={Dashboard} />
    </AppWrapper>
  );
}
```

### Style Props and Maps

Bushido-strap comes with some unique style props and maps that make laying out and editing you page very easily.

Style props need to be given a value and the associated

These are the props you will probably use most often. I'll break them down into catagories.

#### Flex-box

**Props:**

| CSS Property Name | Prop Name | Default value |
| ----------------- | --------- | ------------- |
| flex-direction    | direction | row           |
| justify-content   | justify   | flex-start    |
| align-items       | align     | normal        |
| align-content     | content   | stretch       |

Example:

```javascript
<Flex direction="column" align="center">
  ...
</Flex>
```

**Style Maps:**

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| flex-direction    | col        | column         |
| flex-direction    | revrow     | row-reverse    |
| flex-direction    | revcol     | column-reverse |
| justify-content   | jc_end     | center         |
| justify-content   | jc_center  | space-between  |
| justify-content   | jc_between | space-around   |
| justify-content   | jc_around  | space-evenly   |
| justify-content   | jc_evenly  | flex-start     |
| align-items       | ai_center  | center         |
| align-items       | ai_start   | flex-start     |
| align-items       | ai_end     | flex-end       |
| align-items       | ai_stretch | stretch        |
| align-content     | ac_center  | center         |
| align-content     | ac_start   | flex-start     |
| align-content     | ac_end     | flex-end       |
| align-content     | ac_between | space-between  |
| align-content     | ac_around  | space-around   |
| align-content     | ac_evenly  | space-evenly   |
| flex-direction    | drape      | column         |
| align-items       | drape      | center         |

Example:

```javascript
// col changes flex-direction to column
// ai_center changes align items to center
<Flex col ai_center>...</Flex>
// drape changes flex-direction to column and align-items to center
<Flex drape>...</Flex>
```

### Sizing and color props

**Props:**

| CSS Property Name   | Prop Name | Default value |
| ------------------- | --------- | ------------- |
| height              | h         | auto          |
| width               | w         | auto          |
| width && height     | sqr       | auto          |
| border-radius       | radius    | 0.3rem        |
| border              | border    | none          |
| margin              | m         | 0             |
| padding             | p         | 0             |
| background          | bg        | none          |
| color               | color     | auto          |
| opacity             | opacity   | none          |
| min-height          | min_h     | none          |
| max-width           | max_w     | none          |
| min-width           | min_w     | none          |
| max-height          | max_h     | none          |
| box-sizing          | box_size  | border-box    |
| box-shadow          | shadow    | none          |
| overflow            | overflow  | hidden        |
| font-family         | font      | Open Sans     |
| font-size           | f_size    | 1.6rem        |
| clip-path           | clip      | none          |
| background-size     | bg_size   | auto          |
| background-attach   | bg_size   | scroll        |
| background-position | bg_size   | center        |

> The square prop changes width and height at the same time.

**Style Maps:**

| CSS Property Name | Style Prop     | Property Value               |
| ----------------- | -------------- | ---------------------------- |
| width             | stretch        | 100%                         |
| margin            | xsm            | 1rem                         |
| margin            | sm             | 2rem                         |
| margin            | mm             | 3rem                         |
| margin            | lm             | 4rem                         |
| margin            | xlm            | 5rem                         |
| padding           | xsp            | 1rem                         |
| padding           | sp             | 2rem                         |
| padding           | mp             | 3rem                         |
| padding           | lp             | 4rem                         |
| padding           | xlp            | 5rem                         |
| font-size         | xsf            | 0.6rem                       |
| font-size         | sf             | 1rem                         |
| font-size         | mf             | 1.4rem                       |
| font-size         | lf             | 2rem                         |
| font-size         | xlf            | 3rem                         |
| box-shadow        | shade          | 0 0.3rem 1rem ${theme.gray7} |
| box-shadow        | backlight      | 0 0.3rem 1rem ${theme.gray0} |
| box-sizing        | cbox           | content-box                  |
| box-sizing        | init           | initial                      |
| box-sizing        | inherit        | inherit                      |
| overflow          | visible        | visible                      |
| overflow          | scroll         | scroll                       |
| overflow          | auto           | auto                         |
| text-align        | ta_right       | right                        |
| text-align        | ta_left        | left                         |
| text-align        | ta_center      | center                       |
| text-align        | ta_justify     | justify                      |
| text-align        | ta_all         | justify-all                  |
| text-align        | ta_start       | start                        |
| text-align        | ta_end         | end                          |
| background-size   | size_len       | length                       |
| background-size   | size_cover     | cover                        |
| background-size   | size_contain   | contain                      |
| background-size   | size_initial   | initial                      |
| background-size   | size_inherit   | inherit                      |
| background-size   | size_auto      | auto                         |
| background-attach | attach_fix     | fix                          |
| background-attach | attach_local   | local                        |
| background-attach | attach_inherit | inherit                      |
| background-attach | attach_initial | initial                      |
| background-attach | attach_scroll  | scroll                       |

### AppWrapper:

AppWrapper is a div that is meant to wrap your app page, where you hold your routes. It's purpose is to easily change the font and background of the whole application.

### Wrapper:

This should wrap every parent component. It set's min height to 100% view height, and max width is set to 100% view width. This makes flexing items around your page a dream. Default flex-direction is set to column instead of row and align-items is set to.

### Text:

A text component that lets you set size, font and font weight easily.

Example:

```javascript
// Bold text, font size 2rem, text align center, font Georgia
<Text bold lf ta_center font="Georgia">
  Some text here...
</Text>
```

### Box:

Box is a div with lots of useful props. Images inside the box are set to `width: 100%; height: auto;` so they will size responsively. Just adjust the with of the Box to size the image.

Example:

```javascript
/* Placing the image in a Box with a width of 5rem
will responsively size it to a width of 50px */
<Box w="5rem">
  <img src={`image source`} alt="alt text" >
</Box>
```

Box's also have a prop for background, so you can set a background color, a width and a height and you have a colored box. One thing that makes Box & FlexBox unique is that you can set shape props on them! So just by adding the prop `star` you turn the div into a star. See list of style maps below for full list of shape props you can choose from. You can even create your own by using the clip-path prop, clip!

Example:

```javascript
<Flex w="20rem" h="10rem" jc_around ai_center shade>
  <Box star bg="red" sqr="5rem" />
  <Box message bg="green" sqr="5rem" />
  <Box octagon bg="blue" sqr="5rem" />
</Flex>
```

Will look like...

![Shape image](./assets/../shapes.png)

> I also find that Box's make good spacers, between elements!

```javascript
// This puts a 20px spacer between Header, Body and Footer components
<Flex drape>
  <Header />
  <Box h="2rem" />
  <Body />
  <Box h="2rem" />
  <Footer />
</Flex>
```

### Card:

A beautiful card component that helps you lay out chunks of information across the page. Has flex properties; flex direction is column and align items is center by default. To change them to row and normal just add across prop.

Example:
```javascript
<Card across></Card>
```

Card also has an invert color map that inverts the values making the background dark and the text light.

Example:
```javascript
<Card across>
  <h1>This is a dark mode card.</h1>
</Card>
```

### Button:

It's a beautiful button! It has some color props to quickly and easily change the color scheme of the button.

List of color props:

- red
- orange
- yellow
- green
- teal
- cyan
- blue
- purple
- pink
- invert

### Linkton:

Looks exactly like a button, but is a Link from @reach/router.

List of color props:

- red
- orange
- yellow
- green
- teal
- cyan
- blue
- purple
- pink
- invert

Example:

```javascript
<Linkton to="/" red>Go home</Linkton>
```

### Form:

It's a form with flex-box (direction: column, align: center by default).

### Input:

A better looking input to use.

### Importing bushido-strap css and styled components 🚀

It's highly recommended to pull in bushido-strap's global style overhauls, just `import "bushido-strap/css/main.css"` in your root index.js file. Feel free to check out the code to see what is under the hood! 🔥

All styled components get exported from `bushido-strap`. So all you need to do is deconstruct the component(s) you want from "bushido-strap".

#### Example:

`./src/components/MyComponent`

```javascript
import React from "react";
import { Wrapper, Flex, Button } from "bushido-strap";

export default function MyComponent() {
  return (
    <Wrapper>
      <Flex drape w="80vw">
        <h2>Card Header</h2>
        <p>Card text.</p>
        <Flex>
          <Button primary>Left Button</Button>
          <Button secondary>Right Button</Button>
        </Flex>
      </Card>
    </Wrapper>
  );
}
```

## Theme Color Variables 🖌

If you want to use the color variables in just throw in theme to your Bushido-strap import: `import { theme } from "bushido-strap"`

Example:

```javascript
import React from "react";
import { Wrapper, Flex, Button, theme } from "bushido-strap";

export default function MyComponent() {
  return (
    <Wrapper bg={theme.gray8}>
      <Flex w="80vw" drape>
        <h2>Card Header</h2>
        <p>Card text.</p>
        <Flex>
          <Button primary>Left Button</Button>
          <Button secondary>Right Button</Button>
        </Flex>
      </Flex>
    </Wrapper>
  );
}
```

[Check here to see the full list of my javascript theme colors.](https://github.com/ApaptivUI/bushido-strap/blob/master/styled/theme/index.js)

### Flex and Box Shape Props!

Flex's and Box's have unique shape props you can use to turn your div's into awesome little shapes! Highly recommend using the sqr prop to set height and width to equal size's and giving a background (bg) prop color since the default is set to none.

You can also set a custom clip path with the `clip` prop.

Example:

```javascript
<Box sqr="5rem" bg={theme.red5} message />
```

| CSS Property Name | Style Map     | Property Value                                                                                                      |
| ----------------- | ------------- | ------------------------------------------------------------------------------------------------------------------- |
| clip-path         | triangle      | polygon(50% 0%, 0% 100%, 100% 100%)                                                                                 |
| clip-path         | trapezoid     | polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)                                                                         |
| clip-path         | parallelogram | polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)                                                                         |
| clip-path         | rhombus       | polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)                                                                         |
| clip-path         | pentagon      | polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)                                                               |
| clip-path         | hexagon       | polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)                                                       |
| clip-path         | heptagon      | polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)                                                       |
| clip-path         | octagon       | polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)                                     |
| clip-path         | nonagon       | polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)                            |
| clip-path         | decagon       | polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)                   |
| clip-path         | bevel         | polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)                                     |
| clip-path         | rabbet        | polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%) |
| clip-path         | arrow_left    | polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%) |
| clip-path         | arrow_right   | polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)                                               |
| clip-path         | point_left    | polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%)                                                               |
| clip-path         | point_right   | polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)                                                                 |
| clip-path         | chevron_left  | polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)                                                      |
| clip-path         | chevron_right | polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)                                                        |
| clip-path         | star          | polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)                     |
| clip-path         | cross         | polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%) |
| clip-path         | window        | polygon(0 40%, 40% 40%, 40% 0, 60% 0, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0 60%)     |
| clip-path         | message       | polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)                                               |
| clip-path         | close         | polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%) |
| clip-path         | circle        | circle(50% at 50% 50%)                                                                                              |
| clip-path         | ellipse       | ellipse(34% 50% at 50% 50%)                                                                                         |