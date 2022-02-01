import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { SearchForm, Button, Input } from "../Styled/Styled";
import { FcSearch } from "react-icons/fc";

function SearchBar() {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const location = useLocation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    query.trim() &&
      history.push({
        ...location,
        search: `query=${query}`,
      });
  };
  return (
    <SearchForm onSubmit={handleFormSubmit}>
      <Input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        value={query}
      />
      <Button type="submit">
        {" "}
        <FcSearch />
      </Button>
    </SearchForm>
  );
}
export default SearchBar();
