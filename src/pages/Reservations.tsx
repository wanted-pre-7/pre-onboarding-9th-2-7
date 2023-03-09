import { useAppSelector } from "../hook";

const Reservations = () => {
  const reserveList = useAppSelector((state) => state.reserveList);
  console.log(reserveList);
  return <div></div>;
};

export default Reservations;
