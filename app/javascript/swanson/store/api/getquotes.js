import "isomorphic-fetch";

const fetchQuotes = async () => {
  const response = await fetch('/api/v1/quotes');

  if (!response.ok) {
    return { error: { code: response.status } };
  };
  const json = await response.json();
  return { data: json };
};

export default fetchQuotes;
