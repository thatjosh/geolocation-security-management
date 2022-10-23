export function getPersonnelsNotifiedString(personnels: number[]) {
  let txt_str = "Personnel ";
  const len = personnels.length;

  if (len === 0) {
    return "No personnels notified yet";
  }

  personnels.map((personnel_id, key) => {
    let txt_tmp = "#" + personnel_id;
    if (len != key + 1) {
      txt_tmp += ", ";
    }
    txt_str += txt_tmp;
  });
  return txt_str;
}
