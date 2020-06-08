import { NextApiHandler } from "next";
import { getAllRecords } from "../../helpers/airtableHelpers";

const withAirtable: NextApiHandler = async (req, res) => {
  Promise.resolve(getAllRecords())
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).end;
    });
};

export default withAirtable;
