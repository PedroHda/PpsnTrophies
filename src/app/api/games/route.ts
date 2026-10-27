import {NextResponse} from 'next/server'
import {getGames} from '../../../features/games/games.service'
import {createSuccessResponse} from '../../../lib/api-response'

export function GET(){
    const games = getGames()
    return NextResponse.json(createSuccessResponse(games), {status: 200})
}