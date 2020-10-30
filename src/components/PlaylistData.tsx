import PlaylistsPageLayout from "./PlaylistsPageLayout";

// TODO: unify the data fetching into a single component?

const PlaylistsData = ({
  title,
  landingPageCopy,
  image,
  resourceLinks,
  linkTitles,
  linkPathways,
}) => {
  console.log("pagelayout", linkPathways);
  return (
    <PlaylistsPageLayout
      title={title}
      landingPageCopy={landingPageCopy}
      image={image}
      resourceLinks={resourceLinks}
      linkTitles={linkTitles}
      linkPathways={linkPathways}
    />
  );
};

export default PlaylistsData;
