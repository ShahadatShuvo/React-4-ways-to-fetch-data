import React from "react";

function Quote() {
  const [quote, setQuote] = React.useState([]);

  React.useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log("data:", data);
      setQuote(data);
    };
    fetchQuote();
  }, []);
  return <div>Fetch-:Quote title: {quote[0]?.name}</div>;
}

export default Quote;
