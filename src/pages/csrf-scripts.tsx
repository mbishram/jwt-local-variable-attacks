import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Typography } from "@/components/ui/Typography";
import { StyledSyntaxHighlighter } from "@/components/ui/StyledSyntaxHighlighter";
import { CSRF_SCRIPT } from "@/libs/attacks/csrf-scripts";

const CSRFScripts: NextPage = () => {
  return (
    <MainLayout title="CSRF Script">
      <Typography variant="h2" className="mb-4">
        CSRF Script
      </Typography>
      <StyledSyntaxHighlighter>{CSRF_SCRIPT}</StyledSyntaxHighlighter>
    </MainLayout>
  );
};

export default CSRFScripts;
