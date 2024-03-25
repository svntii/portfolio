import { getSortedPostsData } from '../../../lib/posts';
import Link from 'next/link';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';


export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function AllBlogs({ allPostsData }) {
    return (
        <Box sx={{ padding: "3em", background: "background.paper" }}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginBottom: 2 }}>
                All Posts 📑
            </Typography>
            <div>
                <List dense={true}>
                    {allPostsData.map(({ id, date, title }) => (
                        <ListItem key={id} disablePadding>
                            <ListItemText
                                primary={
                                    <Link href={`/blog/${id}`} passHref>
                                        <Typography variant="h6" component="a">{title}</Typography>
                                    </Link>
                                }
                                secondary={date}
                                sx={{ textAlign: 'left' }}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Box>
    );
}