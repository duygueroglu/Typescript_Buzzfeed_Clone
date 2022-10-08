interface QuizData {
     title: string;
     subtitle: string;
     quizId: string;
     content: Content[];
     answer: Answer[];
}

interface Answer {
     text: string;
     image: string;
     alt: string;
     combination: string[]
}

interface Content {
    id: number;
    text: string;
    questions: Question[];
}

interface Question {
    text: string;
    image: string;
    alt: string;
    credits: string;
}

export { QuizData, Answer, Content, Question}
