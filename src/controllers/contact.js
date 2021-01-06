import Contact from "../models/Contact";

export async function contactInfo(req, res) {
  try {
    console.log("Creating new entry: ", req.body.contact);
    await Contact.create(req.body.contact);
    res.status(200).send({ message: "Created" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
