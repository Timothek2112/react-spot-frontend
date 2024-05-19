import React, { useState } from "react";
import BaseLogged from "./Panels/BaseLogged";
import Card from "./UI/Card";
import CardInfo from "../models/CardInfo";

const SearchBar = ({ query, setQuery, children }) => {
  return (
    <div className="navbar bg-transparent justify-center text-black">
      <div className="items-center">
        <div className="flex gap-2">
          {children}
          <div className="form-control items-center">
            <input
              content={query}
              type="text"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Найти опрос"
              className="input input-bordered w-[30vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
