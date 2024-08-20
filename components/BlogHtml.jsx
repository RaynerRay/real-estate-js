import React from "react";
import parse from "html-react-parser";
export default function BlogHtml({ content }) {
  return <article className="">{parse(`${content}`)}</article>;
}
