export default () => {
  const addBrackets = (text) => (/「(.*?)」/.test(text) ? text : `「${text}」`);

  const dAnimeStore = () => {
    const headerText = document.querySelector("modal .headerText")?.innerText;
    const number = document.querySelector("modal .number")?.innerText;
    const title = document.querySelector("modal .title")?.innerText;

    if (!headerText || !number || !title) {
      return;
    }

    const hashTag = "#dアニメストア";
    const text = `${headerText} ${number}${addBrackets(title)}を視聴しました！${hashTag}`;
    const { href } = location;
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(href)}`;
    return url;
  };

  const abemaTV = () => {
    const headerText = document.querySelector(
      ".com-video-EpisodeTitle__series-info",
    )?.innerText;
    const title = document.querySelector(
      ".com-video-EpisodeTitle__episode-title",
    )?.innerText;

    if (!headerText || !title) {
      return;
    }

    const convertTitle = title.split(" ");
    const number = convertTitle[0];
    const hashTag = "@ABEMA";
    const text = `${headerText} ${number}${addBrackets(convertTitle[1])}を視聴しました！${hashTag}`;
    const { href } = location;
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(href)}`;
    return url;
  };

  const url = dAnimeStore() || abemaTV();
  if (url) {
    window.open(url, "_blank");
  }
};
