import React, { ChangeEvent, useEffect, useState } from "react";
import AutoSuggestion from "./AutoSuggestion";

export interface User {
  firstName: string;
}

const SearchAuto = () => {
  const [Loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [Error, setError] = useState<string | null>(null);
  const [SearchParam, setSearchParam] = useState("");
  const [ShowDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  // Declare the fetch function before useEffect
  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError("Error fetching users");
    }
  }

  function handleClick(event: React.MouseEvent<HTMLLIElement>) {
    setShowDropdown(false);
    setSearchParam(event.currentTarget.innerText);
    setFilteredUsers([]);
  }

  // Now the useEffect hook can call the function
  useEffect(() => {
    fetchListOfUsers();
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 0) {
      const filteredData = users.filter((item) =>
        item.firstName.toLowerCase().startsWith(query)
      );
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setFilteredUsers([]);
      setShowDropdown(false);
    }
  }

  return (
    <div className="search-auto-container">
      <input
        value={SearchParam}
        name="search-users"
        placeholder="Search Users here..."
        onChange={handleChange}
      />
      {ShowDropdown && (
        <AutoSuggestion filteredUsers={filteredUsers} onClick={handleClick} />
      )}
      {Error && <div className="error">{Error}</div>}
    </div>
  );
};

export default SearchAuto;
