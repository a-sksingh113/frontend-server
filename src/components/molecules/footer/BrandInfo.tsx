import React, { FC } from "react";
import Paragraph from "@/components/atoms/Paragraph";
import { cn } from "@/utils/cn";
import Subtitle from "@/components/atoms/Subtitles";

interface BrandInfoProps {
  className?: string;
  style?: React.CSSProperties;
}

const BrandInfo: FC<BrandInfoProps> = ({ className, style }) => {
  return (
    <div className={cn("font-montserrat space-y-4", className)} style={style}>
      <Subtitle title="Support" />
      <div className="text-sm sm:text-base space-y-2 text-[#C2C2C2] font-normal">
        <Paragraph>Address</Paragraph>
        <Paragraph>Kolkata west bengal</Paragraph>
        <Paragraph>
          <a href="mailto:support@greenbasket.com">support@greenbasket.com</a>
        </Paragraph>
        <Paragraph>
          <a href="tel:+1888889999">+91-88888-99999</a>
        </Paragraph>
      </div>
    </div>
  );
};

export default BrandInfo;
