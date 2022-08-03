import React from "react";
import axios from "axios";
import useSWR from "swr";

const fetchQuote = async (...args) => {
  const res = await axios(...args);
  return res.data;
};

function Quote() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetchQuote
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>SWR-:Quote title: {data[0]?.name}</div>;
}

export default Quote;
