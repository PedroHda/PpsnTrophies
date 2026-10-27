import {NextResponse} from 'next/server'
import {createSuccessResponse} from '../../../lib/api-response'

export function GET() {
    const health = {
        status: 'ok',
        service: 'api-tracker',
    }

    return NextResponse.json(createSuccessResponse(health), {status: 200})
}