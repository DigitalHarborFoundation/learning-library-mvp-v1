import { table, minifyRecords } from "./utils/airtable";

const getAllRecords = async (req, res) => {
  const records = await table
    .select({
      view: "Approved Resources",
    })
    .firstPage();
  const minifiedRecords = minifyRecords(records);
  res.statusCode = 200;
  res.json(minifiedRecords);
};

export default getAllRecords;
