import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';



import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import career from "@/app/career.json";
import { DateShort } from "@/components/date";

export function CareerTimeline() {
    const jobs = career.jobs;

    return (
        <Timeline position="alternate">
            {jobs.map((job, index) => (
                <Job key={index} job={job} />
            ))}
        </Timeline>
    );
}



function Job({ job }) {

    const boxStyles = { width: '80%'}

    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                <DateShort dateString={job.startDate} />
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                    <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2}}>
                <Typography variant="h6" component="span">
                    {job.title}
                </Typography>
                <Typography>{job.company}</Typography>
                <Accordion sx={{ ...boxStyles }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Responsibilities</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            {job.responsibilities.map((responsibility, index) => (
                                <li key={index}>
                                    <Typography align="left" sx={{ paddingBottom: 1 }}>{responsibility}</Typography>
                                </li>
                            ))}
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ ...boxStyles }} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Thoughts</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {job.thoughts}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </TimelineContent>
        </TimelineItem>
    );
}