import {NextResponse} from 'next/server'

import type {Player} from '../../../types/player'
import {createSuccessResponse} from '../../../lib/api-response'


const player: Player = {
  accountId: "123456789",
  onlineId: "PedroGamer",
  avatarUrl: null,
  trophyLevel: 285,

  trophies: {
    bronze: 1250,
    silver: 480,
    gold: 120,
    platinum: 35,
  },
};

export function GET(){
    return NextResponse.json(createSuccessResponse(player), {status: 200})
}