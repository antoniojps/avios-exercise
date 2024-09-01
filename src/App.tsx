import { Accordion } from "./components/accordion";

function App() {
  return (
    <Accordion>
      <Accordion.Item value="a" header="What are Avios?">
        <p>
          Avios is the loyalty currency of the British Airways Executive Club
          and our partners.
        </p>
      </Accordion.Item>
      <Accordion.Item value="b" header="What is IAG?">
        <p>
          Formed in January 2011, IAG is the parent company of British Airways,
          Iberia, Vueling, Aer Lingus, LEVEL, IAG Loyalty and IAG Cargo. It is a
          Spanish registered company with shares trading on the London and
          Spanish stock exchanges. The corporate head office for IAG is in
          London, UK.
        </p>
      </Accordion.Item>
      <Accordion.Item value="c" header="How can I collect Avios?">
        <ul>
          <li>
            Booking British Airways flights, holidays, hotel stays and car hire
            are great ways to top up your balance.
          </li>
          <li>
            Pre-booking seats, paying for extra baggage or upgrading your cabin
            on a British Airways or Iberia-marketed flight.
          </li>
        </ul>
      </Accordion.Item>
    </Accordion>
  );
}

export default App;
