import "isomorphic-fetch";

const upVoteQuote = async (id, value) => {
  const csrfToken = document.querySelector("meta[name='csrf-token']").attributes.content.value;
  const body = { value };
  const response = await fetch(`/api/v1/quotes/${id}`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken
    },
    credentials: "same-origin",
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    return { error: { code: response.status } };
  };
  const json = await response.json();
  return { data: json };
};

export default upVoteQuote;
