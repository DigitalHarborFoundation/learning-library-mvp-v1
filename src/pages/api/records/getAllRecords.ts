import { __recordsPerPageForIteration } from "airtable/lib/table";

const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.API_KEY }).base(
  process.env.BASE_ID
);
const table = base(process.env.TABLE_NAME);

// nice tricks from James Q Quick!
const getMinifiedRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const minifyRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

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
