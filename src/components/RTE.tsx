"use client"

import dynamic from "next/dynamic";

// 1. Dynamically import the main Editor component
const RTE = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

// 2. Dynamically import the Preview sub-component from the package to prevent SSR issues
export const MarkdownPreview = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default.Markdown),
  { ssr: false }
);

export default RTE;