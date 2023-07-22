import BlogPost from "@/components/Blog/BlogPost";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

type Props = {};

export default function BlogPage({}: Props) {
  return (
    <>
      <Header selected="blog" />
      <section className="bg-white dark:bg-gray-900">
        <BlogPost />
      </section>
      <Footer />
    </>
  );
}
