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
    bgSrc={
      /* This prop lets you easily set a responsive image as your background */
    }
    bg={/* Lets you set the background color of the app */}
    headFont={/* Lets you change the font of all the headers in the app */}
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
| justify-content   | jcEnd      | center         |
| justify-content   | jcCenter   | space-between  |
| justify-content   | jcBetween  | space-around   |
| justify-content   | jcAround   | space-evenly   |
| justify-content   | jcEvenly   | flex-start     |
| align-items       | aiCenter   | center         |
| align-items       | aiStart    | flex-start     |
| align-items       | aiEnd      | flex-end       |
| align-items       | aiStretch  | stretch        |
| align-content     | acCenter   | center         |
| align-content     | acStart    | flex-start     |
| align-content     | acEnd      | flex-end       |
| align-content     | acBetween  | space-between  |
| align-content     | acAround   | space-around   |
| align-content     | acEvenly   | space-evenly   |
| flex-direction    | drape      | column         |
| align-items       | drape      | center         |

Example:

```javascript
// col changes flex-direction to column
// aiCenter changes align items to center
<Flex col aiCenter>...</Flex>
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
| min-height          | minH      | none          |
| max-width           | maxW      | none          |
| min-width           | minW      | none          |
| max-height          | maxH      | none          |
| box-sizing          | boxSize   | border-box    |
| box-shadow          | shadow    | none          |
| overflow            | overflow  | hidden        |
| font-family         | font      | Open Sans     |
| font-size           | fSize     | 1.6rem        |
| clip-path           | clip      | none          |
| background-size     | bgSize    | auto          |
| background-attach   | bgSize    | scroll        |
| background-position | bgSize    | center        |

> The square prop changes width and height at the same time.

**Style Maps:**

| CSS Property Name | Style Prop    | Property Value                      |
| ----------------- | ------------- | ----------------------------------- |
| width             | stretch       | 100%                                |
| margin            | xsm           | 1rem                                |
| margin            | sm            | 2rem                                |
| margin            | mm            | 3rem                                |
| margin            | lm            | 4rem                                |
| margin            | xlm           | 5rem                                |
| padding           | xsp           | 1rem                                |
| padding           | sp            | 2rem                                |
| padding           | mp            | 3rem                                |
| padding           | lp            | 4rem                                |
| padding           | xlp           | 5rem                                |
| font-size         | xsf           | 0.6rem                              |
| font-size         | sf            | 1rem                                |
| font-size         | mf            | 1.4rem                              |
| font-size         | lf            | 2rem                                |
| font-size         | xlf           | 3rem                                |
| box-shadow        | shade         | 0 0.3rem 1rem ${theme.colors.gray7} |
| box-shadow        | backlight     | 0 0.3rem 1rem ${theme.colors.gray0} |
| box-sizing        | cbox          | content-box                         |
| box-sizing        | init          | initial                             |
| box-sizing        | inherit       | inherit                             |
| overflow          | visible       | visible                             |
| overflow          | scroll        | scroll                              |
| overflow          | auto          | auto                                |
| text-align        | taRight       | right                               |
| text-align        | taLeft        | left                                |
| text-align        | taCenter      | center                              |
| text-align        | taJustify     | justify                             |
| text-align        | taAll         | justify-all                         |
| text-align        | taStart       | start                               |
| text-align        | taEnd         | end                                 |
| background-size   | sizeLen       | length                              |
| background-size   | sizeCover     | cover                               |
| background-size   | sizeContain   | contain                             |
| background-size   | sizeInitial   | initial                             |
| background-size   | sizeInherit   | inherit                             |
| background-size   | sizeAuto      | auto                                |
| background-attach | attachFix     | fix                                 |
| background-attach | attachLocal   | local                               |
| background-attach | attachInherit | inherit                             |
| background-attach | attachInitial | initial                             |
| background-attach | attachScroll  | scroll                              |

## New Semantic Components!

Now featuring new semantic components! Main, Section and Aside. They work much like Flex but with flex direction default to column and align items default to center. Main difference is that they break down into their sematic counterparts instead of div's.

### AppWrapper:

AppWrapper is a div that is meant to wrap your app page, where you hold your routes. It's purpose is to easily change the font and background of the whole application.

### Wrapper:

This should wrap every parent component. It set's min height to 100% view height, and max width is set to 100% view width. This makes flexing items around your page a dream. Default flex-direction is set to column instead of row and align-items is set to.

### Text:

A text component that lets you set size, font and font weight easily.

Example:

```javascript
// Bold text, font size 2rem, text align center, font Georgia
<Text bold lf taCenter font="Georgia">
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
<Flex w="20rem" h="10rem" jcAround aiCenter shade>
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

### Text:

A text component that lets you set size, font and font weight easily.

Example:

```javascript
// Bold text, font size 2rem, text align center, font Georgia
<Text bold lf taCenter font="Georgia">
  Some text here...
</Text>
```

### Modal

In order to pull off a modal you're going to need 2 components: Modal and useModal. In order to make Modal work your going to need to pass it an "isActive" prop and a "toggle" prop. You can get both of these props off of useModal hook:

```javascript
import { useModal } from "adaptiv-ui";

const [isActive, toggle] = useModal();
```

Then you can plug them into Modal and you're good to go!

Example:

```javascript
import React from "react";
import { useModal, Modal, Flex, Button, Text } from "adaptiv-ui";

export default function Component() {
  const [isActive, toggle] = useModal();

  return (
    <>
      <Button onClick={toggle}>Toggle</Button>
      <Modal isActive={isActive} toggle={toggle}>
        <Flex w="40rem" h="40rem" drape>
          <Text>I'm a modal, yo!</Text>
          <Button autoFocus onClick={() => alert("Thanks for clicking me!")}>
            Click me!
          </Button>
          <Button onClick={toggle}>Close</Button>
        </Flex>
      </Modal>
    </>
  );
}
```

![Modal image](./assets/modal.png)

### Tool Tip

TooTip component has all the same props as Flex, but it has a special feature! After adding your element, you can place a div under it with a className of "tooltip". Whatever you put inside this "tooltip" div will be invisible until you hover over or focus on the element you nested inside your ToolTip component. In addition to the Flex props, there are a couple of extra props that ToolTip has so that you can edit your "tooltip" element and position.

ttW: edits the **width** of the tooltip
ttH: edits the **height** of the tooltip
ttColor: edits the **color** of the tooltip
ttBg: edits the **background color** of the tooltip
ttTop: edits the **top position** of the tooltip
ttRight: edits the **right position** of the tooltip
ttBottom: edits the **bottom position** of the tooltip
ttLeft: edits the **left position** of the tooltip
ttRadius: edits the **radius** of the tooltip
ttZindex: edits the **z index** of the tooltip

Example:

```javascript
// using tt props to edit tool tip position and size
<ToolTip ttLeft="105%" tabIndex={0} ttW="12rem" ttTop="25%">
  {/* These two Box's make up the content that we want to add a tooltip too */}
  <Box bg={theme.colors.primary} circle p="2rem">
    <Box sqr="2rem" window bg="white" />
  </Box>
  {/* Our "tooltip" div is the container for what we want to show in our
  tooltip on focus or hover. */}
  <div class="tooltip">
    <Text bold lf taCenter>
      Tooltip text
    </Text>
  </div>
</ToolTip>
```

![Tooltip image](./assets/tooltip.png)

### Container

Container is a component that's main purpose is to provide a background image. It also can set colors as the background but the css for images is set for responsiveness. If you need things to lay on top of a background image this is the component to use. Just wrap the content in Container and set bgSrc prop to the location/URL of your image. It also has flex enabled and all sizing props. By default justify content is column and align items is center. You can change these individually to you own desire. You can also use the `across` props to set them to flex-start / normal respectively.

Example:

```javascript
<Wrapper>
  {/* Add invert prop to make text white instead of black */}
  <Container bgSrc={image} h="50vh" invert>
    <h3>Stuff...</h3>
    <h3>Stuff...</h3>
    <h3>Stuff...</h3>
  </Container>
</Wrapper>
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
    <Wrapper bg={theme.colors.gray8}>
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
<Box sqr="5rem" bg={theme.colors.red5} message />
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
| clip-path         | arrowLeft     | polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%) |
| clip-path         | arrowRight    | polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)                                               |
| clip-path         | pointLeft     | polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%)                                                               |
| clip-path         | pointRight    | polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)                                                                 |
| clip-path         | chevronLeft   | polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)                                                      |
| clip-path         | chevronRight  | polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)                                                        |
| clip-path         | star          | polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)                     |
| clip-path         | cross         | polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%) |
| clip-path         | window        | polygon(0 40%, 40% 40%, 40% 0, 60% 0, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0 60%)     |
| clip-path         | message       | polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)                                               |
| clip-path         | close         | polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%) |
| clip-path         | circle        | circle(50% at 50% 50%)                                                                                              |
| clip-path         | ellipse       | ellipse(34% 50% at 50% 50%)                                                                                         |