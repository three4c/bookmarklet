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

    const titleSplit = title.split(" ");
    const number = titleSplit[0];
    const hashTag = "@ABEMA";
    const text = `${headerText} ${number}${addBrackets(titleSplit[1])}を視聴しました！${hashTag}`;
    const { href } = location;
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(href)}`;
    return url;
  };

  const youtube = () => {
    const title = document.querySelector("title").innerText.slice(0, -10);
    const hashTag = "@YouTube";
    const text = `${title}を視聴しました！${hashTag}`;
    const { href } = location;
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(href)}`;
    return url;
  };

  const url = dAnimeStore() || abemaTV() || youtube();
  if (url) {
    window.open(url, "_blank");
  }
};
