import React from "react";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The value of the item whose content is expanded.
   */
  value?: string;
  /**
   * The value of the initial item that is expanded.
   */
  defaultValue?: string;
  /**
   * On extended item change callback.
   */
  onValueChange?(value?: string): void;
  /**
   * Customizable class name.
   */
  className?: string;
}

export interface AccordionItemProps {
  /**
   * The title of the accordion item.
   */
  header: React.ReactNode;
  /**
   * The content of the accordion item.
   */
  children: React.ReactNode;
  /**
   * The value of the accordion item.
   */
  value: string;
  /**
   * On open change callback for controlled component.
   */
  onOpenChange?(open: boolean): void;
  /**
   * Customizable class name.
   */
  className?: string;
}
