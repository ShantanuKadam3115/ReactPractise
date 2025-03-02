export default function SideBar(props) {
            const {handelFooterShowup, data} = props
  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handelFooterShowup}></div>
      <div className="sidebarContent">
        <h2>{data?.title}</h2>
        <div>
          <h3>{data?.date}</h3>
          <p>
            {data?.explanation}
          </p>
        </div>
        <button onClick={handelFooterShowup}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
