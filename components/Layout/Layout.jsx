import React from "react";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import { Toaster } from "react-hot-toast";
import {Helmet} from "react-helmet"; 

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
      <main style={{ minHeight: "100vh" }}>
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
