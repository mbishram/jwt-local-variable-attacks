import { ReactNode } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getTailwindBreakpointsArray } from "@/libs/utils/page.utils";

export type CSRFMasonryProps = { children: ReactNode };

export function CSRFMasonry({ children }: CSRFMasonryProps) {
  const columnsCountBreakPoints = getTailwindBreakpointsArray().reduce(
    (previousValue, currentValue, currentIndex) => ({
      ...previousValue,
      [Number(currentValue.replace("px", ""))]: currentIndex + 1,
    }),
    {}
  );

  return (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter="1rem">{children}</Masonry>
    </ResponsiveMasonry>
  );
}
