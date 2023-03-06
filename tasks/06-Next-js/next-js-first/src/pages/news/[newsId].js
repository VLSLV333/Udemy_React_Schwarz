import { useRouter } from 'next/router'

const DetailPage = () => {
    const router = useRouter()

    const newsId = router.query.newsId 

    return <h1>The details about this news</h1>
}

export default DetailPage