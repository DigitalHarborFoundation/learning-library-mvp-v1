import { NextApiHandler } from "next";
import { getRecordsByField } from "../../../helpers/airtableHelpers";

const recordsByField: NextApiHandler = async (req, res) => {
  Promise.resolve(getRecordsByField(req.query.field))
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).end;
    });
};

export default recordsByField;
