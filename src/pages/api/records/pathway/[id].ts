import { NextApiHandler } from "next";
import { getRecordsByPathway } from "../../../../helpers/airtableHelpers";

const recordsByPathway: NextApiHandler = async (req, res) => {
  Promise.resolve(getRecordsByPathway(req.query.id))
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).end;
    });
};

export default recordsByPathway;
