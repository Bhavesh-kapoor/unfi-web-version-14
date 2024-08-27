import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blog, setBlog] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const response = await axios.post(
          "https://crm.unificars.com/api/bloggs/detail",
          { slug }
        );
        const data = response.data;
        setBlog(...data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <div className="mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="mt-4">Error: {error}</div>;
  }

  return (
    <main>
      <Head>
        <title>{blog?.heading}</title>
        <meta name="description" content={blog?.meta_desc} />
        <meta name="keywords" content={blog?.Key_words} />
        <link rel="canonical" href={`https://unificars.com/blog/${slug}`} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Team Unifi Cars" />
      </Head>

      <div className="m-4 md:m-8">
        {blog ? (
          <div className="space-y-4">
            <h1 className="text-4xl text-blue-950 my-2 text-center">
              {blog.heading}
            </h1>
            {blog?.image && (
              <img
                src={blog.image}
                alt={blog?.heading}
                className="my-4 rounded-xl w-full"
              />
            )}
            <p className="text-end my-4 font-bold">{blog.date}</p>
            <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
          </div>
        ) : (
          <div className="text-4xl text-blue-950 my-2 text-center">
            No blog found for slug: {slug}
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogPage;
