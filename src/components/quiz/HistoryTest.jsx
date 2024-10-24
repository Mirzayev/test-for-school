
import { useState, useEffect } from 'react';
import { Button, Radio, Progress } from 'antd';

const HistoryTest = (props) => {
    const questions = [
        { id: 1, question: "Butunrossiya harbiy sho‘rosini ta’sis etish to‘g‘risidagi qarorlar qabul qilingan qurultoy qayerda bo‘lib o‘tgan.", options: ["Petrograd", "Toshkent", "Qozon", "Moskva" ], correctAnswer: "Toshkent" },
        {id:2, question: "Demokratik Rossiya Federatsiyasini tuzish g‘oyasi nechanchi yilda bo‘lib o‘tgan qurultoyda ilgari surilgan?", options: ["1917-yil aprel", "1917-yil may", "1917-yil sentabr", "1917-yil iyul"], correctAnswer:"1917-yil sentabr" },
        {id:3, question: "Mesopotamiyada qanday xo‘jalik uchun zarur materiallar bo‘lmagan?", options: ["yog‘och, mehnat qurollari", "metal, don", "metall yog'och", "yog'och chorva"], correctAnswer: "yog'och chorva"},
        {id: 4, question : "Yunon-rim mualliflari tomonidan Baqtriana yoki Baqtriya deb atagan yerlarga hozirgi qaysi hududlar to‘g‘ri keladi? 1) Surxon vohasi  2) Turkmanistoning shimoli 3) Zarafshon vohasi 4) Tojikiston shimoli 5) Afg‘onistonning shimoli 6) Tojikistonning janubi", options: ["1,2,6", "1,3,5"," 1,2,3", "Hamma javoblar to'g'ri"], correctAnswer: "1,2,3"},
        { id: 5, question: "Butunrossiya harbiy sho‘rosini ta’sis etish to‘g‘risidagi qarorlar qabul qilingan qurultoy qayerda bo‘lib o‘tgan.", options: ["Petrograd", "Toshkent", "Qozon", "Moskva" ], correctAnswer: "Toshkent" },
        {id:6, question: "Demokratik Rossiya Federatsiyasini tuzish g‘oyasi nechanchi yilda bo‘lib o‘tgan qurultoyda ilgari surilgan?", options: ["1917-yil aprel", "1917-yil may", "1917-yil sentabr", "1917-yil iyul"], correctAnswer:"1917-yil sentabr" },
        {id:8 , question : "Yunon-rim mualliflari tomonidan Baqtriana yoki Baqtriya deb atagan yerlarga hozirgi qaysi hududlar to‘g‘ri keladi? 1) Surxon vohasi  2) Turkmanistoning shimoli 3) Zarafshon vohasi 4) Tojikiston shimoli 5) Afg‘onistonning shimoli 6) Tojikistonning janubi", options: ["1,2,6", "1,3,5"," 1,2,3", "Hamma javoblar to'g'ri"], correctAnswer: "1,2,3"},
        {id: 9, question : "Yunon-rim mualliflari tomonidan Baqtriana yoki Baqtriya deb atagan yerlarga hozirgi qaysi hududlar to‘g‘ri keladi? 1) Surxon vohasi  2) Turkmanistoning shimoli 3) Zarafshon vohasi 4) Tojikiston shimoli 5) Afg‘onistonning shimoli 6) Tojikistonning janubi", options: ["1,2,6", "1,3,5"," 1,2,3", "Hamma javoblar to'g'ri"], correctAnswer: "1,2,3"},
        {id:10 , question : "Yunon-rim mualliflari tomonidan Baqtriana yoki Baqtriya deb atagan yerlarga hozirgi qaysi hududlar to‘g‘ri keladi? 1) Surxon vohasi  2) Turkmanistoning shimoli 3) Zarafshon vohasi 4) Tojikiston shimoli 5) Afg‘onistonning shimoli 6) Tojikistonning janubi", options: ["1,2,6", "1,3,5"," 1,2,3", "Hamma javoblar to'g'ri"], correctAnswer: "1,2,3"},
        { id: 11, question: "Butunrossiya harbiy sho‘rosini ta’sis etish to‘g‘risidagi qarorlar qabul qilingan qurultoy qayerda bo‘lib o‘tgan.", options: ["Petrograd", "Toshkent", "Qozon", "Moskva" ], correctAnswer: "Toshkent" },
        {id: 12, question : "Yunon-rim mualliflari tomonidan Baqtriana yoki Baqtriya deb atagan yerlarga hozirgi qaysi hududlar to‘g‘ri keladi? 1) Surxon vohasi  2) Turkmanistoning shimoli 3) Zarafshon vohasi 4) Tojikiston shimoli 5) Afg‘onistonning shimoli 6) Tojikistonning janubi", options: ["1,2,6", "1,3,5"," 1,2,3", "Hamma javoblar to'g'ri"], correctAnswer: "1,2,3"},
        {id: 13, question : "Yunon-rim mualliflari tomonidan Baqtriana yoki Baqtriya deb atagan yerlarga hozirgi qaysi hududlar to‘g‘ri keladi? 1) Surxon vohasi  2) Turkmanistoning shimoli 3) Zarafshon vohasi 4) Tojikiston shimoli 5) Afg‘onistonning shimoli 6) Tojikistonning janubi", options: ["1,2,6", "1,3,5"," 1,2,3", "Hamma javoblar to'g'ri"], correctAnswer: "1,2,3"},
        {id:14, question : "Yunon-rim mualliflari tomonidan Baqtriana yoki Baqtriya deb atagan yerlarga hozirgi qaysi hududlar to‘g‘ri keladi? 1) Surxon vohasi  2) Turkmanistoning shimoli 3) Zarafshon vohasi 4) Tojikiston shimoli 5) Afg‘onistonning shimoli 6) Tojikistonning janubi", options: ["1,2,6", "1,3,5"," 1,2,3", "Hamma javoblar to'g'ri"], correctAnswer: "1,2,3"},
        {id:15 , question : "Yunon-rim mualliflari tomonidan Baqtriana yoki Baqtriya deb atagan yerlarga hozirgi qaysi hududlar to‘g‘ri keladi? 1) Surxon vohasi  2) Turkmanistoning shimoli 3) Zarafshon vohasi 4) Tojikiston shimoli 5) Afg‘onistonning shimoli 6) Tojikistonning janubi", options: ["1,2,6", "1,3,5"," 1,2,3", "Hamma javoblar to'g'ri"], correctAnswer: "1,2,3"},
      ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(props.testTime * 60);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [key, setKey] = useState(0)
   
    useEffect(() => {
        if (timeLeft > 0 && !submitted) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            handleSubmit();
        }
    }, [timeLeft, submitted]);

  function Restart() {
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setTimeLeft(props.testTime * 60);
      setSubmitted(false);
      setScore(0);
      setKey(prevKey => prevKey + 1)
  }


    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer,
        }));
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < props.testAmount - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        questions.forEach((t) => {
            if (selectedAnswers[t.id] === t.correctAnswer) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
        setSubmitted(true);
    };
    

    return (
        <div className='shadow-md px-4 lg:px-10 pb-[100px] border rounded-lg' style={{ maxWidth: '600px', margin: '0 auto', }}>
            <h2 className={'flex justify-center font-bold text-xl my-4'}>Test Solver</h2>
            <Progress percent={(100 * timeLeft) / (props.testTime * 60)} showInfo={false} />
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Time Left: {timeLeft} seconds</p>

            {!submitted ? (
                <>
                    <div className='mt-5 shadow' style={{ marginBottom: '20px',minHeight: '300px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
                        <h3>{questions[currentQuestionIndex].question}</h3>
                        <Radio.Group
                            onChange={(e) =>
                                handleAnswerChange(questions[currentQuestionIndex].id, e.target.value)
                            }
                            value={selectedAnswers[questions[currentQuestionIndex].id]}
                        >
                            {questions[currentQuestionIndex].options.map((option, index) => (
                                <Radio key={index} value={option}>
                                    {option}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </div>

                    <div className='flex justify-center gap-3'>
                        <Button type="primary" onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
                            Prev
                        </Button>
                        {currentQuestionIndex < props.testAmount - 1 ? (
                            <Button type="primary" onClick={handleNextQuestion}>
                                Next
                            </Button>
                        ) : (
                            <Button type="primary" onClick={handleSubmit}>
                                Finish
                            </Button>
                        )}
                    </div>
                    <div className='mt-5'>
                        <h2 className='flex justify-center font-bold'>Savollar soni {props.testAmount}</h2>
                        <h3 className='flex justify-center font-semibold'>Hozirgi savol: {currentQuestionIndex + 1}/{props.testAmount}</h3>
                    </div>
                </>
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <h3 className={'font-semibold text-lg my-2'}>Test Yakunlandi!</h3>
                    <h4 className='font-bold'>{score}/{props.testAmount}</h4>
                    <p className={'font-semibold text-lg '}>Sizning natijangiz:  {(score / props.testAmount) * 100}%</p>
                    <Button className='mt-4' onClick={Restart}>
                       Testni qayta ishlash
                       <i class="fa-solid fa-rotate-left"></i>
                    </Button>
                </div>
            )}
        </div>
    );
};

export default HistoryTest;
