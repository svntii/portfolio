import { getAllProjectIds, getProjectData } from "../../../lib/projects";
import { Box, Typography, Grid } from "@mui/material";
import Head from "next/head";
import Date, { DateShort } from "../../components/date";
import BackButton from "../../components/home/backButton";

import { motion } from "framer-motion";

export default function Project({ projectData }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Head>
          <title>{projectData.title}</title>
        </Head>
        <Box sx={{ padding: "3em", background: "background.paper" }}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <BackButton />
            </Grid>
            <Grid item xs={11}>
              <article>
                <Typography variant="h4" sx={{ marginBottom: "1em" }}>
                  {projectData.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ marginBottom: "1em", color: "gray" }}
                >
                  <DateShort dateString={projectData.date} /> to{" "}
                  <DateShort dateString={projectData.end} />
                </Typography>
                <div
                  dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
                />
              </article>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </motion.div>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
