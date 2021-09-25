import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { useEditState } from "tinacms/dist/edit-state";
import { BiRightArrowAlt } from "react-icons/bi";
import Container from '@material-ui/core/Container';
import Admin from '../src/components/Admin';
// import { Button } from "tinacms";


const useStyles = makeStyles(theme => ({
  container: {
      minHeight: 'calc(100vh - 170px)',
      width: '100%',
      marginBottom: 100,
      [theme.breakpoints.between('sm', 'md')]: {
          minHeight: 0,
      }
  },
}));

const GoToEditPage = () => {

  const classes = useStyles();
  const isLaptop = useMediaQuery(theme => theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));

  const { edit, setEdit } = useEditState();
  const router = useRouter();

  return (
    <Container maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'} className={classes.container}>
      <Admin 
        setEdit={() => setEdit(!edit)}
        data={{
            headline: "Admin Login",
            image: {
              src: "/images/helicopter-feature.png",
              alt: "Helicopter hero image"
            },
            // if edit is true
            loggedInActions: [
              {
                label: "Home Page",
                type: "Button",
                icon: <BiRightArrowAlt size={25} />,
                link: "/",
              },
              {
                label: "Log Out",
                type: "Button",
                icon: <BiRightArrowAlt size={25} />,
                link: "",
              },
            ],
            // if edit is false
            loggedOutActions: [
              {
                label: "Log in",
                type: "Button",
                icon: <BiRightArrowAlt size={25} />,
                link: "",
              },
              {
                label: "Home Page",
                type: "Button",
                icon: <BiRightArrowAlt size={25} />,
                link: "/",
              },
            ],
            edit
        }}
      />
    </Container>

    // <div className="flex-1 bg-white dark:bg-gray-900 dark:from-gray-900 from-white to-white dark:to-gray-900">
    //   <div size="large">
    //     <h1 className="w-full relative	mb-10 text-4xl font-extrabold tracking-normal leading-tight title-font">
    //       Welcome to the Admin page
    //     </h1>
    //     {!edit && (
    //       <p className="mb-10 text-lg">
    //         Thanks for using{" "}
    //         <a
    //           className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-500 transition-all ease-out duration-150"
    //           href="https://tina.io"
    //         >
    //           TinaCMS!
    //         </a>{" "}
    //         Please login with Tina Cloud to be able to edit your site.
    //       </p>
    //     )}
    //     {edit && (
    //       <p className="mb-10 text-lg">
    //         OK, now that your are logged in, you can go to the home
    //         page and begin to make content changes.
    //       </p>
    //     )}
    //     <div className="flex flex-wrap items-center gap-y-6 gap-x-8">
    //       {edit && (
    //         <>
    //           <button
    //             className={`z-10 cursor-pointer relative flex items-center px-7 py-3 font-semibold text-lg transition duration-150 ease-out rounded transform focus:shadow-outline focus:outline-none
    //             `}
    //             onClick={() => {
    //               router.push("/");
    //             }}
    //           >
    //             <BiHomeAlt className={`mr-1.5 w-6 h-6 opacity-80`} /> Go to the
    //             home page
    //           </button>
    //           <button
    //             className={`z-10 cursor-pointer relative flex items-center px-7 py-3 font-semibold text-lg transition duration-150 ease-out rounded transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
    //             onClick={() => {
    //               router.back();
    //             }}
    //           >
    //             <BiArrowBack className={`mr-1.5 w-6 h-6 opacity-80`} /> Go Back
    //           </button>
    //           <a
    //             className={`group inline-flex items-center font-semibold text-lg transition duration-150 ease-out `}
    //             onClick={() => {
    //               setEdit(!edit);
    //             }}
    //             href=""
    //           >
    //             <BiLogOut className={`mr-2.5 ml-1 w-6 h-6 opacity-80`} /> Logout
    //             of Tina Cloud
    //           </a>
    //         </>
    //       )}
    //       {!edit && (
    //         <>
    //           <button
    //             className={`z-10 cursor-pointer relative flex items-center px-7 py-3 font-semibold text-lg transition duration-150 ease-out  rounded transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
    //             onClick={() => {
    //               setEdit(!edit);
    //             }}
    //           >
    //             <BiLogIn className={`mr-1.5 w-6 h-6 opacity-80`} /> Login with
    //             Tina Cloud
    //           </button>
    //           <button
    //             className={`group inline-flex items-center font-semibold text-lg transition duration-150 ease-out`}
    //             onClick={() => {
    //               router.push("/");
    //             }}
    //           >
    //             <BiHomeAlt className={`mr-1.5 w-6 h-6 opacity-80`} /> Go to the
    //             home page
    //           </button>
    //           <button
    //             className={`group inline-flex items-center font-semibold text-lg transition duration-150 ease-out`}
    //             onClick={() => {
    //               router.back();
    //             }}
    //           >
    //             <BiArrowBack className={`mr-1.5 w-6 h-6 opacity-80`} /> Go Back
    //           </button>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default GoToEditPage;