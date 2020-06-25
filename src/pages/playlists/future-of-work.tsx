import { Heading } from "@chakra-ui/core";
import PlaylistsData from "../../components/PlaylistData";

const FutureOfWorkPage = ({
  title,
  longDescription,
  image,
  resourceLinks,
  linkTitles,
}) => {
  return (
    <PlaylistsData
      title={title}
      landingPageCopy={landingPageCopy}
      image={image}
      resourceLinks={resourceLinks}
      linkTitles={linkTitles}
    ></PlaylistsData>
  );
};

export default FutureOfWorkPage;

export async function getServerSideProps({ params, query }) {
  const apiKey = process.env.API_KEY;
  const baseId = process.env.BASE_ID;

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/Playlists/recZ25DWku6rvEqAP?api_key=${apiKey}`,
    { method: "GET", mode: "no-cors", credentials: "same-origin" }
  );
  const data = await res.json();

  return {
    props: {
      id: data.id || null,
      title: data.fields["Playlist Title"] || null,
      resourceLinks: data.fields["Resource Links"] || null,
      linkTitles: data.fields["Link Titles"] || null,
      image: data.fields["Featured Image"][0].url || null,
      description: data.fields["Description"] || null,
      longDescription: data.fields["Long Description"] || null,
      level: data.fields["Skill Level"] || null,
      tags: data.fields["Tags"] || null,
      landingPageCopy: data.fields["Landing Page Copy"] || null,
    },
  };
}
