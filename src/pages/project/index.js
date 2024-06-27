import { getSortedProjectsData } from "../../../lib/projects";
import Link from "next/link";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { DateShortString } from "../../components/date";
import Head from "next/head";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function AllProjects({ allProjectsData }) {
  const title = "My Projects 🧑‍💻";

  return (
    <motion.div // Step 2: Wrap main content with motion.div
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
            {allProjectsData.map(({ id, date, end, title }) => (
              <ListItem key={id} disablePadding>
                <ListItemText
                  primary={
                    <Link href={`/project/${id}`} passHref>
                      <Typography variant="h6" component="a">
                        {title}
                      </Typography>
                    </Link>
                  }
                  secondary={`${DateShortString({
                    dateString: date,
                  })} to ${DateShortString({ dateString: end })}`}
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
