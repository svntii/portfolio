"use client";
import { Box, Stack, Typography, Paper } from "@mui/material";
import Head from "next/head";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./index.css";

const photosData = [
  {
    project: "misc",
    date: "2024-05-18",
    src: "/captures/misc/20240518_AlbChurch.JPG",
    camera: "",
    shotby: "Christian Matthew",
    model: "",
    alt: "Alberquerque Church",
  },
  {
    project: "misc",
    date: "2024-05-18",
    src: "/captures/misc/20240518_standing.JPG",
    camera: "",
    shotby: "Christian Matthew",
    model: "@svntiiago",
    alt: "Standing",
  },
  {
    project: "misc",
    date: "2024-05-18",
    src: "/captures/misc/20240518_tent.JPG",
    camera: "",
    shotby: "Christian Matthew",
    model: "",
    alt: "Tent in the morning",
  },
  {
    project: "misc",
    date: "2024-05-18",
    src: "/captures/misc/20240518_arches.JPG",
    camera: "",
    shotby: "Christian Matthew",
    model: "@svntiiago",
    alt: "Santiago in the Distance",
  },
  {
    project: "misc",
    date: "2024-05-18",
    src: "/captures/misc/20240518_arch.JPG",
    camera: "",
    shotby: "Christian Matthew",
    model: "",
    alt: "Arches in the sky",
  },
  {
    project: "misc",
    date: "2022-07-07",
    src: "/captures/misc/20220707_lostPath..jpg",
    camera: "iphone xr",
    shotby: "Santiago Rodriguez",
    model: "",
    alt: "Lost Path",
  },
  {
    project: "misc",
    date: "2024-08-20",
    src: "/captures/misc/20240820_highline.jpeg",
    camera: "Sony a6000 50mm",
    shotby: "@svntiiago",
    model: "",
    alt: "8th (I think) Ave near Red Tree on Highline",
  },
  {
    project: "misc",
    date: "2024-08-21",
    src: "/captures/misc/20240821_AAOverMets.jpeg",
    camera: "Sony a6000 50mm",
    shotby: "@svntiiago",
    model: "",
    alt: "American Airlines over Citi Field",
  }
];

export default function AllCaptures() {
  const title = "captured 📸";

  return (
    <motion.Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Gallery />
    </motion.Box>
  );
}

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {photosData.map((photo, index) => (
        <Paper elevation={3} sx={{ padding: 2, margin: 2 }} key={index}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "65vh",
              }}
            >
              <Image src={photo.src} alt={photo.alt} fill objectFit="contain" />
            </div>
            <Box
              sx={{
                textAlign: "left",
                background: "gray",
                color: "white",
                p: 1,
              }}
            >
              <Typography variant="body1">project: {photo.project}</Typography>
              <Typography variant="body1">date: {photo.date}</Typography>
              <Typography variant="body1">camera: {photo.camera}</Typography>
              <Typography variant="body1">shot by: {photo.shotby}</Typography>
              <Typography variant="body1">
                model: {photo.model || "n/a"}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      ))}
    </Slider>
  );
}
