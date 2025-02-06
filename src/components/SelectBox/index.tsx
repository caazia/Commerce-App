import { useState } from "react";
import { SearchInput } from "../SearchInput";
import { DropdownList } from "../DropdownList";

type SelectBoxProps = {
  options: string[];
  onSelect: (option: string) => void;
};

export function SelectBox({ options, onSelect }: SelectBoxProps) {
  const [search, setSearch] = useState("");

  return (
    <div className="border border-gray-300 p-[10px] w-[200px]">
      <SearchInput value={search} onChange={setSearch} />
      <DropdownList options={options} filter={search} onSelect={onSelect} />
    </div>
  );
}