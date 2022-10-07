interface QuizData{
     title:string;
     subtitle:string;
     quizId:string;
     content: Content[];
     answer:Answer[];
}

interface Answer{
     text:string;
     image:string;
     alt:string;
     combination:string[]
}
