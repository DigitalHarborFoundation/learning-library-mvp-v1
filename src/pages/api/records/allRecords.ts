import { NextApiHandler } from "next";
// import { getAllRecords } from "../../../helpers/airtableHelpers";

const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.API_KEY,
});

const getAllRecords = () => {
  const base = new Airtable.base(process.env.BASE_ID);

  return new Promise((resolve, reject) => {
    const allRecords = [];

    base(process.env.TABLE_NAME)
      .select({
        filterByFormula: `{Status} = 'Approved'`,
        sort: [
          {
            field: "Resource Title",
            direction: "desc",
          },
        ],
      })
      .eachPage(
        (records, fetchNextPage) => {
          // Get the fields
          records.forEach((record) => {
            const item = {
              id: record.id || null,
              title: record.get("Resource Title") || null,
              image: record.get("Featured Image"),
              url: record.get("URL") || null,
              os: record.get("Operating System") || null,
              pathway: record.get("Pathway") || null,
              level: record.get("Skill Level") || null,
              tags: record.get("Tags") || null,
              description: record.get("Description") || null,
              type: record.get("Content Type") || null,
              author: record.get("Author") || null,
            };

            allRecords.push(item);
          });

          fetchNextPage();
        },
        (error) => {
          if (error) {
            console.error(error);
            reject({ error });
          }
          resolve(allRecords);
        }
      );
  });
};

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
