const {createStore , bindActionCreators} = require("redux");
console.log(require("redux"));
//const {bindActionCreators} = require("redux);
const PIZZAS        = ['Cheeze','Chicken','Corn','Veg'];
const reducer       = (state,action)=>{
		if(action.type ==="BUY_PIZZA"){
			let pizzaToBuy = "Cheeze";
			return state.filter(pizza => (pizza!=pizzaToBuy));
		}
	    if(action.type === "ADD_PIZZA"){
			let newPizza = "Mango";
			return [newPizza,...state];
		}
	    if(action.type === "REMOVE_PIZZA"){
			
			let pizzaToRemove = 'Corn';
			return state.filter(pizza => (pizza!==pizzaToRemove));
		}
		return state;
	 
}

const buyPizza = pizza => ({type:"BUY_PIZZA"});
const addPizza = pizza => ({type:"ADD_PIZZA"});


var pizzaStore      = createStore(reducer,PIZZAS);

console.log("Pizzas in Store =>"+pizzaStore.getState());
//pizzaStore.dispatch({type:'BUY_PIZZA'});
const actions = bindActionCreators({buyPizza,addPizza},pizzaStore.dispatch);
console.log("actions =>",actions);
console.log("After Buying Pizza from Pizza Store --> " + pizzaStore.getState());
actions.buyPizza();
actions.addPizza();
//pizzaStore.dispatch({type:'ADD_PIZZA'});

console.log("After Adding Pizza To Pizza Store --> " + pizzaStore.getState());


pizzaStore.dispatch({type:'REMOVE_PIZZA'});
console.log("After Removing Pizza from Pizza Store --> " + pizzaStore.getState());