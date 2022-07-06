import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Typography } from "@/components/ui/Typography";
import { StyledSyntaxHighlighter } from "@/components/ui/StyledSyntaxHighlighter";
import { XSS_SCRIPT } from "@/libs/attacks/xss";

const XSS: NextPage = () => {
  return (
    <MainLayout title="XSS">
      <Typography variant="h2" className="mb-4">
        XSS Script
      </Typography>
      <StyledSyntaxHighlighter>{XSS_SCRIPT}</StyledSyntaxHighlighter>
    </MainLayout>
  );
};

export default XSS;
