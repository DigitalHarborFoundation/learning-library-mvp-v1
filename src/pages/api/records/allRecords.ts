import { NextApiHandler } from "next";
import { getAllRecords } from "../../../helpers/airtableHelpers";

const allRecords: NextApiHandler = async (req, res) => {
  Promise.resolve(getAllRecords())
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      console.log("the error is here", error);
      res.status(404).end;
    });
};

export default allRecords;
