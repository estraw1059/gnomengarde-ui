import { NextResponse } from "../../../../node_modules/next/server";
//Request that gathers params and echos back
export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const names = searchParams.get('name');
    const instrument = searchParams.get('instrument');

    return NextResponse.json({names, instrument});
}