const INITIAL_STATE = {
        temperature: 0,
        humidity: 0,
        time: ''
};

export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
                case 'GET_TEMP_HUMIDITY':
                        console.log(action.payload);
                        return {
                                ...state,
                                temperature: action.payload.temperature,
                                humidity: action.payload.humidity,
                                time: action.payload.date
                        };
                // case GET_POSTS:
                //         console.log(action.payload);
                //         return { ...state, postList: action.payload };
                // case CREATE_POST:
                //         console.log(action.payload);
                //         return {
                //                 ...state,
                //                 postList: [...state.postList, action.payload],
                //                 imageToPost: {
                //                         postId: action.payload.post.id,
                //                         mediaPath: action.payload.post.smallMediaPaths[0]
                //                 }
                //         };
                default:
                        return state;
        }
};
