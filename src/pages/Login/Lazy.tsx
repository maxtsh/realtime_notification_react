import LazyLoading from "@/utils/LazyLoading";

export default LazyLoading(() => import("./index"), {
  Fallback: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Loading the page...</h1>
    </div>
  ),
});
