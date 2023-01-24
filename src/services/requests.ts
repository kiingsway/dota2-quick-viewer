import axios from 'axios';

const openDotaHost = "https://api.opendota.com/api";

export function GetPlayer(playerId: string | number) {

  return axios({
    method: 'GET',
    url: `${openDotaHost}/players/${String(playerId)}`,
  });
}