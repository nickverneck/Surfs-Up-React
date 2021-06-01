import React from "react";

export const SearchResult = (props) => {
  const searchData = Object.values(props);
  return searchData.map((data) => (
    <li className="list-group-item">
      <a href={"/beach/" + data._id}>
          {data._source.name}
          </a>
    </li>
  ));
};
export default SearchResult;
