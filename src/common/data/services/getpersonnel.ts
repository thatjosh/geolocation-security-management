import { IPersonnel } from "../../interface/interface";
import { client } from "../client";

const getAllPersonnels = async () => {
  const { data } = await client.get<IPersonnel[]>(`/personnel.json`);
  return data;
};

export default getAllPersonnels;
