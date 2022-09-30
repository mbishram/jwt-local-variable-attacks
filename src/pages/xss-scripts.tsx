import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Typography } from "@/components/ui/Typography";
import { StyledSyntaxHighlighter } from "@/components/ui/StyledSyntaxHighlighter";
import {
  getReflectedXSSScriptString,
  getStoredXSSScriptString,
} from "@/libs/attacks/xss-scripts";
import { ATTACKER_HOST } from "@/constants/http.contants";
import { useIsDOMLoaded } from "@/libs/utils/page.utils";

const XSSScripts: NextPage = () => {
  const isDOMLoaded = useIsDOMLoaded();

  if (isDOMLoaded && ATTACKER_HOST)
    return (
      <MainLayout title="XSS Script">
        <Typography variant="h2" className="mb-4">
          Reflected XSS Script
        </Typography>
        <StyledSyntaxHighlighter className="mb-8">
          {getReflectedXSSScriptString(ATTACKER_HOST)}
        </StyledSyntaxHighlighter>

        <Typography variant="h2" className="mb-4">
          Stored XSS Script
        </Typography>
        <StyledSyntaxHighlighter>
          {getStoredXSSScriptString(ATTACKER_HOST)}
        </StyledSyntaxHighlighter>
      </MainLayout>
    );

  return null;
};

export default XSSScripts;
