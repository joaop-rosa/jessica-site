import s from "./workList.module.css";
import cn from "classnames";

export function WorkList({ list }) {
  const INDEX_CORRECTOR = 1;
  const isOdd = (number) => {
    return number % 2 != 0;
  };

  function renderIcon(Icon, index) {
    return (
      <Icon
        className={cn(s.icon, {
          [s.isGolden]: isOdd(index + INDEX_CORRECTOR),
          [s.isWhite]: !isOdd(index + INDEX_CORRECTOR),
        })}
      />
    );
  }

  return (
    <div className={s.workListWrapper}>
      {list.map((work, index) => {
        const { Icon, description } = work;
        return (
          <div
            className={cn(s.workWrapper, {
              [s.isGolden]: isOdd(index + INDEX_CORRECTOR),
              [s.isWhite]: !isOdd(index + INDEX_CORRECTOR),
              [s.isReverse]: !isOdd(index + INDEX_CORRECTOR),
            })}
          >
            {isOdd(index + INDEX_CORRECTOR) ? renderIcon(Icon, index) : null}
            <p>{description}</p>
            {!isOdd(index + INDEX_CORRECTOR) ? renderIcon(Icon, index) : null}
          </div>
        );
      })}
    </div>
  );
}
