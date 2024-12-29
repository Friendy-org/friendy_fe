import { ReactNode } from "react";
import S from "./LinkedText.styles";

interface LinkedTextProps {
  onPress: () => void;
  children: ReactNode;
}

export default function LinkedText({ onPress, children }: LinkedTextProps) {
  return <S.linkedText onPress={onPress}>{children}</S.linkedText>;
}