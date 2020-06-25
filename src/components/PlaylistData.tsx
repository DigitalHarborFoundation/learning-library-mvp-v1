import PlaylistsPageLayout from "./PlaylistsPageLayout";

// TODO: unify the data fetching into a single component?

const PlaylistsData = ({
  title,
  landingPageCopy,
  image,
  resourceLinks,
  linkTitles,
}) => {
  return (
    <PlaylistsPageLayout
      title={title}
      landingPageCopy={landingPageCopy}
      image={image}
      resourceLinks={resourceLinks}
      linkTitles={linkTitles}
    />
  );
};

export default PlaylistsData;
