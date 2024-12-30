export const loginApi = async (userName: string) => {
    const response = await fetch('/api/user/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ userName }),
    })
    return response
}