import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { AccordionSingleBase, AccordionItem } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Accordion",
  component: AccordionSingleBase,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AccordionSingleBase>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: function Render() {
    return (
      <AccordionSingleBase>
        <AccordionItem value="a" header="What are Avios?">
          <p>
            Avios is the loyalty currency of the British Airways Executive Club
            and our partners.
          </p>
          <p>
            <a href="https://www.britishairways.com/content/executive-club/avios/collecting-avios">
              Collect Avios
            </a>{" "}
            on flights, online shopping, hotel bookings and even your weekly
            shop. With over 2,000 partners across fashion, travel and finance,
            the possibilities are endless.
          </p>
        </AccordionItem>
        <AccordionItem value="b" header="What is IAG?">
          <p>
            Formed in January 2011, IAG is the parent company of British
            Airways, Iberia, Vueling, Aer Lingus, LEVEL, IAG Loyalty and IAG
            Cargo. It is a Spanish registered company with shares trading on the
            London and Spanish stock exchanges. The corporate head office for
            IAG is in London, UK.
          </p>
        </AccordionItem>
        <AccordionItem value="c" header="How can I collect Avios?">
          <ul>
            <li>
              Booking British Airways flights, holidays, hotel stays and car
              hire are great ways to top up your balance.
            </li>
            <li>
              Pre-booking seats, paying for extra baggage or upgrading your
              cabin on a British Airways or Iberia-marketed flight.
            </li>
          </ul>
        </AccordionItem>
      </AccordionSingleBase>
    );
  },
};
