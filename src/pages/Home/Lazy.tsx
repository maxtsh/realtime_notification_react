import LazyLoading from "@/utils/LazyLoading";

export default LazyLoading(() => import("./index"), {
  Fallback: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <h1>Loading home page...</h1>
    </div>
  ),
});
