const initialState=0;
const five_star=(state=initialState,action)=>
{
    {
        switch(action.type){
            case "INCREMENTFIVE": return state+1;
            case "DECREMENTFIVE": return state===0?0:state-1;
            default: return state;

        }
    }
}
export default five_star;