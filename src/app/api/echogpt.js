import axios from 'axios';

const API_URL = 'https://api.echogpt.live/v1/chat/completions';
const API_KEY = process.env.NEXT_PUBLIC_ECHOGPT_API_KEY;

export const fetchChatResponse = async (messages) => {
    try {
        const response = await axios.post(
            API_URL,
            {
               "model": "EchoGPT", 
                messages: [{ role: 'system', content: 'You are a helpful assistant.' }]
            },
            {
                headers: {
                    "x-api-key": API_KEY,
                    "Content-Type": "application/json"
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error fetching chat response:", error.response?.data || error.message);
        throw error;
    }
};