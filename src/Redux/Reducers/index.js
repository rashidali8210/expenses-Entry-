const initial =  {
 
    title: '',
    amount: "",
    note:"",
    date: "",
  
}
 
const index=
    (state=initial,action) =>
{
    switch(action.type){
       
      
        case "SET_INPUT_TITLE": {
            const { title } = action;
        
            return {
                ...state,
                title,
                
            }
        }
        case "SET_INPUT_AMOUNT": {
            const { amount} = action;
            return {
              ...state,
              amount,
            }
          }
          
          
        case "SET_INPUT_NOTE": {
            const { note} = action;
            return {
              ...state,
              note,
            }
          }
          case "SET_INPUT_DATE": {
            const { date} = action;
            return {
              ...state,
              date,
            }
          }
          case "RESET_INPUT": {
            return initial;
          }
          
     default: return state;

    
}}
export default index;
