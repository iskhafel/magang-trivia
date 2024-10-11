import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "flowbite-react";

export default function Quiz() {
  const [soal, setSoal] = useState([]);
  const [soalAktif, setSoalAktif] = useState(0);
  const [pilihan, setPilihan] = useState(null);
  const [hasil, setHasil] = useState({
    jumlahJawab: 0,
    jumlahBenar: 0,
    jumlahSalah: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("quizState"));
    if (savedState) {
      setSoal(savedState.soal);
      setSoalAktif(savedState.soalAktif);
      setHasil(savedState.hasil);
      setTimer(savedState.timer);
      setShowResult(savedState.showResult);
    } else {
      axios
        .get("https://opentdb.com/api.php?amount=10")
        .then((response) => {
          const formatSoal = response.data.results.map((data) => ({
            pertanyaan: data.question,
            jawabanBenar: data.correct_answer,
            pilihanJawaban: [
              ...data.incorrect_answers,
              data.correct_answer,
            ].sort(() => Math.random() - 0.5),
          }));
          setSoal(formatSoal);
        })
        .catch((error) => {
          console.error("Gagal mengambil data: ", error);
        });
    }
  }, []);

  useEffect(() => {
    if (soal.length > 0) {
      const quizState = {
        soal,
        soalAktif,
        hasil,
        timer,
        showResult,
      };
      localStorage.setItem("quizState", JSON.stringify(quizState));
    }
  }, [soal, soalAktif, hasil, timer, showResult]);

  useEffect(() => {
    if (timer === 0) {
      setShowResult(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const handleAnswer = (jawaban, index) => {
    const benar = jawaban === soal[soalAktif].jawabanBenar;
    setHasil((prev) => ({
      jumlahJawab: prev.jumlahJawab + 1,
      jumlahBenar: prev.jumlahBenar + (benar ? 1 : 0),
      jumlahSalah: prev.jumlahSalah + (!benar ? 1 : 0),
    }));
    setPilihan(index);

    setTimeout(() => {
      if (soalAktif < soal.length - 1) {
        setSoalAktif((prev) => prev + 1);
      } else {
        setShowResult(true);
      }
      setPilihan(null);
    }, 500);
  };

  const handleRestart = () => {
    localStorage.removeItem("quizState");
    navigate("/");
  };

  if (soal.length === 0) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-36 p-5 bg-white shadow-lg rounded-lg">
      {!showResult ? (
        <div>
          <div className="mb-4 flex justify-between">
            <div>
              <span className="text-xl font-bold">{soalAktif + 1}</span>
              <span className="text-gray-500">/{soal.length}</span>
            </div>
            <span className="text-gray-600">Timer: {timer}s</span>
          </div>
          <h2
            className="text-xl font-semibold mb-5"
            dangerouslySetInnerHTML={{
              __html: soal[soalAktif].pertanyaan,
            }}
          />
          <ul className="gap-4">
            {soal[soalAktif].pilihanJawaban.map((jawaban, index) => (
              <li
                key={jawaban}
                onClick={() => handleAnswer(jawaban, index)}
                className={`p-4 border rounded-lg cursor-pointer hover:bg-blue-100 transition ${
                  pilihan === index ? "bg-blue-200 border-blue-500" : "bg-white"
                }`}
              >
                <span dangerouslySetInnerHTML={{ __html: jawaban }} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-5">Hasil</h3>
          <p className="text-lg">
            Total Soal: <span className="font-semibold">{soal.length}</span>
          </p>
          <p className="text-lg py-2">
            Jumlah yang dijawab:{" "}
            <span className="font-semibold">{hasil.jumlahJawab}</span>
          </p>
          <p className="text-lg">
            Jumlah benar:{" "}
            <span className="font-semibold">{hasil.jumlahBenar}</span>
          </p>
          <p className="text-lg">
            Jumlah salah:{" "}
            <span className="font-semibold">{hasil.jumlahSalah}</span>
          </p>

          <Button
            className="mt-5 mx-auto"
            color="success"
            onClick={handleRestart}
          >
            Kembali ke HomePage
          </Button>
        </div>
      )}
    </div>
  );
}
