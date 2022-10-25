import { useQuery } from "react-query";
import { IEvent } from "../../interface/interface";
import getAllEvents from "../services/getEvent";

const useEventList = () =>
  useQuery<IEvent[], Error>("getAllEvents", getAllEvents);

export default useEventList;
