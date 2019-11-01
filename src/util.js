import axios from "axios";

export async function readLocalJson() {
  let datas = null;
  await axios.get("./all.json").then(response => {
    datas = response.data;
  });
  return datas;
}
