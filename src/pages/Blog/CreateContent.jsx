import "../../styles/pages/Blog/CreateContent.css";

const CreateContent = () => {
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="post-content">
      <form onSubmit={handleSubmit}>
        <textarea name="description" placeholder="Enter Your Content Here" />

        <div className="overlay">
          {/* <input type="file" /> */}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateContent;
