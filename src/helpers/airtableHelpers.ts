const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.API_KEY,
});

module.exports = {
  getAllRecords: () => {
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
                id: record.id,
                title: record.get("Resource Title"),
                image: record.get("Featured Image"),
                url: record.get("URL"),
                os: record.get("Operating System"),
                pathway: record.get("Pathway"),
                level: record.get("Skill Level"),
                tags: record.get("Tags"),
                description: record.get("Description"),
                type: record.get("Content Type"),
              };

              allRecords.push(item);
              console.log(allRecords);
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
  },

  // getRecordByID: (recordId) => {
  //   const base = new Airtable.base(process.env.BASE_ID);
  //   return new Promise((resolve, reject) => {
  //     base(process.env.TABLE_NAME).find(recordId, (error, record) => {
  //       if (error) {
  //         console.error(error);
  //         reject({ error });
  //       }
  //       const item = {
  //         id: record.id,
  //         title: record.get("Resource Title"),
  //         image: record.get("Featured Image"),
  //         url: record.get("URL"),
  //         os: record.get("Operating System"),
  //         pathway: record.get("Pathway"),
  //         level: record.get("Skill Level"),
  //         tags: record.get("Tags"),
  //         description: record.get("Description"),
  //         type: record.get("Content Type"),
  //       };

  //       resolve(item);
  //     });
  //   });
  // },

  getRecordsByPathway: (pathwayName) => {
    const base = new Airtable.base(process.env.BASE_ID);

    return new Promise((resolve, reject) => {
      const allRecords = [];

      base(process.env.TABLE_NAME)
        .select({
          // filterByFormula: `({Pathway}) = ${fieldName})`,
          // filterByFormula: "NOT({Pathway} = 'Tech Literacy')",
          filterByFormula: `{Pathway} = '${pathwayName}'`,
        })
        .eachPage(
          (records, fetchNextPage) => {
            // Get the fields
            records.forEach((record) => {
              const item = {
                id: record.id,
                title: record.get("Resource Title"),
                // // content: record.get("content"),
                // // publish_date: record.get("publish_date"),
              };

              // Push post to
              allRecords.push(item);
              console.log(allRecords);
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
  },
};
