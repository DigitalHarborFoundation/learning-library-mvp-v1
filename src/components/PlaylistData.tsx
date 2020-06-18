import PlaylistsPageLayout from "./PlaylistsPageLayout";

// TODO: unify the data fetching into a single component?

const PlaylistsData: React.FC = ({
  title,
  longDescription,
  image,
  resourceLinks,
  linkTitles,
}) => {
  return (
    <PlaylistsPageLayout
      title={title}
      longDescription={longDescription}
      image={image}
      resourceLinks={resourceLinks}
      linkTitles={linkTitles}
    />
  );
};

export default PlaylistsData;
