// go to the captures folder and get all the projects, and pictures

import fs from "fs";
import path from "path";


const capturesDirectory = path.join(process.cwd(), "public/captures");

export function getProjectsPhotosData() {
  // Get all items (files and directories) under directory
  const items = fs.readdirSync(capturesDirectory);

  // Filter out only directories (projects)
  const projectDirs = items.filter((item) => {
    const itemPath = path.join(capturesDirectory, item);
    return fs.statSync(itemPath).isDirectory();
  });

  // Map each project directory to its photos
  const allProjectsData = projectDirs.map((projectDir) => {
    // Define the path to the project directory
    const projectPath = path.join(capturesDirectory, projectDir);

    // Get photo file names within the project directory
    const photoFileNames = fs.readdirSync(projectPath);
    
    // Map each photo file name to its data
    const photosData = photoFileNames.map((fileName) => {
      // Construct the photo's path (relative or absolute as needed)
      const photoPath = path.join(projectPath, fileName);

      // Return structured data for each photo
      return {
        project: projectDir,
        fileName,
        path: photoPath,
      };
    });

    // Return the project's data, including its photos
    return {
      projectName: projectDir,
      photos: photosData,
    };
  });

  // Return the structured data for all projects
  return allProjectsData;
}
