import {createSlice} from '@reduxjs/toolkit'

const fetchFromLoacalStorage = () => {
    const card = localStorage.getItem('card')
    if (card) {
        return JSON.parse(card)
    } else {
        return []
    }
}
const storeIntoLocalStorage = (data) => {
    localStorage.setItem('card', JSON.stringify(data))
}

const initialState = {
    cards: fetchFromLoacalStorage(),
    itemCount: 0,
    totalAmount: 0
}
export const getCard = (state) => {
    return state.card.card
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addToCard(state, action) {
          const isItemCard = state.cards.find((item) => item.id === action.payload.id)
          if (isItemCard) {
            const tempCard = state.cards.map((item) => {
                if (item.id === action.payload.id) {
                   let tempQty = item.quantity + action.payload.quantity;
                   let tempTotalPrice =tempQty+ item.price 
                    return {...item, quantity: tempQty, totalPrice: tempTotalPrice}
                } else {
                    return item
                }
            })
            state.cards = tempCard
            storeIntoLocalStorage(state.cards)
          } else {
            state.cards.push(action.payload)
            storeIntoLocalStorage(state.cards)
          }
           
        },
        removeFromCard:(state, action) =>{
            const tempCard = state.cards.filter((item) => item.id !== action.payload)
            state.cards = tempCard
            storeIntoLocalStorage(state.cards)
        },
        clearCard:(state) =>{
            state.cards = []
            storeIntoLocalStorage(state.cards)
        },
        getCardTotal:(state) =>{
           state.totalAmount=state.cards.reduce((acc, item) => {
           return acc += item.price*item.quantity
        }, 0)
        state.itemCount=state.cards.length
        }
    }
})
export const {addToCard, removeFromCard, clearCard, getCardTotal} = cardSlice.actions
export default cardSlice.reducer
