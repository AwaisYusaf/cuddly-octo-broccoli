import BlogPost from "@/components/Blog/BlogPost";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

type Props = {};

export default function Page({ }: Props) {
    return (
        <>
            <Header selected="terms-and-conditions" />
            <section className="bg-white dark:bg-gray-900">
                Terms and Conditions
            </section>
            <Footer />
        </>
    );
}
