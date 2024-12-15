import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "@/hooks/use-follow-pointer";
import { cn } from "@/lib/utils";

export interface CursorProps {
  className?: string;
}

export const GlowCursor: React.FC<CursorProps> = ({ className = "" }) => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return <motion.div ref={ref} className={cn(className)} style={{ x, y }} />;
};
