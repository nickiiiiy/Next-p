import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (value: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue,
}) => {
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      <div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
        />
      </div>
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {items.map((item, i) => (
          <FilterCheckbox
            key={item.text}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>
    </div>
  );
};
