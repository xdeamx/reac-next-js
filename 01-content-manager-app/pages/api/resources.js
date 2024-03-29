import data from "./data.json";

// export default async function(req, res){
//     //res.send(data);
//     const dataRes = await fetch("http://localhost:3001/api/resources");
//     const data = await dataRes.json();

//     res.send(data);
// }

export default async function(req, res){
if (req.method === "GET") {
    const dataRes = await fetch("http://localhost:3001/api/resources");
    const data = await dataRes.json();
    return res.send(data);
  }

  if (req.method === "POST") {
    console.log(req.body);
    const { title, description, link, timeToFinish, priority} = req.body;

    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Data are missing!");
    }

    return res.send("Data has been received!");
}
}
