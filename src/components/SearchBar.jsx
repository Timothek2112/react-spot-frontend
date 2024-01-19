import React, { useState } from "react";
import BaseLogged from "./Panels/BaseLogged";
import Card from "./UI/Card";
import CardInfo from "../models/CardInfo";

const SearchBar = ({ query, setQuery, children }) => {
  return (
    <div className="navbar bg-transparent flex justify-center text-black">
      <div className="gap-2 items-center w-full">
        {children}
        <div className="form-control items-center w-full">
          <input
            content={query}
            type="text"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Найти опрос"
            className="input input-bordered w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
