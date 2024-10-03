import  { useState, useEffect } from 'react';
import { Button, Radio, Progress } from 'antd';

const Test = () => {
    const questions = [
        { id: 1, question: "What is 2 + 2?", options: [2, 3, 4, 5], correctAnswer: 4 },
        { id: 2, question: "What is 2 * 52", options: [104, 114, 124, 134], correctAnswer: 104 },
        { id: 3, question: "What is 3 x 34?", options: [136, 108, 102, 122], correctAnswer: 102 },
        { id: 4, question: "What is 110 / 2", options: [50, 52, 51, 55], correctAnswer: 55 },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(60); // Umumiy vaqt 60 soniya
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    // Taymer funksiyasi
    useEffect(() => {
        if (timeLeft > 0 && !submitted) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            handleSubmit(); // Vaqt tugaganda avtomatik ravishda natijalarni chiqaradi
        }
    }, [timeLeft, submitted]);

    // Javobni tanlash funksiyasi
    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: answer,
        });
    };

    // Keyingi savolga o'tish
    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    // Javoblarni yuborish funksiyasi
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
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 className={'flex justify-center font-bold text-xl my-4'}>Test Solver</h2>
            <Progress percent={(100 * timeLeft) / 60} showInfo={false} />
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Time Left: {timeLeft} seconds</p>

            {!submitted ? (
                <>
                    <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
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
                        <Button type="primary" onClick={handleNextQuestion}>
                            Next
                        </Button>
                    ) : (
                        <Button type="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    )}
                </>
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <h3 className={'font-semibold text-md my-2'}>Test Completed!</h3>
                    <p className={'font-semibold'}>Your score: {score} / {questions.length}</p>
                </div>
            )}
        </div>
    );
};

export default Test;
