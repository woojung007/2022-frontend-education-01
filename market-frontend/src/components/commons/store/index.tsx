import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const isEditState = atom({
  key: "isEditState",
  default: true,
});


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


export const visitedPageState = atom({
  key: "visitedPageState",
  default:"/"
})

export const basketItemsState = atom({
  key: "basketItemsState",
  default: []
})

export const isToday = atom({
  key: "isToday",
  default: true
})


// 글로벌 함수
export const restoreAccessTokenLoadable = selector({
  key:"restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken()
    return newAccessToken
  }
})
