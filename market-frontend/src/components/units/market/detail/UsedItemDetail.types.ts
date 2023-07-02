import { MouseEvent } from 'react';



// presenter
export interface IUsedItemDetailUI {
  data?: any;
  moveToList: () => void
  onClickPay:(event:MouseEvent<HTMLButtonElement>) => void
  moveToEdit: () => void
  onClickDelete: () => void
  onClickPick: (event:MouseEvent<HTMLButtonElement>) => void
}
