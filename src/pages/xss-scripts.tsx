import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Typography } from "@/components/ui/Typography";
import { StyledSyntaxHighlighter } from "@/components/ui/StyledSyntaxHighlighter";
import { getXSSScriptString } from "@/libs/attacks/xss-scripts";
import { ATTACKER_HOST } from "@/constants/http.contants";
import { useIsDOMLoaded } from "@/libs/utils/page.utils";

const XSSScripts: NextPage = () => {
  const isDOMLoaded = useIsDOMLoaded();

  if (isDOMLoaded && ATTACKER_HOST)
    return (
      <MainLayout title="XSS Script">
        <Typography variant="h2" className="mb-4">
          XSS Script
        </Typography>
        <StyledSyntaxHighlighter>
          {getXSSScriptString(ATTACKER_HOST)}
        </StyledSyntaxHighlighter>
      </MainLayout>
    );

  return null;
};

export default XSSScripts;
