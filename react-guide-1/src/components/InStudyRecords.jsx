export const InStudyRecords = (props) => {
  const { studyRecords } = props;
  return (
    <>
      <p className="sectionTitle">入力されている学習記録</p>
      <ul className="studyRecordsList">
        {studyRecords.map((record, index) => (
          <li key={index}>
            <p>学習内容：{record.text}</p>
            <p>学習時間：{record.time}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
