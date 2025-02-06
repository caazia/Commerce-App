type DropdownListProps = {
  options: string[];
  filter: string;
  onSelect: (option: string) => void;
};

export function DropdownList({ options, filter, onSelect }: DropdownListProps) {
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="list-none m-0 p-0 border border-gray-300 max-h-[100px] overflow-y-auto">
      {filteredOptions.map((option, index) => (
        <li className="p-[5px] cursor-pointer hover:bg-gray-200" key={index} onClick={() => onSelect(option)}>
          {option}
        </li>
      ))}
    </ul>
  );
}