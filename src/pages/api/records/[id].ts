import { NextApiHandler } from "next";

const recordById = async (req, res) => {
  const apiKey = process.env.API_KEY;
  const baseId = process.env.BASE_ID;
  const tableName = process.env.TABLE_NAME;

  const data = await fetch(
    `https://api.airtable.com/v0/${baseId}/${tableName}/${req.query.id}?api_key=${apiKey}`
  );
  const recordResponse = await data.json();

  if (recordResponse) {
    return res.status(200).json({
      recordResponse,
    });
  } else {
    return res.status(404).json;
  }
};

export default recordById;
