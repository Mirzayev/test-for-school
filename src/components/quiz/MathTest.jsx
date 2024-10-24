import { useState, useEffect } from 'react';
import { Button, Radio, Progress } from 'antd';

const Test = (props) => {
    const questions = [
        { id: 1, question: "a va b natural sonlar uchun a · b = 30 bo‘lsa, a + 2b − 1 ifodaning eng kichik qiymatini toping.?", options: [16, 15, 12, 31], correctAnswer: 16 },
        { id: 2, question: "Hisoblang: 7, 2 (1) − 4, 4 (2) + 31/90", options: ["3.1(3)", "3.1(2)", "2.1(3)", "2.1(1)"], correctAnswer: "2.1(3)" },
        { id: 3, question: "Do‘kon 3 kunda jami 175 kg kartoshka sotdi. Agar ikkinchi kun uchinchi kunga nisbatan 1,5 marta ko‘p birinchi kun esa ikkinchi kunga nisbatan 2,4 marta kam kartoshka sotgan bo‘lsa, do‘kon birinchi kun necha kilogramm kartoshka sotgan?", options: [35, 44, 56, 27], correctAnswer: 56 },
        { id: 4, question: "What is 110 / 2", options: [50, 52, 51, 55], correctAnswer: 55 },
        { id: 5, question: "a va b natural sonlar uchun a · b = 30 bo‘lsa, a + 2b − 1 ifodaning eng kichik qiymatini toping.?", options: [16, 15, 12, 31], correctAnswer: 16 },
        { id: 6, question: "Hisoblang: 7, 2 (1) − 4, 4 (2) + 31/90", options: ["3.1(3)", "3.1(2)", "2.1(3)", "2.1(1)"], correctAnswer: "2.1(3)" },
        { id: 7, question: "Do‘kon 3 kunda jami 175 kg kartoshka sotdi. Agar ikkinchi kun uchinchi kunga nisbatan 1,5 marta ko‘p birinchi kun esa ikkinchi kunga nisbatan 2,4 marta kam kartoshka sotgan bo‘lsa, do‘kon birinchi kun necha kilogramm kartoshka sotgan?", options: [35, 44, 56, 27], correctAnswer: 56 },
        { id: 8, question: "What is 110 / 2", options: [50, 52, 51, 55], correctAnswer: 55 },
         { id: 9, question: "a va b natural sonlar uchun a · b = 30 bo‘lsa, a + 2b − 1 ifodaning eng kichik qiymatini toping.?", options: [16, 15, 12, 31], correctAnswer: 16 },
        { id: 11, question: "Hisoblang: 7, 2 (1) − 4, 4 (2) + 31/90", options: ["3.1(3)", "3.1(2)", "2.1(3)", "2.1(1)"], correctAnswer: "2.1(3)" },
        { id: 12, question: "Do‘kon 3 kunda jami 175 kg kartoshka sotdi. Agar ikkinchi kun uchinchi kunga nisbatan 1,5 marta ko‘p birinchi kun esa ikkinchi kunga nisbatan 2,4 marta kam kartoshka sotgan bo‘lsa, do‘kon birinchi kun necha kilogramm kartoshka sotgan?", options: [35, 44, 56, 27], correctAnswer: 56 },
        { id: 13, question: "What is 110 / 2", options: [50, 52, 51, 55], correctAnswer: 55 },
        { id: 14, question: "a va b natural sonlar uchun a · b = 30 bo‘lsa, a + 2b − 1 ifodaning eng kichik qiymatini toping.?", options: [16, 15, 12, 31], correctAnswer: 16 },
        { id: 15, question: "Hisoblang: 7, 2 (1) − 4, 4 (2) + 31/90", options: ["3.1(3)", "3.1(2)", "2.1(3)", "2.1(1)"], correctAnswer: "2.1(3)" },
        { id: 16, question: "Do‘kon 3 kunda jami 175 kg kartoshka sotdi. Agar ikkinchi kun uchinchi kunga nisbatan 1,5 marta ko‘p birinchi kun esa ikkinchi kunga nisbatan 2,4 marta kam kartoshka sotgan bo‘lsa, do‘kon birinchi kun necha kilogramm kartoshka sotgan?", options: [35, 44, 56, 27], correctAnswer: 56 },
        { id: 17, question: "What is 110 / 2", options: [50, 52, 51, 55], correctAnswer: 55 },
        { id: 18, question: "a va b natural sonlar uchun a · b = 30 bo‘lsa, a + 2b − 1 ifodaning eng kichik qiymatini toping.?", options: [16, 15, 12, 31], correctAnswer: 16 },
        { id: 19, question: "Hisoblang: 7, 2 (1) − 4, 4 (2) + 31/90", options: ["3.1(3)", "3.1(2)", "2.1(3)", "2.1(1)"], correctAnswer: "2.1(3)" },
        { id: 20, question: "Do‘kon 3 kunda jami 175 kg kartoshka sotdi. Agar ikkinchi kun uchinchi kunga nisbatan 1,5 marta ko‘p birinchi kun esa ikkinchi kunga nisbatan 2,4 marta kam kartoshka sotgan bo‘lsa, do‘kon birinchi kun necha kilogramm kartoshka sotgan?", options: [35, 44, 56, 27], correctAnswer: 56 },
        { id: 21, question: "What is 110 / 2", options: [50, 52, 51, 55], correctAnswer: 55 },
        { id: 22, question: "a va b natural sonlar uchun a · b = 30 bo‘lsa, a + 2b − 1 ifodaning eng kichik qiymatini toping.?", options: [16, 15, 12, 31], correctAnswer: 16 },
        { id: 23, question: "Hisoblang: 7, 2 (1) − 4, 4 (2) + 31/90", options: ["3.1(3)", "3.1(2)", "2.1(3)", "2.1(1)"], correctAnswer: "2.1(3)" },
        { id: 24, question: "Do‘kon 3 kunda jami 175 kg kartoshka sotdi. Agar ikkinchi kun uchinchi kunga nisbatan 1,5 marta ko‘p birinchi kun esa ikkinchi kunga nisbatan 2,4 marta kam kartoshka sotgan bo‘lsa, do‘kon birinchi kun necha kilogramm kartoshka sotgan?", options: [35, 44, 56, 27], correctAnswer: 56 },
        { id: 25, question: "What is 110 / 2", options: [50, 52, 51, 55], correctAnswer: 55 },
         { id: 26, question: "a va b natural sonlar uchun a · b = 30 bo‘lsa, a + 2b − 1 ifodaning eng kichik qiymatini toping.?", options: [16, 15, 12, 31], correctAnswer: 16 },
        { id: 27, question: "Hisoblang: 7, 2 (1) − 4, 4 (2) + 31/90", options: ["3.1(3)", "3.1(2)", "2.1(3)", "2.1(1)"], correctAnswer: "2.1(3)" },
        { id: 28, question: "Do‘kon 3 kunda jami 175 kg kartoshka sotdi. Agar ikkinchi kun uchinchi kunga nisbatan 1,5 marta ko‘p birinchi kun esa ikkinchi kunga nisbatan 2,4 marta kam kartoshka sotgan bo‘lsa, do‘kon birinchi kun necha kilogramm kartoshka sotgan?", options: [35, 44, 56, 27], correctAnswer: 56 },
        { id: 29, question: "What is 110 / 2", options: [50, 52, 51, 55], correctAnswer: 55 },
        { id: 30, question: "a va b natural sonlar uchun a · b = 30 bo‘lsa, a + 2b − 1 ifodaning eng kichik qiymatini toping.?", options: [16, 15, 12, 31], correctAnswer: 16 },
        { id: 31, question: "Hisoblang: 7, 2 (1) − 4, 4 (2) + 31/90", options: ["3.1(3)", "3.1(2)", "2.1(3)", "2.1(1)"], correctAnswer: "2.1(3)" },
        { id: 32, question: "Do‘kon 3 kunda jami 175 kg kartoshka sotdi. Agar ikkinchi kun uchinchi kunga nisbatan 1,5 marta ko‘p birinchi kun esa ikkinchi kunga nisbatan 2,4 marta kam kartoshka sotgan bo‘lsa, do‘kon birinchi kun necha kilogramm kartoshka sotgan?", options: [35, 44, 56, 27], correctAnswer: 56 },
        { id: 33, question: "What is 110 / 2", options: [50, 52, 51, 55], correctAnswer: 55 },
        {id:34, question: "Hisoblang 45*23/(45-13)" , options: [40, 42, 43, 45], correctAnswer: 42}
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
            if (selectedAnswers[t.id] === t.correctAnswer) { // q o'rniga t ishlatildi
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
                    <div className='mt-5 shadow' style={{ marginBottom: '20px',minHeight: '200px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
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

export default Test;
