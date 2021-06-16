import { useRouter } from 'next/router'
import {getAllPages} from "../../utilis/query";
import {RichText} from "prismic-reactjs";

import Grid         from "@components/Grid"
import MenuAside    from "@components/MenuAside"
import Container    from "@components/Container"

const Post = () => {

    const router = useRouter()
    const posts = getAllPages('smart')
    const getText = posts && posts.data.allPagess.edges.find(e => e.node._meta.uid == router.query.slug)
    const getCategories = posts && posts.data.allPagess.edges.filter(e => e.node._meta.uid !== "smart-home-and-security")

    return <Container>

        <Grid
            gridGap="2rem"
            columns="360px 1fr"
        >
            <MenuAside
                categories={getCategories}
                tag={"smart"}
            />
            <div>
                {posts && <RichText render={getText.node.description}/>}
            </div>
        </Grid>

    </Container>
}


export default Post
