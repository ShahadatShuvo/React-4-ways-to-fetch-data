import React from "react";
import axios from "axios";

function Quote() {
  const [quote, setQuote] = React.useState([]);

  React.useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios("https://jsonplaceholder.typicode.com/users");
      console.log("data:", res);
      setQuote(res.data);
    };
    fetchQuote();
  }, []);
  return <div>Axios-:Quote title: {quote[0]?.name}</div>;
}

export default Quote;
