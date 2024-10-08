export default function YouTubeEmbed() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        width="75%"
        height="auto"
        src="https://www.youtube.com/embed/O_Xp23eDOR0?si=PqqHimwPSUtfHwK6"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
