


export const homeBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'black',
};

export function profileBoxStyles( maxWidth, maxHeight, overflowMaxHeight) {
    return {
        maxWidth: maxWidth,
        maxHeight: maxHeight, bgcolor: 'background.paper',
        p: 2,
        mt: 2,
        overflow: 'hidden',
        '&:hover': { maxHeight: overflowMaxHeight },
        borderRadius: '8px'
    }
}