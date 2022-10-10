import { createContext, FC, ReactNode } from "react";

type ProviderProps = {
  privateKey: string;
};

export const CommentInCtx = createContext<ProviderProps>(null as any);

type Initiator = {
  privateKey: string;
  children: ReactNode;
};

export const Provider: FC<Initiator> = ({ children, privateKey }) => {
  return (
    <CommentInCtx.Provider value={{ privateKey }}>
      {children}
    </CommentInCtx.Provider>
  );
};
