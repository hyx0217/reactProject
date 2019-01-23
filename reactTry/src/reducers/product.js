const states={
    list:{
        rows:[],
        total:0
    }
}
export default function reducer(state=states,action){
    switch(action.type){
            case 'GETLISTDATA':
            return {...state,list:action.payload}
            default:
            return state
    }
}