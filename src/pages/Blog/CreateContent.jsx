import "../../styles/pages/Blog/CreateContent.css";

const CreateContent = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    // <input type="file" />;
  }

  return (
    <div className="post-content">
      <form onSubmit={handleSubmit}>
        <div className="content-placeholder">
          <div>
            <span>+</span>
          </div>

          <div>
            <h1>Title</h1>
            <h4>Write a post......</h4>
          </div>
        </div>

        <textarea name="description" />

        <div className="overlay">
          <button type="submit">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default CreateContent;
