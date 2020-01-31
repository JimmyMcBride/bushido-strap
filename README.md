# The Bushido Styled Components Library 📑🎨

I originally created my own [react app template named Bushido](https://www.npmjs.com/package/cra-template-bushido) and set it up just the way I like it. I had a whole bunch of nifty styled components I used quite frequently with a theme object where I had a bunch of color variables stored and a index.css file that gave everything a small but smooth overhaul. It worked really well but I got tired of trying to remember where the global folder was in relation to my current directory. And I just keep thinking to myself, _I could turn this into a style library that I could just import..._ So I did!

## Prebuilt Global Styled Components 🛠

Here I have some of the prebuilt styled-components that are designed to make you life a little easier when it comes to laying out your page. Check my documentation below to see a complete list of the prebuilt components and their purpose:

### AppWrapper:

AppWrapper is a div that is meant to wrap your app page, where you hold your routes. It's purpose is to easily change the font and background of the whole application.

**Props:**

| CSS Property Name          | Prop Name     | Default value |
| -------------------------- | ------------- | ------------- |
| font-family (h1-h6 font)   | head_font     | Railway       |
| font-family (regular font) | font          | Railway       |
| background-image           | bg_src        | none          |
| background-color           | bg            | theme.gray2   |
| background-position        | bg_position   | center        |
| background-repeat          | bg_repeat     | no-repeat     |
| background-attachment      | bg_attachment | fixed         |
| background-size            | bg_size       | cover         |
| min-height                 | min_h         | none          |
| max-width                  | max_w         | none          |
| max-height                 | max_h         | none          |
| min-width                  | min_w         | none          |
| margin                     | m             | 0             |
| padding                    | p             | 0             |
| opacity                    | opacity       | none          |

**Style Maps:**

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| margin            | xsm        | 1rem           |
| margin            | sm         | 2rem           |
| margin            | mm         | 3rem           |
| margin            | lm         | 4rem           |
| margin            | xlm        | 5rem           |
| padding           | xsp        | 1rem           |
| padding           | sp         | 2rem           |
| padding           | mp         | 3rem           |
| padding           | lp         | 4rem           |
| padding           | xlp        | 5rem           |

### Wrapper:

This should wrap every parent component. It set's min height to 100% view height, and max width is set to 100% view width. This makes flexing items around your page a dream.
 
> All flex properties are set to default flex values. Wrapper and Card's flex properties for flex-direction and align-items are set to a different default. For both: flex-direction is defaulted to column, and align-content is defaulted to center.

**Props:**

| CSS Property Name | Prop Name | Default value |
| ----------------- | --------- | ------------- |
| flex-direction    | direction | column        |
| justify-content   | justify   | flex-start    |
| align-items       | align     | center        |
| align-content     | content   | stretch       |
| height            | h         | auto          |
| width             | w         | auto          |
| background        | bg        | none          |
| min-height        | min_h     | 100vh         |
| max-width         | max_w     | 100vw         |
| min-width         | min_w     | 100vh         |
| max-height        | max_h     | 100vw         |
| opacity           | opacity   | none          |

**Style Maps:**

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| flex-direction    | row        | row            |
| flex-direction    | revrow     | row-reverse    |
| flex-direction    | revcol     | column-reverse |
| justify-content   | jc_end     | flex-end       |
| justify-content   | jc_center  | center         |
| justify-content   | jc_between | space-between  |
| justify-content   | jc_around  | space-around   |
| justify-content   | jc_evenly  | space-evenly   |
| align-items       | ai_start   | flex-start     |
| align-items       | ai_end     | flex-end       |
| align-items       | ai_stretch | stretch        |
| align-items       | ai_normal  | normal         |
| align-content     | ac_center  | center         |
| align-content     | ac_start   | flex-start     |
| align-content     | ac_end     | flex-end       |
| align-content     | ac_between | space-between  |
| align-content     | ac_around  | space-around   |
| align-content     | ac_evenly  | space-evenly   |
| margin            | xsm        | 1rem           |
| margin            | sm         | 2rem           |
| margin            | mm         | 3rem           |
| margin            | lm         | 4rem           |
| margin            | xlm        | 5rem           |
| padding           | xsp        | 1rem           |
| padding           | sp         | 2rem           |
| padding           | mp         | 3rem           |
| padding           | lp         | 4rem           |
| padding           | xlp        | 5rem           |

### Box:

Box is a div with lots of useful props. Images inside the box are set to `width: 100%; height: auto;` so they will size responsively. Just adjust the with of the Box to size the image.

Box's also have a prop for background, so you can set a background color, a width and a height and you have a colored box. One thing that makes Box & FlexBox unique is that you can set shape props on them! So just by adding the prop `star` you turn the div into a star. See list of style maps below for full list of shape props you can choose from. You can even create your own by using the clip-path prop, clip!

> I also find that Box's make good spacers, between elements!

**Props:**

| CSS Property Name | Prop Name | Default value |
| ----------------- | --------- | ------------- |
| height            | h         | auto          |
| width             | w         | auto          |
| width && height   | sqr       | auto          |
| background        | bg        | none          |
| border-radius     | radius    | 0.3rem        |
| border            | border    | none          |
| color             | color     | auto          |
| margin            | m         | 0             |
| padding           | p         | 0             |
| opacity           | opacity   | none          |
| box-shadow        | shadow    | none          |
| box-sizing        | box_size  | border-box    |
| overflow          | overflow  | hidden        |
| clip-path         | clip      | none          |
| min-height        | min_h     | 100vh         |
| max-width         | max_w     | 100vw         |
| min-width         | min_w     | 100vh         |
| max-height        | max_h     | 100vw         |

> The square prop changes width and height at the same time.

**Style Maps:**

| CSS Property Name | Style Prop | Property Value                |
| ----------------- | ---------- | ----------------------------- |
| height            | reach      | 100%                          |
| width             | stretch    | 100%                          |
| margin            | xsm        | 1rem                          |
| margin            | sm         | 2rem                          |
| margin            | mm         | 3rem                          |
| margin            | lm         | 4rem                          |
| margin            | xlm        | 5rem                          |
| padding           | xsp        | 1rem                          |
| padding           | sp         | 2rem                          |
| padding           | mp         | 3rem                          |
| padding           | lp         | 4rem                          |
| padding           | xlp        | 5rem                          |
| box-shadow        | shade      | 0 0.3rem 1rem \${theme.gray7} |
| box-shadow        | backlight  | 0 0.3rem 1rem \${theme.gray0} |
| box-sizing        | cbox       | content-box                   |
| box-sizing        | init       | initial                       |
| box-sizing        | inherit    | inherit                       |
| overflow          | visible    | visible                       |
| overflow          | scroll     | scroll                        |
| overflow          | auto       | auto                          |

> The fill map makes both height and width 100%.

### Row:

Row is a lot like Box, but with all default flex properties. 

**Props:**

| CSS Property Name | Prop Name | Default value |
| ----------------- | --------- | ------------- |
| flex-direction    | direction | row           |
| justify-content   | justify   | flex-start    |
| align-items       | align     | normal        |
| align-content     | content   | stretch       |
| height            | h         | auto          |
| width             | w         | auto          |
| width && height   | sqr       | auto          |
| min-height        | min_h     | 100vh         |
| max-width         | max_w     | 100vw         |
| min-width         | min_w     | 100vh         |
| max-height        | max_h     | 100vw         |
| border-radius     | radius    | 0.3rem        |
| border            | border    | none          |
| background        | bg        | none          |
| border-radius     | radius    | 0.3rem        |
| color             | color     | auto          |
| margin            | margin    | 0             |
| padding           | padding   | 0             |
| opacity           | opacity   | none          |
| box-shadow        | shadow    | none          |
| box-sizing        | box_size  | border-box    |
| overflow          | overflow  | hidden        |
| clip-path         | clip      | none          |

**Style Maps:**

| CSS Property Name | Style Prop | Property Value                |
| ----------------- | ---------- | ----------------------------- |
| flex-direction    | col        | column                        |
| flex-direction    | revrow     | row-reverse                   |
| flex-direction    | revcol     | column-reverse                |
| justify-content   | jc_end     | center                        |
| justify-content   | jc_center  | space-between                 |
| justify-content   | jc_between | space-around                  |
| justify-content   | jc_around  | space-evenly                  |
| justify-content   | jc_evenly  | flex-start                    |
| align-items       | ai_center  | center                        |
| align-items       | ai_start   | flex-start                    |
| align-items       | ai_end     | flex-end                      |
| align-items       | ai_stretch | stretch                       |
| align-content     | ac_center  | center                        |
| align-content     | ac_start   | flex-start                    |
| align-content     | ac_end     | flex-end                      |
| align-content     | ac_between | space-between                 |
| align-content     | ac_around  | space-around                  |
| align-content     | ac_evenly  | space-evenly                  |
| height            | reach      | 100%                          |
| width             | stretch    | 100%                          |
| height && width   | fill       | 100%                          |
| margin            | xsm        | 1rem                          |
| margin            | sm         | 2rem                          |
| margin            | mm         | 3rem                          |
| margin            | lm         | 4rem                          |
| margin            | xlm        | 5rem                          |
| padding           | xsp        | 1rem                          |
| padding           | sp         | 2rem                          |
| padding           | mp         | 3rem                          |
| padding           | lp         | 4rem                          |
| padding           | xlp        | 5rem                          |
| box-shadow        | shade      | 0 0.3rem 1rem \${theme.gray7} |
| box-shadow        | backlight  | 0 0.3rem 1rem \${theme.gray0} |
| box-sizing        | cbox       | content-box                   |
| box-sizing        | init       | initial                       |
| box-sizing        | inherit    | inherit                       |
| overflow          | visible    | visible                       |
| overflow          | scroll     | scroll                        |
| overflow          | auto       | auto                          |

### Col:

Col is a lot like Box, but with all flex properties (default direction is column and default align items is set to center). 

**Props:**

| CSS Property Name | Prop Name | Default value |
| ----------------- | --------- | ------------- |
| flex-direction    | direction | column        |
| justify-content   | justify   | flex-start    |
| align-items       | align     | center        |
| align-content     | content   | stretch       |
| height            | h         | auto          |
| width             | w         | auto          |
| width && height   | sqr       | auto          |
| min-height        | min_h     | 100vh         |
| max-width         | max_w     | 100vw         |
| min-width         | min_w     | 100vh         |
| max-height        | max_h     | 100vw         |
| border-radius     | radius    | 0.3rem        |
| border            | border    | none          |
| background        | bg        | none          |
| border-radius     | radius    | 0.3rem        |
| color             | color     | auto          |
| margin            | margin    | 0             |
| padding           | padding   | 0             |
| opacity           | opacity   | none          |
| box-shadow        | shadow    | none          |
| box-sizing        | box_size  | border-box    |
| overflow          | overflow  | hidden        |
| clip-path         | clip      | none          |

**Style Maps:**

| CSS Property Name | Style Prop | Property Value                |
| ----------------- | ---------- | ----------------------------- |
| flex-direction    | row        | row                           |
| flex-direction    | revrow     | row-reverse                   |
| flex-direction    | revcol     | column-reverse                |
| justify-content   | jc_end     | center                        |
| justify-content   | jc_center  | space-between                 |
| justify-content   | jc_between | space-around                  |
| justify-content   | jc_around  | space-evenly                  |
| justify-content   | jc_evenly  | flex-start                    |
| align-items       | ai_normal  | normal                        |
| align-items       | ai_start   | flex-start                    |
| align-items       | ai_end     | flex-end                      |
| align-items       | ai_stretch | stretch                       |
| align-content     | ac_center  | center                        |
| align-content     | ac_start   | flex-start                    |
| align-content     | ac_end     | flex-end                      |
| align-content     | ac_between | space-between                 |
| align-content     | ac_around  | space-around                  |
| align-content     | ac_evenly  | space-evenly                  |
| height            | reach      | 100%                          |
| width             | stretch    | 100%                          |
| margin            | xsm        | 1rem                          |
| margin            | sm         | 2rem                          |
| margin            | mm         | 3rem                          |
| margin            | lm         | 4rem                          |
| margin            | xlm        | 5rem                          |
| padding           | xsp        | 1rem                          |
| padding           | sp         | 2rem                          |
| padding           | mp         | 3rem                          |
| padding           | lp         | 4rem                          |
| padding           | xlp        | 5rem                          |
| box-shadow        | shade      | 0 0.3rem 1rem \${theme.gray7} |
| box-shadow        | backlight  | 0 0.3rem 1rem \${theme.gray0} |
| box-sizing        | cbox       | content-box                   |
| box-sizing        | init       | initial                       |
| box-sizing        | inherit    | inherit                       |
| overflow          | visible    | visible                       |
| overflow          | scroll     | scroll                        |
| overflow          | auto       | auto                          |

### Card:

A card is similar to a Col, but it has a default background and font color and you can invert theme by using the invert it to a dark mode card. Card also has a box shadow by default that you can turn off with the noshadow prop.

**Props:**

| CSS Property Name | Prop Name | Default value |
| ----------------- | --------- | ------------- |
| flex-direction    | direction | column        |
| justify-content   | justify   | flex-start    |
| align-items       | align     | center        |
| align-content     | content   | stretch       |
| height            | h         | auto          |
| width             | w         | auto          |
| width && height   | sqr       | auto          |
| min-height        | min_h     | 100vh         |
| max-width         | max_w     | 100vw         |
| min-width         | min_w     | 100vh         |
| max-height        | max_h     | 100vw         |
| border-radius     | radius    | 0.3rem        |
| border            | border    | none          |
| background        | bg        | none          |
| border-radius     | radius    | 0.3rem        |
| color             | color     | auto          |
| margin            | margin    | 0             |
| padding           | padding   | 0             |
| opacity           | opacity   | none          |
| box-shadow        | shadow    | none          |
| box-sizing        | box_size  | border-box    |
| overflow          | overflow  | hidden        |
| clip-path         | clip      | none          |

**Style Maps:**

| CSS Property Name | Style Prop | Property Value                |
| ----------------- | ---------- | ----------------------------- |
| flex-direction    | row        | row                           |
| flex-direction    | revrow     | row-reverse                   |
| flex-direction    | revcol     | column-reverse                |
| justify-content   | jc_end     | center                        |
| justify-content   | jc_center  | space-between                 |
| justify-content   | jc_between | space-around                  |
| justify-content   | jc_around  | space-evenly                  |
| justify-content   | jc_evenly  | flex-start                    |
| align-items       | ai_normal  | normal                        |
| align-items       | ai_start   | flex-start                    |
| align-items       | ai_end     | flex-end                      |
| align-items       | ai_stretch | stretch                       |
| align-content     | ac_center  | center                        |
| align-content     | ac_start   | flex-start                    |
| align-content     | ac_end     | flex-end                      |
| align-content     | ac_between | space-between                 |
| align-content     | ac_around  | space-around                  |
| align-content     | ac_evenly  | space-evenly                  |
| height            | reach      | 100%                          |
| width             | stretch    | 100%                          |
| margin            | xsm        | 1rem                          |
| margin            | sm         | 2rem                          |
| margin            | mm         | 3rem                          |
| margin            | lm         | 4rem                          |
| margin            | xlm        | 5rem                          |
| padding           | xsp        | 1rem                          |
| padding           | sp         | 2rem                          |
| padding           | mp         | 3rem                          |
| padding           | lp         | 4rem                          |
| padding           | xlp        | 5rem                          |
| box-shadow        | shade      | 0 0.3rem 1rem \${theme.gray7} |
| box-shadow        | backlight  | 0 0.3rem 1rem \${theme.gray0} |
| box-sizing        | cbox       | content-box                   |
| box-sizing        | init       | initial                       |
| box-sizing        | inherit    | inherit                       |
| overflow          | visible    | visible                       |
| overflow          | scroll     | scroll                        |
| overflow          | auto       | auto                          |

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

**Props:**

| CSS Property Name | Prop Name | Default value |
| ----------------- | --------- | ------------- |
| height            | h         | auto          |
| width             | w         | auto          |
| width && height   | sqr       | auto          |
| border-radius     | radius    | 0.3rem        |
| border            | border    | none          |
| background        | bg        | color props   |
| border-radius     | radius    | 0.3rem        |
| color             | color     | color props   |
| margin            | margin    | 0.5rem        |
| padding           | padding   | 0.8rem 1.6rem |
| opacity           | opacity   | none          |
| box-sizing        | box_size  | border-box    |

**Style Maps:**

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| height            | reach      | 100%           |
| width             | stretch    | 100%           |
| margin            | xsm        | 1rem           |
| margin            | sm         | 2rem           |
| margin            | mm         | 3rem           |
| margin            | lm         | 4rem           |
| margin            | xlm        | 5rem           |
| padding           | xsp        | 1rem           |
| padding           | sp         | 2rem           |
| padding           | mp         | 3rem           |
| padding           | lp         | 4rem           |
| padding           | xlp        | 5rem           |
| box-sizing        | cbox       | content-box    |
| box-sizing        | init       | initial        |
| box-sizing        | inherit    | inherit        |

### Linkton:

Looks exactly like a button, but is a Link from react-router-dom.

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

**Props:**

| CSS Property Name | Prop Name | Default value |
| ----------------- | --------- | ------------- |
| height            | h         | auto          |
| width             | w         | auto          |
| width && height   | sqr       | auto          |
| border-radius     | radius    | 0.3rem        |
| border            | border    | none          |
| background        | bg        | color props   |
| border-radius     | radius    | 0.3rem        |
| color             | color     | color props   |
| margin            | margin    | 0.5rem        |
| padding           | padding   | 0.8rem 1.6rem |
| opacity           | opacity   | none          |
| box-sizing        | box_size  | border-box    |

**Style Maps:**

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| height            | reach      | 100%           |
| width             | stretch    | 100%           |
| margin            | xsm        | 1rem           |
| margin            | sm         | 2rem           |
| margin            | mm         | 3rem           |
| margin            | lm         | 4rem           |
| margin            | xlm        | 5rem           |
| padding           | xsp        | 1rem           |
| padding           | sp         | 2rem           |
| padding           | mp         | 3rem           |
| padding           | lp         | 4rem           |
| padding           | xlp        | 5rem           |
| box-sizing        | cbox       | content-box    |
| box-sizing        | init       | initial        |
| box-sizing        | inherit    | inherit        |

### Form:

It's a form with flex-box (direction: column, align: center by default) and some basic additional props.

**Props:**

| CSS Property Name | Prop Name | Default value |
| ----------------- | --------- | ------------- |
| flex-direction    | direction | column        |
| justify-content   | justify   | flex-start    |
| align-items       | align     | center        |
| align-content     | content   | stretch       |
| height            | h         | auto          |
| width             | w         | auto          |
| width && height   | sqr       | auto          |
| background        | bg        | none          |
| color             | color     | auto          |
| margin            | margin    | 0             |
| padding           | padding   | 0             |
| box-sizing        | box_size  | border-box    |

**Style Maps:**

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| flex-direction    | row        | row            |
| flex-direction    | revrow     | row-reverse    |
| flex-direction    | revcol     | column-reverse |
| justify-content   | jc_end     | center         |
| justify-content   | jc_center  | space-between  |
| justify-content   | jc_between | space-around   |
| justify-content   | jc_around  | space-evenly   |
| justify-content   | jc_evenly  | flex-start     |
| align-items       | ai_normal  | normal         |
| align-items       | ai_start   | flex-start     |
| align-items       | ai_end     | flex-end       |
| align-items       | ai_stretch | stretch        |
| align-content     | ac_center  | center         |
| align-content     | ac_start   | flex-start     |
| align-content     | ac_end     | flex-end       |
| align-content     | ac_between | space-between  |
| align-content     | ac_around  | space-around   |
| align-content     | ac_evenly  | space-evenly   |
| height            | reach      | 100%           |
| width             | stretch    | 100%           |
| margin            | xsm        | 1rem           |
| margin            | sm         | 2rem           |
| margin            | mm         | 3rem           |
| margin            | lm         | 4rem           |
| margin            | xlm        | 5rem           |
| padding           | xsp        | 1rem           |
| padding           | sp         | 2rem           |
| padding           | mp         | 3rem           |
| padding           | lp         | 4rem           |
| padding           | xlp        | 5rem           |
| box-sizing        | cbox       | content-box    |
| box-sizing        | init       | initial        |
| box-sizing        | inherit    | inherit        |

### Input:

A better looking input to use.

**Props:**

| CSS Property Name | Prop Name | Default value |
| ----------------- | --------- | ------------- |
| border-radius     | radius    | 0.3rem        |
| border            | border    | none          |
| height            | h         | auto          |
| width             | w         | auto          |
| width && height   | sqr       | auto          |
| background        | bg        | none          |
| color             | color     | auto          |
| margin            | margin    | 0             |
| padding           | padding   | 0             |
| box-sizing        | box_size  | border-box    |

**Style Maps:**

| CSS Property Name | Style Prop | Property Value |
| ----------------- | ---------- | -------------- |
| height            | reach      | 100%           |
| width             | stretch    | 100%           |
| margin            | xsm        | 1rem           |
| margin            | sm         | 2rem           |
| margin            | mm         | 3rem           |
| margin            | lm         | 4rem           |
| margin            | xlm        | 5rem           |
| padding           | xsp        | 1rem           |
| padding           | sp         | 2rem           |
| padding           | mp         | 3rem           |
| padding           | lp         | 4rem           |
| padding           | xlp        | 5rem           |
| box-sizing        | cbox       | content-box    |
| box-sizing        | init       | initial        |
| box-sizing        | inherit    | inherit        |

### Importing bushido-strap css and styled components 🚀

It's highly recommended to pull in bushido-strap's global style overhauls, just `import "bushido-strap/css/main.css"` in your root index.js file. Feel free to check out the code to see what is under the hood! 🔥

All styled components get exported from `bushido-strap`. So all you need to do is deconstruct the component(s) you want from "bushido-strap".

#### Example:

`./src/components/MyComponent`

```javascript
import React from "react";
import { Wrapper, Row, Button, Card } from "bushido-strap";

export default function MyComponent() {
  return (
    <Wrapper>
      <Card w="80vw" invert>
        <h2>Card Header</h2>
        <p>Card text.</p>
        <Row>
          <Button red>
            Left Button
          </Button>
          <Button green>
            Right Button
          </Button>
        </Row>
      </Card>
    </Wrapper>
  );
}
```

## Theme Color Variables 🖌

At the top of the file you want to use the color variables in just throw in this import: `import theme from "bushido-strap/styled/theme"`

Example:

```javascript
import React from "react";
import { Wrapper, Row, Button, Card } from "bushido-strap";
import theme from "bushido-strap/styled/theme"

export default function MyComponent() {
  return (
    <Wrapper bg={theme.gray8}>
      <Card w="80vw" invert>
        <h2>Card Header</h2>
        <p>Card text.</p>
        <Row>
          <Button red>
            Left Button
          </Button>
          <Button green>
            Right Button
          </Button>
        </Row>
      </Card>
    </Wrapper>
  );
}
```

[Check here to see the full list of my javascript theme colors.](https://github.com/JimmyMcBride/bushido-strap/blob/master/styled/theme/index.js)

You can also use your own custom theme to add or change any of the variables using the ThemeProvider with the useTheme hook or the withTheme higher order component.

Example:

```javascript
import React from "react";
import { Wrapper, Row, Button, Card, ThemeProvider, useTheme } from "bushido-strap";
import theme from "bushido-strap/styled/theme"

const customTheme = {
  // Spreading out theme from bushido-strap so we have it and
  // can add to, or modify existing variables
  ...theme,
  // creating a new color for theme object
  newColor: "crimson",
  // reassigning gray8 variable to black
  gray8: "black
}

export default function MyComponent() {
  cont newTheme = useTheme()
  return (
    <ThemeProvider theme={customTheme}>
      <Wrapper bg={newTheme.gray8}>
        <Card w="80vw" invert>
          <h2>Card Header</h2>
          <p>Card text.</p>
          <Row bg={newTheme.newColor}>
            <Button red>
              Left Button
            </Button>
            <Button green>
              Right Button
            </Button>
          </Row>
        </Card>
      </Wrapper>
    </ThemeProvider>
  );
}
```

### Row, Col and Box Shape Props!

Row's, Col's and Box's have unique shape props you can use to turn your div's into awesome little shapes! Highly recommend using the sqr prop to set height and width to equal size's and giving a background (bg) prop since the default is set to none. 

Example:

```javascript
<Row sqr="5rem" bg={theme.red5} message />
```

| CSS Property Name | Style Prop    | Property Value                                                                                                      |
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
