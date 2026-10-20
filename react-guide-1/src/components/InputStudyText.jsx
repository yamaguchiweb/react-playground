export const InputStudyText = (props) => {
  const { studyText, onChange } = props;
  return (
    <p className="inputText">
      学習内容
      <input placeholder="学習内容を入力" value={studyText} onChange={onChange} />
    </p>
  );
};
