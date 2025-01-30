export default () => {
  const dAnimeStore = () => {
    const headerText = document.querySelector(".headerText")?.innerText;
    const number = document.querySelector(".number")?.innerText;
    const title = document.querySelector(".title")?.innerText;

    if (!headerText || !number || !title) {
      return;
    }

    const hashTag = "#dアニメストア";
    const text = `${headerText}${number}「${title}」を視聴しました！${hashTag}`;
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
    const convertTitle = `${titleSplit[0]}「${titleSplit[1]}」`;
    const hashTag = "#ABEMA";
    const text = `${headerText}${convertTitle}を視聴しました！${hashTag}`;
    const { href } = location;
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(href)}`;
    return url;
  };

  const url = dAnimeStore() || abemaTV();
  window.open(url, "_blank");
};
