import ReserveList, { ReserveListProps } from "@/components/reserveList";
import { RecoilValue } from "recoil";

const Reserve = ({ reserves }: ReserveListProps) => {
  return <ReserveList reserves={reserves} />;
};

export default Reserve;
