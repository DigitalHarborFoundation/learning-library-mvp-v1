import { NextApiHandler } from "next";
import { getRecordsByOS } from "../../../helpers/airtableHelpers";

const recordsByOS: NextApiHandler = async (req, res) => {
  Promise.resolve(getRecordsByPathway(req.query.os))
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).end;
    });
};

export default recordsByOS;
