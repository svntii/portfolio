import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';


import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import AppleIcon from '@mui/icons-material/Apple';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';

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

const ICONS = {
    'laptop': LaptopMacIcon,
    'apple': AppleIcon,
    "SWE": CodeIcon,
    'finance': AccountBalanceIcon,
    'golf': GolfCourseIcon,
    'default': WorkIcon
  };

function Job({ job }) {
    const Icon = ICONS[job.icon];
    const boxStyles = { width: '80%' }

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
                
                <TimelineConnector style={{ backgroundColor: 'black' }} />
                <TimelineDot style={{ backgroundColor: 'purple' }}>
                {Icon && <Icon style={{ backgroundColor: 'purple' }}  />}
                </TimelineDot>
                <TimelineConnector style={{ backgroundColor: 'black' }} />
            
            
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                
                <Box sx={{ paddingBottom: 1, paddingLeft: 1 }}>

                    <Typography variant="h5" component="span">
                        {job.title}
                    </Typography>
                    <Typography variant='body2'>{job.company}</Typography>
                    <Typography variant='caption'>{job.location}</Typography>


                </Box>

                <Box>
                    <AccordionSection
                        title={"Responsibilities"}
                        listItem={job.responsibilities}
                        boxStyles={boxStyles}
                    />


                    <ThoughtSection
                        title="Thoughts"
                        content={job.thoughts}
                        boxStyles={boxStyles}
                    />


                    <AccordionSection
                        title={"Skills"}
                        listItem={job.skills}
                        boxStyles={boxStyles}
                    />

                </Box>



            </TimelineContent>
        </TimelineItem>
    );
}


function ThoughtSection({ title, content, boxStyles }) {
    return (
        <Accordion sx={{ ...boxStyles }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography align="left">
                    {content}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}


function AccordionSection({ title, listItem, boxStyles }) {
    return (
        <Accordion sx={{ ...boxStyles }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ul>
                    {listItem.map((item, index) => (
                        <li key={index}>
                            <Typography align="left" sx={{ paddingBottom: 1 }}>{item}</Typography>
                        </li>
                    ))}
                </ul>
            </AccordionDetails>
        </Accordion>
    );
}