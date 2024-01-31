import React, { useContext } from 'react'
import { PostsContext } from '../Posts'
import FeaturedPost from '../FeaturedPost'
import PostsGrid from '../PostsGrid'
import LandingPageNotice from '../LandingPageNotice'
import SEO from 'components/seo'

export default function Blog({ title = 'Blog' }) {
    const { posts } = useContext(PostsContext)
    const [featuredPost, ...rest] = posts

    return (
        <div className="mx-auto max-w-screen-xl">
            <SEO title={`${title} - PostHog`} />
            <LandingPageNotice title={title} />
            <FeaturedPost {...featuredPost?.attributes} />
            <PostsGrid posts={rest} />
        </div>
    )
}
