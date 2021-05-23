const initialState=0;
const dark=(state=initialState,action)=>
{
    {
        switch(action.type){
            case "INCREMENTDARK": return state+1;
            case "DECREMENTDARK": return state===0?0:state-1;
            default: return state;

        }
    }
}
export default  dark;