import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Team from "@/models/Team";

export async function GET() {
  try {
    await connectDB();
    const team = await Team.find({}).sort({ order: 1, createdAt: -1 });
    return NextResponse.json(team);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch team members" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectDB();

    const teamMember = await Team.create(body);
    return NextResponse.json(teamMember, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create team member" },
      { status: 500 }
    );
  }
}
