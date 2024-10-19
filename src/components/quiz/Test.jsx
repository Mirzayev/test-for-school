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
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(props.testTime*60);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

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

    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer,
        }));
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        questions.forEach((q) => {
            if (selectedAnswers[q.id] === q.correctAnswer) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
        setSubmitted(true);
    };

    return (
        <div className='shadow-md px-10 pb-[200px] border rounded-lg' style={{ maxWidth: '600px', margin: '0 auto', }}>
            <h2 className={'flex justify-center font-bold text-xl my-4'}>Test Solver</h2>
            <Progress percent={(100 * timeLeft) / 60} showInfo={false} />
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Time Left: {timeLeft} seconds</p>

            {!submitted ? (
                <>
                    <div className='mt-5 shadow' style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
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

                    {currentQuestionIndex < questions.length - 1 ? (
                       <div className='flex justify-center gap-3'>
                         <Button type="primary" onClick={handleNextQuestion}>
                            Prev
                        </Button>
                        <Button type="primary" onClick={handleNextQuestion}>
                            Next
                        </Button>
                       </div>
                    ) : (
                        <Button type="primary" onClick={handleSubmit}>
                            Finish
                        </Button>
                    )}
                    <div>
                        <h2>{index}</h2>
                    </div>
                </>
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <h3 className={'font-semibold text-lg my-2'}>Test Yakunlandi!</h3>
                    <p className={'font-semibold text-lg '}>Sizning natijangiz:  {(score / questions.length) * 100}%</p>
                    
                </div>
            )}
        </div>
    );
};

export default Test;
 