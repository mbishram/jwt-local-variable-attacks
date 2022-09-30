import { NextPage } from "next";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Typography } from "@/components/ui/Typography";
import { StyledSyntaxHighlighter } from "@/components/ui/StyledSyntaxHighlighter";
import { getCSRFScriptString } from "@/libs/attacks/csrf-scripts";
import { ATTACKER_HOST } from "@/constants/http.contants";
import { useIsDOMLoaded } from "@/libs/utils/page.utils";

const CSRFScripts: NextPage = () => {
  const isDOMLoaded = useIsDOMLoaded();

  if (isDOMLoaded && ATTACKER_HOST)
    return (
      <MainLayout title="CSRF Script">
        <Typography variant="h2" className="mb-4">
          CSRF Script
        </Typography>
        <StyledSyntaxHighlighter>
          {getCSRFScriptString(ATTACKER_HOST)}
        </StyledSyntaxHighlighter>
      </MainLayout>
    );
  return null;
};

export default CSRFScripts;
