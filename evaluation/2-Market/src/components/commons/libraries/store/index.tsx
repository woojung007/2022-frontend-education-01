import { atom, selector } from "recoil";
import { getAccessToken } from "../getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});


export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
    userPoint:{
      amount:""
    }
  },
});


export const basketItemsState = atom({
  key: "basketItemsState",
  default: []
})

export const isToday = atom({
  key: "isToday",
  default: true
})


export const restoreAccessTokenLoadable = selector({
  key:"restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken()
    return newAccessToken
  }
})
