import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Typography } from "@/components/ui/Typography";
import { StyledSyntaxHighlighter } from "@/components/ui/StyledSyntaxHighlighter";
import { XSS_SCRIPT } from "@/libs/attacks/xss-scripts";

const XSSScripts: NextPage = () => {
  return (
    <MainLayout title="XSS Script">
      <Typography variant="h2" className="mb-4">
        XSS Script
      </Typography>
      <StyledSyntaxHighlighter>{XSS_SCRIPT}</StyledSyntaxHighlighter>
    </MainLayout>
  );
};

export default XSSScripts;
