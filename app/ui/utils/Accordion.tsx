'use client'

import React, { createContext, useContext, useRef, useEffect, useState, ReactNode, HTMLAttributes } from "react";
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

// Define the types for the context
interface AccordionContextProps {
  selected: string | null;
  setSelected: (value: string | null) => void;
}

// Define the types for the props of Accordion
interface AccordionProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onChange'> {
  children: ReactNode;
  value: string | null;
  onValueChange?: (value: string | null) => void;
}

// Define the types for the props of AccordionItem
interface AccordionItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  value: string;
  trigger: ReactNode;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

export default function Accordion({ children, value, onValueChange, ...props }: AccordionProps) {
  const [selected, setSelected] = useState<string | null>(value);

  useEffect(() => {
    onValueChange?.(selected);
  }, [selected, onValueChange]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

export function AccordionItem({ children, value, trigger, ...props }: AccordionItemProps) {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("AccordianItem must be used within an Accordian");
  }

  const { selected, setSelected } = context;
  const open = selected === value;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <li {...props} >
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 gap-4"
      >
        {trigger}
        <div className="min-w-min">
          <Icon path={mdiArrowRight}
                size={0.8}
                className={`transition-transform ${open ? "rotate-90" : ""}`}
          />
        </div>
      </header>
      <div
        className="overflow-y-hidden transition-all duration-500"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
