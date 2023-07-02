import * as s from "./Pagination.styles";
import { IPaginationUI } from "./Pagination.types";

export default function PaginationUI(props: IPaginationUI) {
  return (
    <s.BodyHTML>
      <s.PagesWrapper>
        <s.PrevButton
          disabled={props.startPage === 1}
          onClick={props.onClickPrevPage}
        />

        {`      `}
        {new Array(10).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <s.Pages
                style={{
                  color:
                    props.current === index + props.startPage
                      ? "crimson"
                      : "black",
                }}
                key={index + props.startPage}
                id={String(index + props.startPage)}
                onClick={props.onClickPage}
              >
                {`      `}
                {index + props.startPage}
              </s.Pages>
            )
        )}
        {`      `}

        <s.NextButton
          disabled={!(props.startPage + 10 <= props.lastPage)}
          onClick={props.onClickNextPage}
        />
      </s.PagesWrapper>
    </s.BodyHTML>
  );
}
