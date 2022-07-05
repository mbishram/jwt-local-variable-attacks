import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Typography } from "@/components/ui/Typography";
import { StyledSyntaxHighlighter } from "@/components/ui/StyledSyntaxHighlighter";

const XSS: NextPage = () => {
  const xssScript = `(num) => num + 1
  // this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully `;

  return (
    <MainLayout title="XSS">
      <Typography variant="h2" className="mb-4">
        XSS Script
      </Typography>
      <StyledSyntaxHighlighter>{xssScript}</StyledSyntaxHighlighter>
    </MainLayout>
  );
};

export default XSS;
