import React from "react";
import ProjectPageBody from "./ProjectPageBody";
import ProjectPageSlider from "./ProjectPageSlider";

function ProjectPage() {
  return (
    <div className="projectPage">
      <ProjectPageSlider />
      <ProjectPageBody />
    </div>
  );
}

export default ProjectPage;
