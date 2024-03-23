import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
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

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export function CareerTimeline() {
    const jobs = career.jobs;
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const smallScreenAlign = {
        [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
        },
    }

    const regularScreenAlign = {
        [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
        },
    }

    const align = isSmallScreen ? smallScreenAlign : regularScreenAlign;


    return (
        <Timeline
            sx={{ ...align }}
        >
            {jobs.map((job, index) => (
                isSmallScreen ? <JobMobileDevice key={index} job={job} /> : <JobRegular key={index} job={job} />
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


function JobMobileDevice({ job }) {
    const Icon = ICONS[job.icon];
    const boxStyles = { width: '120%' }

    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector style={{ backgroundColor: 'black' }} />
                <TimelineDot style={{ backgroundColor: 'purple' }}>
                    {Icon && <Icon style={{ backgroundColor: 'purple' }} />}
                </TimelineDot>
                <TimelineConnector style={{ backgroundColor: 'black' }} />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="body2" color="text.secondary">
                    <DateShort dateString={job.startDate} />
                </Typography>
                <Box sx={{ paddingBottom: 2 }}>
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
        </TimelineItem >
    );
}

function JobRegular({ job }) {
    const Icon = ICONS[job.icon];
    const boxStyles = { width: '80%' }

    return (
        <TimelineItem  >
            <TimelineOppositeContent
                align="right"
                variant="body2"
                color="text.secondary"
            >
                <DateShort dateString={job.startDate} />
            </TimelineOppositeContent>
            <TimelineSeparator>

                <TimelineConnector style={{ backgroundColor: 'black' }} />
                <TimelineDot style={{ backgroundColor: 'purple' }}>
                    {Icon && <Icon style={{ backgroundColor: 'purple' }} />}
                </TimelineDot>
                <TimelineConnector style={{ backgroundColor: 'black' }} />


            </TimelineSeparator>
            <TimelineContent>

                <Box sx={{ paddingBottom: 1 }}>

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




function Job({ job }) {
    const Icon = ICONS[job.icon];
    const boxStyles = { width: '100%' }

    return (
        <TimelineItem  >
            <TimelineOppositeContent
                align="right"
                variant="body2"
                color="text.secondary"
            >
                <DateShort dateString={job.startDate} />
            </TimelineOppositeContent>
            <TimelineSeparator>

                <TimelineConnector style={{ backgroundColor: 'black' }} />
                <TimelineDot style={{ backgroundColor: 'purple' }}>
                    {Icon && <Icon style={{ backgroundColor: 'purple' }} />}
                </TimelineDot>
                <TimelineConnector style={{ backgroundColor: 'black' }} />


            </TimelineSeparator>
            <TimelineContent>

                <Box sx={{ paddingBottom: 1 }}>

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