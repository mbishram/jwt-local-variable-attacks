declare module "react-responsive-masonry" {
  import * as React from "react";

  const Masonry: React.FC<
    {
      columnsCount?: number;
      gutter?: string;
    } & React.PropsWithChildren
  >;

  export const ResponsiveMasonry: React.FC<
    {
      columnsCountBreakPoints?: Record<number, number>;
    } & React.PropsWithChildren
  >;

  export default Masonry;
}
