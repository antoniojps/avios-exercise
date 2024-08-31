import React from "react";

export interface AccordionBaseProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Disables the accordion from user interaction.
   *
   * @defaultValue false
   */
  disabled?: boolean;
}

export interface AccordionSingleProps extends AccordionBaseProps {
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
}

export interface AccordionMultipleProps extends AccordionBaseProps {
  /**
   * The values of the items whose contents are expanded.
   */
  value?: string[];
  /**
   * The values of the initial items that are expanded.
   */
  defaultValue?: string[];
  /**
   * On extended item change callback.
   */
  onValueChange?(value: string[]): void;
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
   * Disables the accordion item from user interaction.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * The value of the accordion item.
   */
  value: string;
}

export interface AccordionItemCollapsibleProps extends AccordionItemProps {
  disabled?: boolean;
  onOpenChange?(open: boolean): void;
}
