export async function fetchGitHubStats(username) {
  
  // USER DATA
  const userRes = await fetch(`https://api.github.com/users/${username}`)
  const userData = await userRes.json()

  // REPOSITORIES
  const repoRes = await fetch(userData.repos_url + "?per_page=100")
  const repos = await repoRes.json()

  const stars = repos.reduce(
    (total, repo) => total + repo.stargazers_count,
    0
  )

  // EVENTS - multiple pages fetch karo (max 3 pages, 300 events)
  let allEvents = []
  for (let page = 1; page <= 3; page++) {
    const eventsRes = await fetch(
      `https://api.github.com/users/${username}/events?per_page=100&page=${page}`
    )
    const events = await eventsRes.json()
    if (!Array.isArray(events) || events.length === 0) break
    allEvents = [...allEvents, ...events]
  }

  // Commit dates extract karo (YYYY-MM-DD format, UTC)
  const commitDateStrings = allEvents
    .filter(e => e.type === "PushEvent")
    .map(e => new Date(e.created_at).toISOString().split("T")[0])

  // Unique days, latest first sort karo
  const uniqueDays = [...new Set(commitDateStrings)].sort((a, b) =>
    new Date(b) - new Date(a)
  )

  // Streak calculate karo
  let streak = 0
  const today = new Date().toISOString().split("T")[0]
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0]

  // Streak sirf tab count hoga jab aaj ya kal commit hua ho
  if (uniqueDays.length > 0 && (uniqueDays[0] === today || uniqueDays[0] === yesterday)) {
    for (let i = 0; i < uniqueDays.length; i++) {
      const expected = new Date(Date.now() - i * 86400000)
        .toISOString()
        .split("T")[0]

      // Aaj se shuru karo, agar gap hai toh break
      const startFrom = uniqueDays[0] === today ? today : yesterday
      const expectedFromStart = new Date(
        new Date(startFrom) - i * 86400000
      ).toISOString().split("T")[0]

      if (uniqueDays[i] === expectedFromStart) {
        streak++
      } else {
        break
      }
    }
  }

  return {
    repos: userData.public_repos,
    followers: userData.followers,   
    stars,
    streak                           
  }
}