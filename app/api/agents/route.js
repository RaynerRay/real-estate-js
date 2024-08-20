import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    /*
    profileImageUrl 
  firstName       
  lastName        
  email           
  phone           
  code 
  bio           
  isActive       
  properties      
  services        
  companyName     
  companyPhone   
  companyAddress 
      userId */
    // Update the Verification in the user
    const agentData = await request.json();
    //Check if the user Already exists in the db
    const existingUser = await db.user.findUnique({
      where: {
        id: agentData.userId,
      },
    });
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: `No User Found`,
        },
        { status: 404 }
      );
    }
    //Update emailVerified
    const updatedUser = await db.user.update({
      where: {
        id: agentData.userId,
      },
      data: {
        emailVerified: true,
      },
    });
    const newAgentProfile = await db.AgentProfile.create({
      data: {
        code: agentData.code,
        companyName: agentData.companyName,
        companyPhone: agentData.companyPhone,
        profileImageUrl: agentData.profileImageUrl,
        bio: agentData.bio,
        email: agentData.email,
        firstName: agentData.firstName,
        lastName: agentData.lastName,
        phone: agentData.phone,
        companyAddress: agentData.companyAddress,
        services: agentData.services,
      
        userId: agentData.userId,   
      },
    });
    console.log(newAgentProfile);
    return NextResponse.json(newAgentProfile);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Agent",
        error,
      },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const agents = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        role: "AGENT",
      },
      include: {
        agentProfile: true,
      },
    });
    return NextResponse.json(agents);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Agents",
        error,
      },
      { status: 500 }
    );
  }
}
