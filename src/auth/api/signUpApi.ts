

export const signUpApi = async (userName: string) => {
    const response = await fetch('/api/user/create', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ userName }),
       
    })
    return response.json()
}