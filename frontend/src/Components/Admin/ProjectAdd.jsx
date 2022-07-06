import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addProject, getUser } from "../../Actions/userAction";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ProjectCard } from "../Project/Work";

const ProjectAdd = () => {
  const { message, error, loading } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addProject(title, url, image, description, techStack));
    dispatch(getUser());
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  useEffect(() => {
    if (error) {
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      dispatch({ type: "CLEAR_MESSAGE" });
    }
    if (loginMessage) {
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [error, message, dispatch, loginMessage]);

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs"
          />

          <input
            type="text"
            placeholder="Technologies"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="file"
            onChange={handleImage}
            className="adminPanelFileUpload"
            accept="image/*"
          />

          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
        </form>

        <div className="adminPanelYoutubeVideos">
          {user &&
            user.projects &&
            user.projects.map((item) => (
              <ProjectCard
                id={item._id}
                key={item._id}
                url={item.url}
                projectImage={item.image.url}
                projectTitle={item.title}
                description={item.description}
                technologies={item.techStack}
                isAdmin={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectAdd;
