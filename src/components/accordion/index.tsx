import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import type {
  AccordionItemCollapsibleProps,
  AccordionSingleProps,
} from "./types";
import "./styles.css";

const AccordionSingleContext = createContext<
  Pick<AccordionSingleProps, "value" | "onValueChange">
>({ value: "", onValueChange: () => {} });

export function AccordionSingleBase(props: AccordionSingleProps) {
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
    <AccordionSingleContext.Provider value={state}>
      <div className="accordion-base">{props.children}</div>
    </AccordionSingleContext.Provider>
  );
}

export function AccordionItem({
  header,
  children,
  value: itemValue,
}: AccordionItemCollapsibleProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { value: activeValue, onValueChange } = useContext(
    AccordionSingleContext
  );
  const isOpen = activeValue === itemValue;

  const handleChange = useCallback(() => {
    if (isOpen) onValueChange?.();
    else {
      onValueChange?.(itemValue);
      itemRef?.current?.focus();
    }
  }, [itemValue, onValueChange, isOpen]);

  const ariaId = useId();

  return (
    <div className="accordion-item" ref={itemRef}>
      <button
        className="accordion-item__header"
        aria-expanded={isOpen}
        aria-controls={ariaId}
        id={ariaId}
        onClick={handleChange}
        tabIndex={0}
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
        <div className="accordion-item__content-inner">{children}</div>
      </div>
    </div>
  );
}
