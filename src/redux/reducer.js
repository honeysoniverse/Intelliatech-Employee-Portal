const initialstate = {
    islogin: false,
    errorMsg: "",
    errorFound: false,
    TOKEN: ""
}

function Reducer(state = initialstate, action) {

    
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                islogin: true,
                TOKEN: localStorage.getItem("token"),
                userdata: action.paylod

            }

        case "LOGIN_FAILURE":
           
        return {
                ...state,
                errorFound: true,
                errorMsg: action.paylod
            }
   default : return {state}
    }
}
export default Reducer;


