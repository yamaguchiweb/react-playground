export const TotalHours = (props) => {
  const { totalHours } = props;
  return (
    <p id="totalHours" className="totalHours">
      合計時間：{totalHours}/1000(h)
    </p>
  );
};
