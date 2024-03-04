import axios from "axios";

export default function usePost(url: string, data: any) {
  axios
    .post(url, data)
    .then(() => console.log('Success'))
    .catch((error: Error) => console.error(`Error: ${error.message}`));
}