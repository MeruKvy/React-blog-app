import "./App.css";
import { useState } from "react";
import Blog from "./blog";
import { v4 as uuid } from "uuid";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

function App() {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [blogList, setBlogList] = useState([
    {
      title: "Build identity-based habits",
      description:
        "The key to building lasting habits is focusing on creating a new identity first. Your current behaviors are simply a reflection of your current identity. What you do now is a mirror image of the type of person you believe that you are (either consciously or subconsciously To change your behavior for good, you need to start believing new things about yourself. You need to build identity-based habits",
    },
  ]);

  const addArticle = () => {
    if (heading === "" || description === "") {
      setErrorMessage(true);
      return null;
    }
    setErrorMessage(false);
    const id = uuid();
    const blog = {
      title: heading,
      description: description,
      id: id,
    };

    setBlogList([...blogList, blog]);
    setHeading("");
    setDescription("");
  };

  const deleteArticle = (id) => {
    const updatedList = blogList.filter((blog) => blog.id !== id);
    setBlogList(updatedList);
  };

  const updateArticle = (id, text, title) => {
    const chosenBlog = blogList.filter((blog) => blog.id === id);
    chosenBlog[0].title = text;
    chosenBlog[0].description = title;
    setHeading("");
    setDescription("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="menu-wrapper">
          <form className="article-form">
            <h1 className="heading">Create Article</h1>
            <input
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="input"
              placeholder="Title"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea"
              placeholder="Description"
            />
            {errorMessage ? (
              <p className="warning">
                {" "}
                <ReportProblemIcon style={{ fontSize: "medium" }} /> Please fill
                both inputs
              </p>
            ) : (
              ""
            )}
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                addArticle();
              }}
            >
              <AddCommentIcon />
            </button>
          </form>
        </div>

        <div className="articles">
          {blogList.length > 0
            ? blogList.map((item) => (
                <Blog
                  article={item}
                  key={item.id}
                  onDelete={deleteArticle}
                  onEdit={updateArticle}
                />
              ))
            : ""}
        </div>
      </div>
      <div className="author">
        <p>
          Coded by{" "}
          <a target="blanc__" href="https://github.com/MeruKvy">
            @Merukvy
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
