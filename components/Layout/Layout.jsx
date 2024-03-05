import React from "react";
import Footer from "./footer";
import Header from "./header";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "CureConnect",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Adarsh , Sahana , Jumi , Sampada ",
};

export default Layout;
