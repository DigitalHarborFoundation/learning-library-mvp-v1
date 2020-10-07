import { table, minifyRecords } from "./utils/Airtable";

const getAllRecords = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      const airtableData = [];
      table
        .select({
          view: "Approved Resources",
        })
        .eachPage(
          (records, fetchNextPage) => {
            records.forEach((record) => {
              const recordData = {
                id: record.id,
                fields: record.fields,
              };
              airtableData.push(recordData);
            });
            fetchNextPage();
          },
          (error) => {
            if (error) {
              console.error(error);
              reject({ error });
              return;
            }
            resolve(airtableData);
            const minifiedRecords = minifyRecords(airtableData);
            res.statusCode = 200;
            res.json(minifiedRecords);
          }
        );
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.json({ msg: "Something went wrong with the request." });
    }
  });
};

export default getAllRecords;
