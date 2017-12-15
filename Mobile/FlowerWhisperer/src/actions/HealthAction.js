import HealthApi from '../api/HealthApi';

export const getTemperatureAndHumidity = () =>
        async (dispatch) => {
                const response = await HealthApi.getTemperatureAndHumidity();
                console.log(response);
                await dispatch({ type: 'GET_TEMP_HUMIDITY', payload: response });
        };

