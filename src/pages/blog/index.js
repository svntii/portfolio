import { getSortedPostsData } from "../../../lib/posts";
import Link from "next/link";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import Head from "next/head";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function AllBlogs({ allPostsData }) {
  const title = "All Posts 📑";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ padding: "3em", background: "background.paper" }}>
        <Head>
          <title>{title}</title>
        </Head>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, marginBottom: 2 }}
        >
          {title}
        </Typography>
        <div>
          <List dense={true}>
            {allPostsData.map(({ id, date, title }) => (
              <ListItem key={id} disablePadding>
                <ListItemText
                  primary={
                    <Link href={`/blog/${id}`} passHref>
                      <Typography variant="h6" component="a">
                        {title}
                      </Typography>
                    </Link>
                  }
                  secondary={date}
                  sx={{ textAlign: "left" }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Box>
    </motion.div>
  );
}
