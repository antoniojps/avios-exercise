# 1. Accordion Component

This solution asumes an accordion is a series of vertically stacked interactive headings that each expand to reveal a corresponding section of content.

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
