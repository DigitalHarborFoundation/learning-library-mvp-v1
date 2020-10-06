const allRecords = async (req, res) => {
  const apiKey = process.env.API_KEY;
  const baseId = process.env.BASE_ID;
  const initialData = await fetch(
    `https://api.airtable.com/v0/${baseId}/Content%20Resources?view=Approved%20Resources&api_key=${apiKey}`
  );
  const { records, offset } = await initialData.json();

  if (records) {
    console.log(records);
    console.log(offset ? `offset: ${offset}` : "no offset");
    return res.status(200).json({
      records: records,
      offset: offset,
    });
  } else {
    return res.status(404).json;
  }
};

export default allRecords;
