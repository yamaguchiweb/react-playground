export const InStudyRecords = (props) => {
  const { studyRecords } = props;
  return (
    <>
      <p>入力されている学習記録：</p>
      <ul>
        {studyRecords.map((record, index) => (
          <li key={index}>
            <p>入力されている学習内容：{record.text}</p>
            <p>入力されている学習時間：{record.time}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
