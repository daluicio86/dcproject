"use client";
import React, { useEffect, useState } from 'react';
import BlogCard from '@/components/shared/Blog/blogCard';
//import { getAllPosts } from '@/components/utils/markdown';
import { Icon } from "@iconify/react";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface Blog {
    title: string;
    date: string;
    excerpt: string;
    coverImage: string;
    slug: string;
    detail: string;
    tag: string;
}

const BlogSmall: React.FC = () => {
    const { t } = useTranslation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Any client-side effects can be handled here    
        fetch("/api/posts")
            .then(res => res.json())
            .then(data => setPosts(data.slice(0, 3)));
    }, []);
    // Get all posts and map over them to ensure each field is a string


    return (
        <section>
            <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                <div className='flex justify-between md:items-end items-start mb-10 md:flex-row flex-col'>
                    <div>
                        <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                            <Icon icon="ph:house-simple-fill" className="text-2xl text-primary" aria-label="Home icon" />
                            {t("blog")}
                        </p>
                        <h2 className="lg:text-52 text-40 font-medium dark:text-white">
                            {t("realEstateInsights")}
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 text-xm'>
                            {t("stayAheadInThePropertyMarket")}
                        </p>
                    </div>
                    <Link href="/blogs" className='bg-dark dark:bg-white text-white dark:text-dark py-4 px-8 rounded-full hover:bg-primary duration-300' aria-label="Read all blog articles">
                        {t("readAllArticles")}
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-12">
                    {posts.map((blog, i) => (
                        <div key={i} className="w-full">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogSmall;
