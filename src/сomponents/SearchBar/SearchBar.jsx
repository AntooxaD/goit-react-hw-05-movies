import { useState } from "react";
import { SearchForm, Button, Input } from "../../styled/Styled";
import { FcSearch } from "react-icons/fc";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (query.trim() === "") {
  //     toast.error(`Enter query`);
  //     return;
  //   }

  //   setQuery("");
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error(`Enter query`);
      return;
    }
    setQuery("");
    query.trim() &&
      navigate({
        ...location,
        search: `query=${query}`,
      });
  };

  const handleQueryChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        value={query}
        onChange={handleQueryChange}
      />
      <Button type="submit">
        {" "}
        <FcSearch />
      </Button>
    </SearchForm>
  );
}
