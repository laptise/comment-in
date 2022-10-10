import { useContext } from "react";
import { CommentInCtx } from "./context";

export default function useComment() {
  const { privateKey } = useContext(CommentInCtx);
  const readMore = () => {
    console.log("hello")
    return "hello";
  };
  return { readMore };
}
