const allRecords = async (req, res) => {
  const apiKey = process.env.API_KEY;
  const baseId = process.env.BASE_ID;
  const data = await fetch(
    `https://api.airtable.com/v0/${baseId}/Content%20Resources?api_key=${apiKey}`
  );
  const recordResponse = await data.json();

  if (recordResponse) {
    return res.status(200).json({
      // response goes here
      recordResponse,
    });
  } else {
    return res.status(404).json;
  }
};

export default allRecords;
