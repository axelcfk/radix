import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export function Search() {
  return (
    <TextField.Root className=" w-72">
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
      <TextField.Input placeholder="Search…" />
    </TextField.Root>
  );
}

export default Search;
