"use server"

// import { client } from "@/sanity/lib/client";
import { auth, currentUser } from "@clerk/nextjs/server"
// import { use } from "react";

export const clerkGetUser = async () => {
   const {userId} = await auth();
  const user=await currentUser();

  const userName = `${user?.firstName} ${user?.lastName}`;
    const email = user?.externalAccounts[0].emailAddress;
    const image = user?.imageUrl;
     return{
        userName,
        email,
        image,
        userId
     };
}

export async function sanityUserPost(){
  // const user = await clerkGetUser()
  // const userObject={
  //   _type:"user",
  //   _id: `user-${user.userId}`,
  //   name:user.userName,
  //   email:user.email,
  //   image:user.image
  // }
  // const res = client.createOrReplace(userObject)
}