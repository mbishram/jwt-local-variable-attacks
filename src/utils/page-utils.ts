export function getPageTitle(pageName?: string) {
  return (
    (pageName ? `${pageName} - ` : "") + process.env.NEXT_PUBLIC_APP_NAME || ""
  );
}
