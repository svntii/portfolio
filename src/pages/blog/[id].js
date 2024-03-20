import { getAllPostIds, getPostData } from "../../../lib/posts";
import { BlogLayout } from "../../components/blog/blogLayout";
import Date from '../../components/date';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Post({ postData }) {
    return (
        <BlogLayout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <Box sx={{ width: '100vw', height: '100vh' }}>
                <article>
                    <Typography variant="h4" sx={{ marginBottom: '1em' }}>{postData.title}</Typography>
                    <Typography variant="subtitle1" sx={{ marginBottom: '1em', color: 'gray' }}>
                        <Date dateString={postData.date} />
                    </Typography>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
            </Box>
        </BlogLayout>
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
