export const InputStudyTime = (props) => {
  const { studyTime, onChange } = props;
  return (
    <p>
      学習時間
      <input type="number" placeholder="0" value={studyTime} onChange={onChange} />
    </p>
  );
};
