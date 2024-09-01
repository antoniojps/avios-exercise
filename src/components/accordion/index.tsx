import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import type { AccordionItemProps, AccordionProps } from "./types";
import "./styles.css";

const AccordionContext = createContext<
  Pick<AccordionProps, "value" | "onValueChange">
>({ value: "", onValueChange: () => {} });

function Accordion(props: AccordionProps) {
  const { value: valueControlled, defaultValue, onValueChange } = props;
  const [value, setValue] = useState<string | undefined>(defaultValue);

  const handleValueChange = useCallback(
    (newValue?: string) => {
      if (valueControlled) {
        onValueChange?.(newValue);
      } else {
        setValue(newValue);
      }
    },
    [valueControlled, onValueChange, setValue]
  );

  const state = useMemo(
    () => ({
      value: valueControlled ?? value,
      onValueChange: handleValueChange,
    }),
    [valueControlled, value, handleValueChange]
  );

  return (
    <AccordionContext.Provider value={state}>
      <div className={classNames("accordion-base", props?.className)}>
        {props.children}
      </div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  header,
  children,
  value: itemValue,
  className,
}: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { value: activeValue, onValueChange } = useContext(AccordionContext);
  const isOpen = activeValue === itemValue;

  const handleChange = useCallback(() => {
    if (isOpen) onValueChange?.();
    else {
      onValueChange?.(itemValue);
      contentRef?.current?.focus();
    }
  }, [itemValue, onValueChange, isOpen]);

  const ariaId = useId();

  return (
    <div className={classNames("accordion-item", className)}>
      <button
        className="accordion-item__header"
        aria-expanded={isOpen}
        aria-controls={ariaId}
        id={ariaId}
        onClick={handleChange}
      >
        {header}
        <span className="accordion-item__header-affordance">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className="accordion-item__content"
        role="region"
        aria-labelledby={ariaId}
      >
        <div className="accordion-item__content-inner" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
}

Accordion.displayName = "Accordion";
Accordion.Item = AccordionItem;

export { Accordion };
export default Accordion;
