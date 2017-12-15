const flowerUrl = 'http://flowerwhisperer.azurewebsites.net';

const fetchApi = (url, method, body) =>
        fetch(url, {
                method,
                headers: {
                        'Content-Type': 'application/json'
                },
                body
        });

class HealthApi {
        static async getTemperatureAndHumidity() {
                const api = '/tempHumidity';
                try {
                        const response = await fetchApi(
                                `${flowerUrl}${api}`,
                                'GET'
                        );
                        return await response.json();
                } catch (error) {
                        throw error;
                }
        }
}

export default HealthApi;
