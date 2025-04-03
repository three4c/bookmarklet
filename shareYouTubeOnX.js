export default () => {
  const regex = / - YouTube$/g;
  const isYouTubeTitle = (title) => regex.test(title);
  const title = document.title;

  if (isYouTubeTitle(title)) {
    const convertTitle = document.title.replace(regex, "");
    const hashTag = "@YouTube";
    const text = `${convertTitle}を視聴しました！${hashTag}`;
    const { href } = location;
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(href)}`;

    window.open(url, "_blank");
  }
};
