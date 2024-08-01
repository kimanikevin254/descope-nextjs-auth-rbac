"use client";

import { Descope } from "@descope/nextjs-sdk";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
   const router = useRouter();

   // Register user or redirect to home
   const handleEvent = async (event) => {
       try {
           if (event.detail.firstSeen !== true) {
               return router.replace("/");
           }

           // Register the user
           const { data } = await axios.post("/api/register", {
               descopeUserId: event.detail.user.userId,
               email: event.detail.user.email,
               name: event.detail.user.name,
           });

           if (data.error) {
               alert("Something went wrong");
           } else {
               return router.replace("/");
           }
       } catch (error) {
           console.log(error);
       }
   };
   return (
       <Descope
           flowId="sign-up-or-in"
           onSuccess={(e) => handleEvent(e)}
           onError={(e) => alert("Something went wrong. Please try again.")}
       />
   );
}