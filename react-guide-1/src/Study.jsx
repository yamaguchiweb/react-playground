import { useState } from "react";
import { InputStudyText } from "./components/InputStudyText";
import { InputStudyTime } from "./components/InputStudyTime";
import { InStudyRecords } from "./components/InStudyRecords";
import { TotalHours } from "./components/TotalHours";

export const Study = () => {
  const [studyText, setStudyText] = useState("");
  const [studyTime, setStudyTime] = useState("");

  const [inStudyTextes, setInStudyTextes] = useState([]);
  const [inStudyTimes, setInStudyTimes] = useState([]);

  const [isError, setIsError] = useState(false);

  // Reactでinput要素に入力があったら、すぐにレンダリングを行うための関数
  const onChangeStudyText = (e) => setStudyText(e.target.value);
  const onChangeStudyTime = (e) => setStudyTime(e.target.value);

  const onClickSum = () => {
    if (studyText === "" || studyTime === "") {
      setIsError(true);
      return;
    }

    setIsError(false);

    setInStudyTextes([...inStudyTextes, studyText]);
    const newStudyTimes = Number(studyTime);
    setInStudyTimes([...inStudyTimes, newStudyTimes]);
    const totalHours = [...inStudyTimes, newStudyTimes].reduce((acc, time) => acc + time, 0);

    setStudyText("");
    setStudyTime("");

    return `合計時間：${totalHours}/1000(h)`;
  };

  const totalHours = inStudyTimes.reduce((acc, time) => acc + time, 0);

  return (
    <>
      <InputStudyText studyText={studyText} onChange={onChangeStudyText} />
      <InputStudyTime studyTime={studyTime} onChange={onChangeStudyTime} />

      <InStudyRecords studyRecords={inStudyTextes.map((text, index) => ({ text, time: inStudyTimes[index] }))} />

      <button onClick={onClickSum}>登録</button>

      {isError && (
        <p id="errorText" className="errorText">
          入力されていない項目があります
        </p>
      )}
      <TotalHours totalHours={totalHours} />
    </>
  );
};
