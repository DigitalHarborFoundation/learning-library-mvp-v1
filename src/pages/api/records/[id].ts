import { NextApiHandler } from "next";
import { getRecordByID } from "../../../helpers/airtableHelpers";

const recordByID: NextApiHandler = async (req, res) => {
  Promise.resolve(getRecordByID(req.query.id))
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).end;
    });
};

export default recordByID;
