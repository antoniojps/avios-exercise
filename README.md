# Avios Exercises

This document contains the solution for the exercises proposed in the Avios Tech Test.

You can find the solutions below:

1. [Accordion Component](#1-accordion-component)
2. [Design Tokens](#2-design-tokens)

# 1. Accordion Component

This solution asumes an accordion is a series of vertically stacked interactive headings that each expand to reveal a corresponding section of content.

Demo can be found here: https://avios-exercise.vercel.app/

## Features

- [x] Full keyboard navigation.
- [x] Can be controlled or uncontrolled.
- [x] Minor customization (header and classNames)

Potential enhancements:

- [ ] Supporting horizontal/vertical orientation.
- [ ] Supporting Right to Left direction.
- [ ] Possibility to expand one or multiple items.
- [ ] Adding disabled state.
- [ ] Adding more customisation options (affordance icon)
- [ ] Testing (unit, integration, accessibility)

## Installation

To install the Accordion component, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/accordion-component.git
   ```

2. Navigate to the project directory:

   ```sh
   cd accordion-component
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm run storybook
   ```

## Usage

Simply import the Accordion component and use it as shown below:
:::note
Note: each `Accordion.Item` value must be unique.
:::

```tsx
import { Accordion } from "./components/accordion";

const AccordionDemo = () => (
<Accordion>
  <Accordion.Item value="a" header="What are Avios?">
    <p>
      Avios is the loyalty currency of the British Airways Executive Club and
      our partners.
    </p>
    ...
  </Accordion.Item>
  <Accordion.Item value="b" header="What is IAG?">
    ...
  </Accordion.Item>
  <Accordion.Item value="c" header="How can I collect Avios?">
    ...
  </Accordion.Item>
</Accordion>;
)

```

## Installation

Install the component from your command line.

```sh
npm install @avios/awesome-design-system
```

## Anatomy

This component is made up of the following parts:

- Accordion: Root element.
- Accordion.Item: Individual accordion item.

```tsx
import { Accordion } from "@avios/awesome-design-system";

export default () => (
  <Accordion>
    <Accordion.Item>...</Accordion.Item>
  </Accordion>
);
```

## API Reference

### Accordion Props

| Prop          | Type                     | Default | Description                                                 |
| ------------- | ------------------------ | ------- | ----------------------------------------------------------- |
| value         | string                   | -       | The value of the item whose content is expanded.            |
| defaultValue  | string                   | -       | The value of the initial item that is expanded.             |
| onValueChange | (value?: string) => void | -       | Callback function triggered when the expanded item changes. |
| className     | string                   | -       | Customizable class name for the accordion.                  |

### Accordion.Item Props

| Prop         | Type                    | Default | Description                                                    |
| ------------ | ----------------------- | ------- | -------------------------------------------------------------- |
| header       | React.ReactNode         | -       | The title of the accordion item.                               |
| children     | React.ReactNode         | -       | The content of the accordion item.                             |
| value        | string                  | -       | The value of the accordion item.                               |
| onOpenChange | (open: boolean) => void | -       | Callback function triggered when the item is opened or closed. |
| className    | string                  | -       | Customizable class name for the accordion item.                |

# 2. Design Tokens

To efficiently consume the provided design tokens in a ReactJS application, I recommend reconfiguring them into CSS variables. This approach offers several advantages:

1. **Performance**: CSS variables are native to the browser, resulting in better performance compared to JavaScript-based solutions.
2. **Dynamic**: CSS variables can be easily updated at runtime, allowing for theme switching.
3. **Scoping**: They can be scoped to specific components or globally to the entire application.
4. **Simplicity**: They're easy to use and understand, reducing the learning curve for team members.

Here's how I'd implement the design tokens:

```css
/* Common tokens */
:root {
  /* Typography */
  --font-family: "Helvetica Neue", Arial, sans-serif;
  --font-size: 16px;
  --font-weight-normal: 400;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 24px;

  /* Border Radius */
  --border-radius-small: 4px;
  --border-radius-medium: 8px;
  --border-radius-large: 12px;
}

/* Light theme */
[data-theme="light"] {
  --color-background: #ffffff;
  --color-text: #333333;
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-accent: #28a745;
  --color-error: #dc3545;
  --color-warning: #ffc107;
  --color-info: #17a2b8;
  --color-success: #28a745;
}

/* Dark theme */
[data-theme="dark"] {
  --color-background: #121212;
  --color-text: #e0e0e0;
  --color-primary: #bb86fc;
  --color-secondary: #03dac6;
  --color-accent: #cf6679;
  --color-error: #cf6679;
  --color-warning: #ffb74d;
  --color-info: #03a9f4;
  --color-success: #81c784;
}
```

## Theming

To implement dark and light themes I'd create a React context to manage the active theme.

It would default to `auto` which would detect the user's system settings and set that, otherwise it could be `light` or `dark`.

The theme state could be stored in local storage or cookies (SSR) so it's persistent.

Implementing the theme could be done by:

1. Creating a React context to manage the theme state.
2. Retrieving the theme from local storage.
   - If theme is not defined or `auto` is set, detect the user's system settings.
3. Set the theme by updating the body `data-theme` attribute accordingly.

Then I'd create a custom hook to manage the theme state.

## Usage

It would require the consumer to wrap their app in the DesignSystemProvider component which would include the Theme Provider.

```tsx
import { DesignSystemProvider } from "@avios/awesome-design-system";

export default () => (
  <DesignSystemProvider>
    <App />
  </DesignSystemProvider>
);
```

And then consumer could create a theme switcher component as such:

```tsx
import React from "react";
import { useTheme } from "./useTheme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="auto">Auto</option>
    </select>
  );
};

export default ThemeSwitcher;
```

### This implementation:

- Uses CSS variables for efficient token management
- Supports light, dark, and auto themes
- Persists theme preference
- Provides a custom hook for easy theme management across the application

### Other approaches

#### CSS Variables:

- **Pros**: Native browser support, smaller bundle size
- **Cons**: Global scope (unless using CSS modules)

#### CSS-in-JS (styled-components/Emotion):

- **Pros**: Component-scoped styles, dynamic styling with props
- **Cons**: Learning curve, javascript performance overhead

I would choose the CSS variables approach based on performance and maintainability and the KISS principle.
