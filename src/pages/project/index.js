import { getSortedProjectsData } from '../../../lib/projects';
import Link from 'next/link';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { DateShortString } from "../../components/date";
import Head from 'next/head';

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
        <Box sx={{ padding: "3em", background: "background.paper" }}>
            <Head>
                <title>{title}</title>
            </Head>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginBottom: 2 }}>
                {title}
            </Typography>
            <div>
                <List dense={true}>
                    {allProjectsData.map(({ id, date, end, title }) => (
                        <ListItem key={id} disablePadding>
                            <ListItemText
                                primary={
                                    <Link href={`/project/${id}`} passHref>
                                        <Typography variant="h6" component="a">{title}</Typography>
                                    </Link>
                                }
                                secondary={`${DateShortString({ dateString: date })} to ${DateShortString({ dateString: end })}`}
                                sx={{ textAlign: 'left' }}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Box>
    );
}