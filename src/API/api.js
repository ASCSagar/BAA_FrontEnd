import axios from "axios";
const url = "https://bhavansalumniassociation.org";

// function fetchData (endp){
//    return axios.get(`${url}/${endp}`).then((res)=>{
//         return res.data
//     }).catch()
// }
export default function apidata(endp, method = "get", body, id = "") {
  // console.log(endp);
  let requestUrl = `${url}`;
  // console.log(requestUrl);

  if (endp !== "") {
    requestUrl += `/${endp}`;
  }

  if (id !== "") {
    requestUrl += `/${id}`;
  }
  return axios({
    method,
    url: requestUrl,
    data: body,
    headers: { "Content-Type": "application/json" },
  }).catch((error) => {
    // console.log(error.message);
    // console.log(error.response.status);
    return error.response.status;
    // return -1;
    // if (error.response && error.toJSON().status !== 200) {
    //   return error.toJSON().status;
    // }
    // throw error;
    // Rethrow the error to be caught by the caller
  });
}
