type THandleAlerts = (msg: any, type?: 'default' | 'info' | 'success' | 'warning' | 'error', timeMs?: number) => void;

interface IPlayer {
  profile: {
    account_id: number
    personaname: string
    name: any
    plus: any
    cheese: number
    steamid: string
    avatar: string
    avatarmedium: string
    avatarfull: string
    profileurl: string
    last_login: string
    loccountrycode: any
    status: any
    is_contributor: boolean
    is_subscriber: boolean
  }
  mmr_estimate: any
  solo_competitive_rank: any
  competitive_rank: any
  rank_tier: any
  leaderboard_rank: any
}