import React from "react";
import { Navbar, Footer, Jumbotron, Loading, Error } from "components";

interface Props {
  children?: React.ReactNode;
  isJumbotron?: boolean;
  status?: string;
  data?: any;
}

function index(props: Props) {
  const { children, isJumbotron = true, status = "", data } = props;
  
  if (status === "loading" || !status) return <Loading />;

  return (
    <>
      <Navbar />
      {status === "error" ? (
        <Error />
      ) : (
        <>
          {isJumbotron && <Jumbotron data={data} />}
          <main className="z-10 pt-16">{children}</main>
        </>
      )}
      <Footer />
    </>
  );
}

export default index;
