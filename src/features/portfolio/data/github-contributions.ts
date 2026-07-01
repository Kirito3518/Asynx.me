import type { Activity } from "@/components/kibo-ui/contribution-graph"
import { GITHUB_USERNAME } from "@/config/site"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

type GitHubContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE"

type GitHubContributionDay = {
  date: string
  contributionCount: number
  contributionLevel: GitHubContributionLevel
}

type GitHubGraphQLResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          weeks: {
            contributionDays: GitHubContributionDay[]
          }[]
        }
      }
    }
  }
  errors?: unknown[]
}

const GITHUB_CONTRIBUTIONS_API_URL =
  process.env.GITHUB_CONTRIBUTIONS_API_URL ||
  "https://github-contributions-api.jogruber.de"

const GITHUB_CONTRIBUTIONS_QUERY = `
  query GitHubContributions($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`

const CONTRIBUTION_LEVELS: Record<GitHubContributionLevel, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
}

function getContributionDateRange() {
  const to = new Date()
  const from = new Date(to)

  from.setUTCDate(from.getUTCDate() - 370)

  return {
    from: from.toISOString(),
    to: to.toISOString(),
  }
}

async function getGitHubContributionsFromGraphQL() {
  const token = process.env.GITHUB_API_TOKEN

  if (!token) {
    return null
  }

  const { from, to } = getContributionDateRange()
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    cache: "no-store",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "chanhdai.com",
    },
    body: JSON.stringify({
      query: GITHUB_CONTRIBUTIONS_QUERY,
      variables: {
        login: GITHUB_USERNAME,
        from,
        to,
      },
    }),
  })

  if (!res.ok) {
    return null
  }

  const data = (await res.json()) as GitHubGraphQLResponse

  if (data.errors?.length) {
    return null
  }

  const weeks =
    data.data?.user?.contributionsCollection?.contributionCalendar?.weeks

  if (!weeks) {
    return null
  }

  return weeks.flatMap((week) =>
    week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: CONTRIBUTION_LEVELS[day.contributionLevel],
    }))
  )
}

async function getGitHubContributionsFromPublicApi() {
  const baseUrl = GITHUB_CONTRIBUTIONS_API_URL.replace(/\/+$/, "")
  const res = await fetch(`${baseUrl}/v4/${GITHUB_USERNAME}?y=last`, {
    cache: "no-store",
  })

  if (!res.ok) {
    return []
  }

  const data = (await res.json()) as GitHubContributionsResponse

  return data.contributions || []
}

export async function getGitHubContributions() {
  try {
    const graphQLContributions = await getGitHubContributionsFromGraphQL()

    if (graphQLContributions) {
      return graphQLContributions
    }

    return await getGitHubContributionsFromPublicApi()
  } catch {
    return []
  }
}
