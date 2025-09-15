async function Message(name, email, message) {
    try {
        const response = await fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        else{
        alert("Message sent successfully!"); // Alert on success
        }
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
}

export { Message };