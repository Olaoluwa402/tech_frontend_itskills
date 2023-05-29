const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        height: "450px",
        padding: "10px",
        display: "flex",
        gap: 20,
      }}
      className="banner"
    >
      <div
        style={{ width: "100%", height: "100%", backgroundColor: "#324" }}
        className="section-one"
      ></div>
      <div
        style={{ width: "100%", height: "100%", backgroundColor: "red" }}
        className="section-two"
      ></div>
    </div>
  );
};

export default Banner;
