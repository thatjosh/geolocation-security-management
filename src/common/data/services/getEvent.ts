import { IEvent } from "../../interface/interface";
import { client } from "../client";

const getAllEvents = async () => {
  const { data } = await client.get<IEvent[]>(`/event.json`);
  return data;
};

export default getAllEvents;
