import { getAllPostIds, getPostData } from "../../../lib/posts";
import { BlogLayout } from "../../components/blog/blogLayout";
import Date from "../../components/date";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BackButton from "../../components/home/backButton";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

export default function Post({ postData }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BlogLayout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <Box sx={{ padding: "3em", background: "background.paper" }}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <BackButton />
            </Grid>
            <Grid item xs={11}>
              <article>
                <Typography variant="h4" sx={{ marginBottom: "1em" }}>
                  {postData.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ marginBottom: "1em", color: "gray" }}
                >
                  <Date dateString={postData.date} />
                </Typography>
                <div
                  dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
              </article>
            </Grid>
          </Grid>
        </Box>
      </BlogLayout>
    </motion.div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
