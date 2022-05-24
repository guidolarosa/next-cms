import { fetchAPI } from '../../lib/api';

interface Artist {
    attributes: {
        Name: string,
        Bio: string
    },
    id: number
}

const Artist = (props : any) => {
    return (
        <div>
            {props.artistsRes.data.map((artist : Artist) => (
                <>
                    <h1 key={artist.id}>{artist.attributes.Name}</h1>
                    <p>{artist.attributes.Bio}</p>
                </>
            ))}
            {/* <h2>{props}</h2> */}
        </div>
    )
}

export async function getStaticPaths() {
    

    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context : any) {
    const artistsRes = await fetchAPI("/artists");

    return {
        props: {artistsRes}
    }
}


export default Artist;
