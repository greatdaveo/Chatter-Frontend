import NavBar from "../components/NavBar";
import InPageNavigation from "../components/Contents/InPageNavigation";

const ContentsPage = () => {
  return (
    <div>
      <NavBar />

      <section>
        {/* LATEST BLOGS */}
        <div>
          <InPageNavigation
            routes={["Home", "Trending blogs"]}
            defaultHidden={["Trending blogs"]}
          >
            <h1>Latest Blogs Here</h1>

            <h2>Trending Blogs Here</h2>
          </InPageNavigation>
        </div>

        {/* FILTERS AND TRENDING BLOGS */}
        <div>
          <h1>Contents</h1>
        </div>
      </section>
    </div>
  );
};

export default ContentsPage;
