export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const senderTimestamp = searchParams.get('senderTimestamp')
    const requestReceivedTimestamp = new Date().toISOString()
    
    return Response.json({
        senderTimestamp,
        requestReceivedTimestamp
    })
}