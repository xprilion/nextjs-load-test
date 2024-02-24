export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const senderTimestamp = searchParams.get('senderTimestamp')
    
    let requestReceivedTimestamp;
    if (senderTimestamp) {
        // Parse senderTimestamp to get its timezone offset in minutes
        const senderDate = new Date(senderTimestamp);
        const timezoneOffset = senderDate.getTimezoneOffset();
        
        // Create a new Date object for the current time
        const now = new Date();
        
        // Adjust the current time by the sender's timezone offset
        // Note: getTimezoneOffset returns the difference in minutes, so convert it to milliseconds
        const adjustedTimestamp = new Date(now.getTime() - (timezoneOffset * 60000));
        
        // Convert to ISO string format
        requestReceivedTimestamp = adjustedTimestamp.toISOString();
    } else {
        // If senderTimestamp is not provided or invalid, default to UTC
        requestReceivedTimestamp = new Date().toISOString();
    }
    
    return new Response(JSON.stringify({
        senderTimestamp,
        requestReceivedTimestamp
    }), { headers: { 'Content-Type': 'application/json' } });
}
