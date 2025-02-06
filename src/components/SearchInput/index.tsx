type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Pesquisar..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-[5px] mb-[5px] box-border"
    />
  );
}