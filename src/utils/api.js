export async function fetchGitHubStats(username) {

  // USER DATA
  const userRes = await fetch(`https://api.github.com/users/${username}`)
  const userData = await userRes.json()

  // REPOSITORIES
  const repoRes = await fetch(userData.repos_url)
  const repos = await repoRes.json()

  const stars = repos.reduce(
    (total, repo) => total + repo.stargazers_count,
    0
  )

  // EVENTS (for streak)
  const eventsRes = await fetch(`https://api.github.com/users/${username}/events`)
  const events = await eventsRes.json()

  // Extract commit dates
  const commitDates = events
    .filter(e => e.type === "PushEvent")
    .map(e => new Date(e.created_at).toDateString())

  // Unique days
  const uniqueDays = [...new Set(commitDates)]

  // Calculate streak
  let streak = 0
  let currentDate = new Date()

  for (let i = 0; i < uniqueDays.length; i++) {
    const day = new Date(uniqueDays[i])
    const diff = Math.floor((currentDate - day) / (1000 * 60 * 60 * 24))

    if (diff === i) {
      streak++
    } else {
      break
    }
  }

  return {
    repos: userData.public_repos,
    followers: userData.followers,
    stars,
    streak
  }
}