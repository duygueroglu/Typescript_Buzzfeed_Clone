import React, { useState, useEffect} from 'react';
import Title from './components/Title';
import { QuizData, Content } from '../interfaces'
import QuestionsBlock from './components/QuestionsBlock';

const App =() => {

  const [quiz, setQuiz] = useState<QuizData | null>()
  const [chosenAnswerItems, setChosenAnswerItems] = useState<string[]>([])

  console.log(setChosenAnswerItems)
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/quiz-item')
      const json = await response.json()
      setQuiz(json)
    } catch(err){
      console.error(err)
    }
  }

  useEffect (() => {
    fetchData()
  }, [])

  console.log(quiz)

  return (
    <div>
      <Title title={quiz?.title} subtitle={quiz?.subtitle}/>
      {quiz?.content.map((content: Content, id: Content['id']) => (
      <QuestionsBlock 
        key={id}
        quizItem={content}
        setChosenAnswerItems={setChosenAnswerItems}
        />
      ))}
    </div> 
  );
}

export default App;
