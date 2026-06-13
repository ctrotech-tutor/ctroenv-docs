import { getSearchData } from "@/lib/search-data"

export async function GET() {
  return Response.json(getSearchData())
}
