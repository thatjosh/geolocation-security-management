import { useQuery } from "react-query";
import { IPersonnel } from "../../interface/interface";
import getAllPersonnels from "../services/getpersonnel";

const usePersonnelList = () =>
  useQuery<IPersonnel[], Error>("getAllPersonnels", getAllPersonnels);

export default usePersonnelList;
