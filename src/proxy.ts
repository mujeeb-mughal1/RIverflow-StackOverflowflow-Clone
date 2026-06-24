import {NextResponse , NextRequest} from "next/server";
import getOrCreateDB from "./models/server/dbSetup"
import getOrCreateStorage from "./models/server/storageSetup"

export async function proxy(request: NextRequest){

    await Promise.all([
        getOrCreateDB(),
        getOrCreateStorage(),
    ])
    return NextResponse.next()
}

export const config = {
 /* macth all request paths expect fot the once that starts with:
 - api
 - _next/static
 - _next/image
 - favicon.com
 */

 matcher :[
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
 ],
}