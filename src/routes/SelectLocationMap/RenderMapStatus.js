import Loading from "../../components/Loading";

const RenderMapStatus = (status) => {
  if (status === "FAILURE") {
    return (
      <div className="d-flex justify-content-center pt-5">
        <h3>Something went wrong</h3>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center pt-5">
      <Loading size={60} />
    </div>
  );
};

export default RenderMapStatus;
