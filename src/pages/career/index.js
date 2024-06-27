import { Box, Typography } from "@mui/material";
import { CareerTimeline } from "../../components/career/careerTimeline";
import Head from "next/head";
import { motion } from "framer-motion";

export default function AllJobs() {
  const title = "My Job Journey 🚀";
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
        <CareerTimeline />
      </Box>
    </motion.div>
  );
}
