# 🏁 Apex Karting Championship

A modern karting championship tracking website built with **Astro** and **Tailwind CSS**, featuring an F1-inspired design.

## Features

- 🏆 **Championship Standings** - Track driver and team rankings with real-time points
- 👤 **Driver Profiles** - Detailed statistics including wins, poles, podiums, and race history
- 👥 **Team Management** - View teams with their drivers and accumulated points
- 🏁 **Race Calendar** - Browse all races with circuit information
- 📊 **Race Results** - Detailed results for each completed race
- ⚙️ **Admin Panel** - Add and update race results (demo mode)

## Tech Stack

- **Astro** - Static site generation with server-side rendering (SSR)
- **@astrojs/node** - Node.js adapter for SSR and API routes
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type safety
- **JSON** - Data storage for drivers, teams, circuits, races, and results

## Data Structure

All data is stored in JSON files located in `/public/data/`:

- `drivers.json` - Driver information (name, number, team, nationality)
- `teams.json` - Team data (name, color, logo)
- `circuits.json` - Circuit details (name, location, length, turns)
- `races.json` - Race schedule (name, circuit, date, status)
- `results.json` - Race results (position, points, fastest lap, pole)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |

## 🚀 Project Structure

```
apex-karting/
├── public/
│   └── data/              # JSON data files
│       ├── drivers.json
│       ├── teams.json
│       ├── circuits.json
│       ├── races.json
│       └── results.json
├── src/
│   ├── layouts/
│   │   └── Layout.astro   # Main layout with navigation
│   ├── pages/
│   │   ├── index.astro    # Home page
│   │   ├── standings.astro # Championship standings
│   │   ├── admin.astro    # Admin panel
│   │   ├── drivers/
│   │   │   ├── index.astro
│   │   │   └── [id].astro
│   │   ├── teams/
│   │   │   ├── index.astro
│   │   │   └── [id].astro
│   │   └── races/
│   │       ├── index.astro
│   │       └── [id].astro
│   └── styles/
│       └── global.css     # Tailwind CSS
└── package.json
```

## Adding Data

### Add a Driver

Edit `public/data/drivers.json`:

```json
{
  "id": 7,
  "name": "Driver Name",
  "number": 99,
  "teamId": 1,
  "nationality": "ESP",
  "image": "/images/drivers/driver.jpg"
}
```

### Add a Team

Edit `public/data/teams.json`:

```json
{
  "id": 4,
  "name": "Team Name",
  "color": "#FF0000",
  "logo": "/images/teams/team.png"
}
```

### Add a Race Result

Use the Admin Panel at `/admin` or edit `public/data/results.json`:

```json
{
  "raceId": 1,
  "driverId": 1,
  "position": 1,
  "points": 25,
  "fastestLap": "1:23.456",
  "pole": true
}
```

## Points System

The default F1 points system is used:

- 1st: 25 points
- 2nd: 18 points
- 3rd: 15 points
- 4th: 12 points
- 5th: 10 points
- 6th: 8 points
- 7th: 6 points
- 8th: 4 points
- 9th: 2 points
- 10th: 1 point

## Admin Panel

The admin panel (`/admin`) allows you to:

- Select a race
- Select a driver
- Enter position, points, fastest lap
- Mark pole position
- View current results for any race

**Note:** Changes in the admin panel are demo-only and not persisted to the JSON files. To persist changes, you need to manually update the JSON files or implement a backend API.

## Design

The site features an F1-inspired dark theme with:

- **Primary Colors:** Red (#DC0000, #EF4444) and dark zinc tones
- **Typography:** Bold, racing-style fonts with uppercase headers
- **Layout:** Clean, data-focused tables and cards
- **Animations:** Smooth hover transitions and color changes

---

Built with ❤️ for karting enthusiasts
