export default function Main(props) {
  const { data } = props;
  if (!data) return null;

  if ((data.media_type = "image")) {
    return (
      <div className="imageContainer">
        <img
          src={data.hdurl || data?.url}
          alt={data?.title}
          className="bg-image"
        />
      </div>
    );
  }

  if ((data.media_type = "video")) {
    const videoId = data.url.includes("v=")
      ? data.url.split("v=")[1].split("&")[0]
      : data.url.split("/").pop();
    return (
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={data.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return <div>Unsupported media type</div>;
}
