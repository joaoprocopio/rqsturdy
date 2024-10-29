import { httpClient } from "~/services/clients/http"

async function listMembers() {
  const response = await httpClient.get("/")

  return response.data
}

export const DashboardServices = {
  listMembers,
}
